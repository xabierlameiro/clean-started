import React, { useCallback } from 'react';

import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
    createColumnHelper,
    ColumnFiltersState,
    FilterFn,
} from '@tanstack/react-table';
import { Person } from '@/mocks/mockMakeDataList';
import { rankItem } from '@tanstack/match-sorter-utils';
import { DebouncedInput } from '@/components/Table/utils/globalFIlter';
import { useRouter } from 'next/router';

interface EditableTableProps<T> {
    // eslint-disable-next-line no-unused-vars
    useColumns: (columnHelper: any, handleRemoveRow: any) => any;
    dataList: T[];
    isEditable: boolean;
}
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

export const EditableTable: React.FC<EditableTableProps<any>> = ({ useColumns, dataList, isEditable }) => {
    const [data, setData] = React.useState(dataList);
    const [globalFilter, setGlobalFilter] = React.useState('');
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();

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
    const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
        // Rank the item
        const itemRank = rankItem(row.getValue(columnId), value);

        // Store the itemRank info
        addMeta({
            itemRank,
        });

        // Return if the item should be filtered in/out
        return itemRank.passed;
    };
    const columnHelper = createColumnHelper<Person>();
    const columns = useColumns(columnHelper, handleRemoveRow);
    //const columnFilterValue = columns.getFilterValue();
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        globalFilterFn: fuzzyFilter,
        onGlobalFilterChange: setGlobalFilter,
        onColumnFiltersChange: setColumnFilters,
        autoResetPageIndex,
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        state: {
            columnFilters,
            globalFilter,
        },
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
            <div className="flex justify-center flex-col overflow-x-scroll overflow-y-hidden">
                <div>
                    <DebouncedInput
                        value={globalFilter ?? ''}
                        onChange={(value) => setGlobalFilter(String(value))}
                        className="p-2 font-lg shadow border border-block"
                        placeholder="Search all columns..."
                    />
                </div>
                <div className="h-2" />
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
                                            <td className="text-center" key={cell.id}>
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
                        {isEditable && (
                            <button
                                className="w-36 h-8 bg-primary-color rounded text-white font-bold"
                                onClick={() => handleAddRow()}
                            >
                                <span>Añadir Fila</span>
                            </button>
                        )}
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
