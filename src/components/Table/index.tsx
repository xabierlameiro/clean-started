import { useState } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
    createColumnHelper,
    ColumnFiltersState,
} from '@tanstack/react-table';
import { Plan } from '@/mocks/mockPlansDataList';
import { PlanDetail } from '@/mocks/mockPlanDetailDataList';
import { Log } from '@/mocks/mockLogsDataList';
import { LogDetail } from '@/mocks/mockLogDetailDataList';
import { DebouncedInput } from '@/components/Table/utils/globalFIlter';
import { fuzzyFilter } from '@/components/Table/utils/fuzzyFilter';
import useTable from './hooks/useTable';
import useColumns from './hooks/useColumns';
import TablePagination from './Pagination';
import { IsLogDetailProps } from '@/pages/logs/[logId]';
interface EditableTableProps {
    dataList: (Plan | PlanDetail | Log | LogDetail)[];
    isEditable?: boolean;
    showDetails?: boolean;
    isLogDetail?: IsLogDetailProps;
}

export const EditableTable: React.FC<EditableTableProps> = ({
    dataList,
    isEditable = false,
    showDetails = false,
    isLogDetail = null,
}) => {
    const [data, setData] = useState<(Plan | PlanDetail | Log | LogDetail)[]>(dataList);
    const [globalFilter, setGlobalFilter] = useState<string>('');
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    /**
     * costum useTable Hook to handle funcionality
     */
    const { handleAddRow, handleRemoveRow } = useTable(data, setData);

    /**
     * useColumns is used for dinamic table generation with TanStack columnHelper - check TanStack docs.
     */
    const columnHelper = createColumnHelper<Plan>();
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
        autoResetPageIndex: false, // If true, pagination will reset to page 1 when state changes eg. data is updated, filters change, grouping changes, etc.
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
        <main>
            <section className="flex gap-2 mb-2">
                <DebouncedInput
                    value={globalFilter ?? ''}
                    onChange={(value) => setGlobalFilter(String(value))}
                    className="text-sm px-2 py-1 rounded w-40 shadow border border-block"
                    placeholder="Search all columns..."
                />
                <select
                    title="Select Rows per Page"
                    aria-label="Select Rows per Page"
                    data-testid="page-row-input"
                    className="text-sm px-2 py-1 border rounded w-40"
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
            </section>
            {!isLogDetail ? null : (
                <section className="flex gap-2 bg-slate-200 px-6 pt-4 ">
                    <h2>
                        <strong>ID: </strong>
                        {isLogDetail.ID_Plan}
                    </h2>
                    <h2>
                        <strong>Campaña: </strong>
                        {isLogDetail.campaña}
                    </h2>
                </section>
            )}
            <section className="overflow-x-scroll mb-2">
                <table className="bg-white text-center mb-2 min-w-full">
                    <thead className="bg-slate-200 border border-solid rounded-lg">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <th
                                            className={`border border-solid p-1 text-center ${
                                                header.id === 'actions' && 'sticky left-0 z-10 bg-slate-200'
                                            }`}
                                            key={header.id}
                                            colSpan={header.colSpan}
                                        >
                                            {header.isPlaceholder ? null : (
                                                //Control the column width on className bellow
                                                <div className="border text-center w-48 m-auto">
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
                                            <td
                                                className={`border border-solid py-1 w-fit ${
                                                    cell.column.id === 'actions' && 'sticky left-0 z-10 bg-white'
                                                }`}
                                                key={cell.id}
                                            >
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
            <TablePagination table={table} />
        </main>
    );
};
