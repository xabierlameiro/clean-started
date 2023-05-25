import React, { useState, useMemo, useEffect } from 'react';
import { useTable, usePagination, Column } from 'react-table';
import defaultData from '@/mocks/mockMakeDataList';

// Create an editable cell renderer

const EditableCell = ({ value: initialValue, row: { index }, column: { id }, updateMyData }: any) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    // We'll only update the external data when the input is blurred
    const onBlur = () => {
        updateMyData(index, id, value);
    };

    // If the initialValue is changed externally, sync it up with our state
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return <input value={value} onChange={onChange} onBlur={onBlur} />;
};

// Set our editable cell renderer as the default Cell renderer
const defaultColumn: Partial<Column> = {
    Cell: EditableCell,
};

// Be sure to pass our updateMyData and the skipPageReset option

export const Table = ({
    columns,
    data,
    updateMyData,
    skipPageReset,
}: {
    columns: any;
    data: any;
    updateMyData: any;
    skipPageReset: boolean;
}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            autoResetPage: !skipPageReset,
            updateMyData,
        } as any,
        usePagination
    ) as any;

    // Render the UI for your table
    return (
        <div>
            <div>
                <table className="bg-white border border-solid rounded-lg overflow-hidden" {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup: any, index: number) => (
                            <tr key={`header_${index}`} {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column: any, index: number) => (
                                    <th key={`headerCol_${index}`} {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody className="text-center border border-solid" {...getTableBodyProps()}>
                        {page.map((row: any, i: number) => {
                            prepareRow(row);
                            return (
                                <tr className="border border-solid" key={`page_${i}`} {...row.getRowProps()}>
                                    {row.cells.map((cell: any, i: number) => {
                                        return (
                                            <td key={`cell_${i}`} {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
            </button>{' '}
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span>
                | Go to page:{' '}
                <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={(e) => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0;
                        gotoPage(page);
                    }}
                    style={{ width: '100px' }}
                />
            </span>{' '}
            <select
                value={pageSize}
                onChange={(e) => {
                    setPageSize(Number(e.target.value));
                }}
            >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </div>
    );
};

function App() {
    const columns = useMemo(
        () => [
            {
                Header: ' ',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName',
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName',
                    },
                ],
            },
            {
                Header: ' ',
                columns: [
                    {
                        Header: 'Age',
                        accessor: 'age',
                    },
                    {
                        Header: 'Visits',
                        accessor: 'visits',
                    },
                    {
                        Header: 'Status',
                        accessor: 'status',
                    },
                    {
                        Header: 'Profile Progress',
                        accessor: 'progress',
                    },
                    {
                        Header: 'Actions',
                        accessor: '',
                        // TODO: type here
                        Cell: ({ row }: { row: any }) => {
                            return (
                                <div>
                                    <button onClick={() => deleteRow(row)}>
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
                                </div>
                            );
                        },
                    },
                ],
            },
        ],
        []
    );

    const [data, setData] = useState(defaultData);
    // TODO: This value is not used
    //const [originalData] = useState(data);
    const [skipPageReset, setSkipPageReset] = useState(false);

    // We need to keep the table from resetting the pageIndex when we
    // update data. So we can keep track of that flag with a ref.

    // When our cell renderer calls updateMyData, we'll use
    // the rowIndex, columnId, and new value to update the
    // original data
    const updateMyData = (rowIndex: number, columnId: string, value: any) => {
        // We also turn on the flag to not reset the page
        setSkipPageReset(true);
        setData((old: any) =>
            old.map((row: any, index: any) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    };
                }
                return row;
            })
        );
    };
    const deleteRow = (row: any) => {
        data.splice(row.index, 1);
        console.log('data', data);
        setSkipPageReset(true);
        setData(data);
    };
    // After data changes, we turn the flag back off
    // so that if data actually changes when we're not
    // editing it, the page is reset
    useEffect(() => {
        setSkipPageReset(false);
    }, [data]);

    // Let's add a data resetter/randomizer to help
    // illustrate that flow...
    // TODO: this function is not used
    // const resetData = () => setData(originalData);

    return (
        <>
            <Table
                columns={columns}
                data={data}
                updateMyData={updateMyData}
                // TODO : this component dont have deleteRow
                //deleteRow={deleteRow}
                skipPageReset={skipPageReset}
            />
        </>
    );
}

export default App;
