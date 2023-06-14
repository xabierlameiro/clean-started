import React, { useEffect, useState } from 'react';

import { ColumnDef } from '@tanstack/react-table';
import { Person } from '@/mocks/mockMakeDataList';

const EditableCell = ({ getValue, row, column, table }: any) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);
    const onBlur = () => {
        table.options.meta?.updateData(row.index, column.id, value);
    };
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return <input value={value} onChange={(e) => setValue(e.target.value)} onBlur={onBlur} />;
};

const useColumns = (columnHelper: any, handleRemoveRow: any) => {
    const columns = React.useMemo<ColumnDef<Person, any>[]>(
        () => [
            {
                id: 'Header',
                columns: [
                    columnHelper.accessor('id', {
                        header: () => <span>Id</span>,
                        footer: (props: any) => props.column.id,
                        cell: EditableCell,
                        meta: {
                            type: 'number',
                        },
                        filterFn: 'fuzzy',
                    }),
                    columnHelper.accessor('titular', {
                        footer: (props: any) => props.column.id,
                        header: () => <span>Titular</span>,
                        cell: EditableCell,
                        meta: {
                            type: 'text',
                        },
                        filterFn: 'fuzzy',
                    }),
                    columnHelper.accessor('stateDoc', {
                        footer: (props: any) => props.column.id,
                        header: () => <span>Estado Doc.</span>,
                        cell: EditableCell,
                        meta: {
                            type: 'text',
                        },
                    }),
                    columnHelper.accessor('numDoc', {
                        footer: (props: any) => props.column.id,
                        header: () => <span>Nº Documento</span>,
                        cell: EditableCell,
                        meta: {
                            type: 'text',
                        },
                    }),
                    columnHelper.accessor('customer', {
                        footer: (props: any) => props.column.id,
                        header: () => <span>Cliente</span>,
                        cell: EditableCell,
                        meta: {
                            type: 'text',
                        },
                    }),
                    columnHelper.accessor('campaing', {
                        footer: (props: any) => props.column.id,
                        header: () => <span>Campaña</span>,
                        cell: EditableCell,
                        meta: {
                            type: 'text',
                        },
                    }),
                    /* columnHelper.accessor('DocType', {
                        footer: (props: any) => props.column.id,
                        header: () => <span>Tipo Doc</span>,
                        cell: EditableCell,
                        meta: {
                            type: 'text',
                        },
                    }),
                    columnHelper.accessor('contable', {
                        footer: (props: any) => props.column.id,
                        header: () => <span>F. Contable</span>,
                        cell: EditableCell,
                        meta: {
                            type: 'text',
                        },
                    }), */
                    columnHelper.accessor('amount', {
                        footer: (props: any) => props.column.id,
                        header: () => <span>Importe</span>,
                        cell: EditableCell,
                        meta: {
                            type: 'text',
                        },
                    }),
                    columnHelper.display({
                        id: 'actions',
                        header: () => <span>Actions</span>,
                        cell: ({ row }: any) => {
                            return (
                                <button onClick={() => handleRemoveRow(row)}>
                                    {/* <svg
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
                                    </svg> */}
                                </button>
                            );
                        },
                        meta: {
                            type: 'button',
                        },
                    }),
                ],
            },
        ],
        [columnHelper, handleRemoveRow]
    );
    return columns;
};
export default useColumns;
