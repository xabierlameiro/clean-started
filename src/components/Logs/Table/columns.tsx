import React from 'react';

import { ColumnDef } from '@tanstack/react-table';
import { LogEntry } from '@/mocks/mockLogsDataList';

const useColumns = (columnHelper: any) => {
    const columns = React.useMemo<ColumnDef<LogEntry, any>[]>(
        () => [
            {
                id: 'Header',
                columns: [
                    columnHelper.accessor('id', {
                        header: () => <span>Id</span>,
                        footer: (props: any) => props.column.id,
                        meta: {
                            type: 'number',
                        },
                    }),
                    columnHelper.accessor('person', {
                        footer: (props: any) => props.column.id,
                        header: () => <span>Person</span>,
                        meta: {
                            type: 'text',
                        },
                    }),
                    columnHelper.accessor('page', {
                        footer: (props: any) => props.column.id,
                        header: () => <span>Page</span>,
                        meta: {
                            type: 'text',
                        },
                    }),
                    columnHelper.accessor('action', {
                        footer: (props: any) => props.column.id,
                        header: () => <span>Actions</span>,
                        meta: {
                            type: 'text',
                        },
                    }),
                    // columnHelper.display({
                    //     id: 'actions',
                    //     header: () => <span>Actions</span>,
                    //     cell: ({ row }: any) => {
                    //         return (
                    //             <button onClick={() => handleRemoveRow(row)}>
                    //                 <svg
                    //                     xmlns="http://www.w3.org/2000/svg"
                    //                     fill="none"
                    //                     viewBox="0 0 24 24"
                    //                     strokeWidth="1.5"
                    //                     stroke="currentColor"
                    //                     className="w-6 h-6"
                    //                 >
                    //                     <path
                    //                         strokeLinecap="round"
                    //                         strokeLinejoin="round"
                    //                         d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    //                     />
                    //                     <path
                    //                         strokeLinecap="round"
                    //                         strokeLinejoin="round"
                    //                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    //                     />
                    //                 </svg>
                    //             </button>
                    //         );
                    //     },
                    //     meta: {
                    //         type: 'button',
                    //     },
                    // }),
                ],
            },
        ],
        [columnHelper]
    );
    return columns;
};
export default useColumns;
