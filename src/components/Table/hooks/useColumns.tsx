import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ColumnDef } from '@tanstack/react-table';
import { Person } from '@/mocks/mockMakeDataList';
import { LogEntry } from '@/mocks/mockLogsDataList';
import { Trash } from '@/assets/icons/Trash';
import { Eye } from '@/assets/icons/Eye';

type EditableCellProps = {
    getValue: () => any;
    row: any;
    column: any;
    table: any;
    isEditable: boolean;
};

const EditableCell = ({ getValue, row, column, table, isEditable }: EditableCellProps) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);
    const onBlur = () => {
        table.options.meta?.updateData(row.index, column.id, value);
    };
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    if (isEditable) {
        return <input value={value} onChange={(e) => setValue(e.target.value)} onBlur={onBlur} />;
    } else {
        return <span>{value}</span>;
    }
};

const useColumns = (
    data: Person | LogEntry,
    columnHelper: any,
    isEditable: boolean,
    showDetails: boolean,
    handleRemoveRow: any
) => {
    const columns = React.useMemo<ColumnDef<Person | LogEntry, any>[]>(() => {
        const defaultData = showDetails
            ? { id: null, person: null, page: null, action: null }
            : { id: null, titular: null, amount: null, stateDoc: null, campaing: null, customer: null, numDoc: null };

        const columnDefinitions = Object.keys(data || defaultData).map((key) => {
            return columnHelper.accessor(key, {
                header: () => <span>{key}</span>,
                footer: (props: any) => props.column.id,
                cell: (props: EditableCellProps) => EditableCell({ ...props, isEditable }),
                meta: {
                    type: typeof key === 'number' ? 'number' : 'text',
                },
                filterFn: key === 'titular' || key === 'id' ? 'fuzzy' : undefined,
            });
        });
        {
            isEditable &&
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
        }
        {
            showDetails &&
                columnDefinitions.push(
                    columnHelper.display({
                        id: 'details',
                        header: () => <span>Details</span>,
                        cell: () => {
                            return (
                                <Link href={'/logs/logDetails'} className="flex justify-center">
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
    }, [columnHelper, handleRemoveRow, data, showDetails, isEditable]);

    return columns;
};
export default useColumns;
