import React, { useCallback } from 'react';

import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
    createColumnHelper,
} from '@tanstack/react-table';
import { PersonsDataList, Person } from '@/mocks/mockMakeDataList';
import { Filter } from '@/components/Table/filterTable';
import useColumns from '@/components/Table/columns';

function useSkipper() {
    const shouldSkipRef = React.useRef(true);
    const shouldSkip = shouldSkipRef.current;

    // Wrap a function with this to skip a pagination reset temporarily
    const skip = React.useCallback(() => {
        shouldSkipRef.current = false;
    }, []);

    React.useEffect(() => {
        shouldSkipRef.current = true;
    });

    return [shouldSkip, skip] as const;
}

export const EditableTable = () => {
    const [data, setData] = React.useState(PersonsDataList);

    const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();

    //const [globalFilter, setGlobalFilter] = React.useState('');

    const handleRemoveRow = useCallback(
        (row: any) => {
            const a = data.filter((d) => d.id !== row.original.id);
            setData(a);
        },
        [data]
    );
    const handleAddRow = () => {
        data.push({
            id: `${Math.floor(Math.random() * 9999)}`,
            name: '',
            dateOfBirth: '',
            major: '',
        });
        setData([...data]);
    };
    const columnHelper = createColumnHelper<Person>();

    const columns = useColumns(columnHelper, handleRemoveRow);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        autoResetPageIndex,
        // Provide our updateData function to our table meta
        meta: {
            updateData: (rowIndex: number, columnId: string, value: any) => {
                // Skip page index reset until after next rerender
                skipAutoResetPageIndex();
                setData((old) =>
                    old.map((row, index) => {
                        if (index === rowIndex) {
                            return {
                                ...old[rowIndex]!,
                                [columnId]: value,
                            };
                        }
                        return row;
                    })
                );
            },
        },
        debugTable: true,
    });
    /* function DebouncedInput({
        value: initialValue,
        onChange,
        debounce = 1500,
        ...props
    }: {
        value: string | number;
        // eslint-disable-next-line no-unused-vars
        onChange: (value: string | number) => void;
        debounce?: number;
    } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
        const [value, setValue] = React.useState(initialValue);

        React.useEffect(() => {
            setValue(initialValue);
        }, [initialValue]);

        React.useEffect(() => {
            const timeout = setTimeout(() => {
                onChange(value);
            }, debounce);

            return () => clearTimeout(timeout);
        }, [value, debounce, onChange]);

        return <input {...props} value={value} onChange={(e) => setValue(e.target.value)} />;
    } */
    return (
        <>
            <div className="flex justify-center flex-col overflow-x-scroll overflow-y-hidden">
                {/* TODO: GLOBAL FILTER NO ESTA FUNCIONANDO. Lo dejo para mas adelante seguir con el.
                <div>
                    <DebouncedInput
                        value={globalFilter ?? ''}
                        onChange={(value: any) => setGlobalFilter(String(value))}
                        className="p-2 font-lg shadow border border-block"
                        placeholder="Search all columns..."
                    />
                </div> */}
                <table className="bg-white border border-solid rounded-lg h-auto">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <th key={header.id} colSpan={header.colSpan}>
                                            {header.isPlaceholder ? null : (
                                                <div>
                                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                                    {header.column.getCanFilter() ? (
                                                        <div>
                                                            <Filter column={header.column} table={table} />
                                                        </div>
                                                    ) : null}
                                                </div>
                                            )}
                                        </th>
                                    );
                                })}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => {
                            return (
                                <tr className="border" key={row.id}>
                                    {row.getVisibleCells().map((cell) => {
                                        return (
                                            <td key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="h-2" />
                <div className="flex items-center gap-2">
                    <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
                        {'<<'}
                    </button>
                    <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                        {'<'}
                    </button>
                    <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                        {'>'}
                    </button>
                    <button
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>>'}
                    </button>
                    <span className="flex items-center gap-1">
                        <div>Page</div>
                        <strong>
                            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                        </strong>
                    </span>
                    <span className="flex items-center gap-1">
                        | Go to page:
                        <input
                            type="number"
                            defaultValue={table.getState().pagination.pageIndex + 1}
                            onChange={(e) => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                table.setPageIndex(page);
                            }}
                            className="border p-1 rounded w-16 text-center"
                        />
                    </span>
                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => {
                            table.setPageSize(Number(e.target.value));
                        }}
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                    <div className="h-2 mb-5">
                        <button
                            className="w-36 h-8 bg-primary-color rounded text-white font-bold"
                            onClick={() => handleAddRow()}
                        >
                            <span>Añadir Fila</span>
                        </button>
                    </div>
                </div>

                {/* <div>{table.getRowModel().rows.length} Rows</div>
                <div>
                    <button onClick={() => rerender()}>Force Rerender</button>
                </div>
                <div>
                    <button onClick={() => refreshData()}>Refresh Data</button>
                </div> */}
            </div>
        </>
    );
};
// function Filter({ column }: { column: Column<any, any>; table: Table<any> }) {
//     const columnFilterValue = column.getFilterValue();

//     return (
//         <input
//             type="text"
//             value={(columnFilterValue ?? '') as string}
//             onChange={(e) => column.setFilterValue(e.target.value)}
//             placeholder={`Search...`}
//             className="w-36 border shadow rounded"
//         />
//     );
// }
