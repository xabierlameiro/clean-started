import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ColumnDef } from '@tanstack/react-table';
import { Person } from '@/mocks/mockMakeDataList';
import { LogEntry } from '@/mocks/mockLogsDataList';
import { Trash } from '@/assets/icons/Trash';
import { Eye } from '@/assets/icons/Eye';

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

const useColumns = (data: Person | LogEntry, columnHelper: any, showDetails: boolean | null, handleRemoveRow: any) => {
    const columns = React.useMemo<ColumnDef<Person | LogEntry, any>[]>(() => {
        const columnDefinitions = Object.keys(data).map((key) => {
            return columnHelper.accessor(key, {
                header: () => <span>{key}</span>,
                footer: (props: any) => props.column.id,
                cell: EditableCell,
                meta: {
                    type: typeof key === 'number' ? 'number' : 'text',
                },
            });
        });

        columnDefinitions.push(
            columnHelper.display({
                id: 'actions',
                header: () => <span>Actions</span>,
                cell: ({ row }: any) => {
                    return (
                        <button onClick={() => handleRemoveRow(row)}>
                            <Trash className="h-4 w-4" alt="delete row" />
                        </button>
                    );
                },
                meta: {
                    type: 'button',
                },
            })
        );
        {
            showDetails &&
                columnDefinitions.push(
                    columnHelper.display({
                        id: 'details',
                        header: () => <span>Details</span>,
                        cell: () => {
                            return (
                                <Link href={'/logs'} className="flex justify-center">
                                    <Eye className="h-4 w-4" alt="delete row" />
                                </Link>
                            );
                        },
                        meta: {
                            type: 'button',
                        },
                    })
                );
        }

        return [
            {
                id: 'Header',
                columns: columnDefinitions,
            },
        ];
    }, [columnHelper, handleRemoveRow, data, showDetails]);

    return columns;
};
export default useColumns;
