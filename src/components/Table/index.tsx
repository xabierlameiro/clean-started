import { useState } from 'react';
import { useSkipper } from './utils/actionsTable';
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
    createColumnHelper,
    ColumnFiltersState,
} from '@tanstack/react-table';
import { Person } from '@/mocks/mockMakeDataList';
import { LogEntry } from '@/mocks/mockLogsDataList';
import { DebouncedInput } from '@/components/Table/utils/globalFIlter';
import { fuzzyFilter } from '@/components/Table/utils/fuzzyFilter';
import useTable from './hooks/useTable';
import useColumns from './hooks/useColumns';
import TablePagination from './Pagination';
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

    /**
     * costum useTable Hook to handle funcionality
     */
    const { handleAddRow, handleRemoveRow } = useTable(data, setData);

    /**
     * useColumns is used for dinamic table generation with TanStack columnHelper - check TanStack docs.
     */
    const columnHelper = createColumnHelper<Person>();
    const columns = useColumns(dataList[0], columnHelper, isEditable, showDetails, handleRemoveRow, handleAddRow);

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
                        className="p-2 font-lg shadow border border-block mb-2"
                        placeholder="Search all columns..."
                    />
                    <select
                        title="Select Rows per Page"
                        aria-label="Select Rows per Page"
                        data-testid="page-row-input"
                        className="ml-2"
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
                </div>

                <table className="bg-white table-auto text-center mb-2">
                    <thead className="bg-slate-200 border border-solid rounded-lg">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr className="w-fit" key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <th key={header.id} colSpan={header.colSpan}>
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
                <TablePagination table={table} />
            </div>
        </>
    );
};
