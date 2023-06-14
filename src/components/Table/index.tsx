import { useState, useCallback } from 'react';

import { useSkipper } from './utils/actionsTable';
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
import { LogEntry } from '@/mocks/mockLogsDataList';
import { rankItem } from '@tanstack/match-sorter-utils';
import { DebouncedInput } from '@/components/Table/utils/globalFIlter';
import useTable from './hooks/useTable';
import useColumns from './hooks/useColumns';
interface EditableTableProps {
    dataList: (Person | LogEntry)[];
    isEditable?: boolean;
    showDetails?: boolean;
}

export const EditableTable: React.FC<EditableTableProps> = ({ dataList, isEditable = false, showDetails = false }) => {
    const [data, setData] = useState<(Person | LogEntry)[]>(dataList);
    const [globalFilter, setGlobalFilter] = useState<string>('');
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();

    const { handleAddRow } = useTable(data, setData);

    const handleRemoveRow = useCallback(
        (row: any) => {
            const updatedData = data.filter((d: any) => d.id !== row.original.id);
            setData(updatedData);
        },
        [data]
    );

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
    const columns = useColumns(dataList[0], columnHelper, showDetails, handleRemoveRow);
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
                <table className="bg-white table-auto text-center">
                    <thead className="bg-slate-200 border border-solid rounded-lg">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr className="w-fit" key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <th className="relative text-center" key={header.id} colSpan={header.colSpan}>
                                            {header.isPlaceholder ? null : (
                                                <div className="border">
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
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => {
                                        return (
                                            <td className="border border-solid p-1" key={cell.id}>
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
            </div>
        </>
    );
};
