import { ChevronDoubleLeft } from '@/assets/icons/ChevronDoubleLeft';
import { ChevronDoubleRight } from '@/assets/icons/ChevronDoubleRight';
import { ChevronLeft } from '@/assets/icons/ChevronLeft';
import { ChevronRight } from '@/assets/icons/ChevronRight';

export default function TablePagination({ table }: any) {
    return (
        <div className="flex items-center gap-4 bg-white p-2">
            <nav className="flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <button
                    title="First Page"
                    aria-label="First Page"
                    data-testid="first-page-button"
                    className="flex items-center rounded-l-md px-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    <ChevronDoubleLeft className="h-5 w-5" alt="first Page" />
                </button>
                <button
                    title="Previous Page"
                    aria-label="Previous Page"
                    data-testid="previous-page-button"
                    className="flex items-center rounded-l-md px-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <ChevronLeft className="h-5 w-5" alt="first Page" />
                </button>
                <span className=" flex items-center p-1 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                    <input
                        title="Current Page"
                        aria-label="Current Page"
                        data-testid="current-page-input"
                        className="border-0 w-16 text-right"
                        type="number"
                        value={table.getState().pagination.pageIndex + 1}
                        min={1}
                        max={table.getPageCount()}
                        onClick={(e) => e.currentTarget.select()}
                        onChange={(e) => {
                            const inputValue = Number(e.target.value);
                            const page = inputValue > table.getPageCount() ? table.getPageCount() - 1 : inputValue - 1;
                            table.setPageIndex(page);
                        }}
                    />
                </span>
                <button
                    title="Next Page"
                    aria-label="Next Page"
                    data-testid="next-page-button"
                    className="flex items-center rounded-r-md px-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    <ChevronRight className="h-5 w-5" alt="first Page" />
                </button>
                <button
                    title="Last Page"
                    aria-label="Last Page"
                    data-testid="last-page-button"
                    className="flex items-center rounded-r-md px-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    <ChevronDoubleRight className="h-5 w-5" alt="last Page" />
                </button>
            </nav>

            <div className="text-sm text-gray-700">
                <p>
                    Showing{' '}
                    <span className="font-medium">
                        {table.getRowModel().rows.length} of {table.getCoreRowModel().rows.length}
                    </span>{' '}
                    results
                </p>
                <p>
                    Page{' '}
                    <span className="font-medium">
                        {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                    </span>
                </p>
            </div>
        </div>
    );
}
