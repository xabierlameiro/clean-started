import React, { useCallback } from 'react';

import {
    Column,
    Table,
    ColumnDef,
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
} from '@tanstack/react-table';
import { makeData } from '@/mocks/mockMakeDataList';

type Person = {
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
};

// TODO: React Hook "useState" is called in function "cell" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use".eslintreact-hooks/rules-of-hooks
// TODO: No se puede usar hooks dentro de funciones que no sean componentes de react o custom hooks con el prefijo useBLABLA
// Give our default column cell renderer editing superpowers!
const defaultColumn: Partial<ColumnDef<Person>> = {
    /*     cell: ({ getValue, row: { index }, column: { id }, table }) => {
        const initialValue = getValue();
        // We need to keep and update the state of the cell normally
        const [value, setValue] = useState(initialValue);

        // When the input is blurred, we'll call our table meta's updateData function
        const onBlur = () => {
            table.options.meta?.updateData(index, id, value);
        };

        // If the initialValue is changed external, sync it up with our state
        useEffect(() => {
            setValue(initialValue);
        }, [initialValue]);

        return <input value={value as string} onChange={(e) => setValue(e.target.value)} onBlur={onBlur} />;
    }, */
};

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

export default function Table() {
    const [data, setData] = React.useState(() => makeData(1000));

    const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();

    const handleRemoveRow = useCallback(
        (row: any) => {
            const a = data.filter(
                (d) => `${d.firstName}${d.lastName}` !== `${row.original.firstName}${row.original.lastName}`
            );
            setData(a);
        },
        [data]
    );

    const handleAddRow = () => {
        data.push({
            firstName: '',
            lastName: '',
            age: 0,
            visits: 0,
            status: 'single',
            progress: 0,
        });
        setData([...data]);
    };
    const columns = React.useMemo<ColumnDef<Person>[]>(
        () => [
            {
                header: '',
                id: 'Header',
                columns: [
                    {
                        accessorKey: 'firstName',
                        footer: (props) => props.column.id,
                    },
                    {
                        accessorFn: (row) => row.lastName,
                        id: 'lastName',
                        header: () => <span>Last Name</span>,
                        footer: (props) => props.column.id,
                    },
                    {
                        accessorKey: 'age',
                        header: () => 'Age',
                        footer: (props) => props.column.id,
                    },
                    {
                        accessorKey: 'visits',
                        header: () => <span>Visits</span>,
                        footer: (props) => props.column.id,
                    },
                    {
                        accessorKey: 'status',
                        header: 'Status',
                        footer: (props) => props.column.id,
                    },
                    {
                        accessorKey: 'progress',
                        header: 'Profile Progress',
                        footer: (props) => props.column.id,
                    },
                    {
                        header: 'Actions',
                        footer: (props) => props.column.id,
                        cell: ({ row }) => {
                            return (
                                <button onClick={() => handleRemoveRow(row)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                        />
                                    </svg>
                                </button>
                            );
                        },
                    },
                ],
            },
        ],
        [handleRemoveRow]
    );

    const table = useReactTable({
        data,
        columns,
        defaultColumn,
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

    return (
        <>
            <div className="overflow-x-scroll overflow-y-hidden">
                <table className="bg-white border border-solid rounded-lg w-full h-auto">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <th className="text-center" key={header.id} colSpan={header.colSpan}>
                                            {header.isPlaceholder ? null : (
                                                <div className="text-center">
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
}
function Filter({ column, table }: { column: Column<any, any>; table: Table<any> }) {
    const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);
    const columnFilterValue = column.getFilterValue();
    return typeof firstValue === 'number' ? (
        <div className="flex ml-10 space-x-2">
            <input
                type="number"
                value={(columnFilterValue as [number, number])?.[0] ?? ''}
                onChange={(e) => column.setFilterValue((old: [number, number]) => [e.target.value, old?.[1]])}
                placeholder={`Min`}
                className="w-20 border shadow rounded"
            />
            <input
                type="number"
                value={(columnFilterValue as [number, number])?.[1] ?? ''}
                onChange={(e) => column.setFilterValue((old: [number, number]) => [old?.[0], e.target.value])}
                placeholder={`Max`}
                className="w-20 border shadow rounded"
            />
        </div>
    ) : (
        <input
            type="text"
            value={(columnFilterValue ?? '') as string}
            onChange={(e) => column.setFilterValue(e.target.value)}
            placeholder={`Search...`}
            className="w-36 border shadow rounded"
        />
    );
}
