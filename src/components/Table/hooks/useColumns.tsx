import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Person } from '@/mocks/mockMakeDataList';
import { LogEntry } from '@/mocks/mockLogsDataList';
import { Eye } from '@/assets/icons/Eye';
import { Plus } from '@/assets/icons/plus';
import { Minus } from '@/assets/icons/Minus';

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
    handleRemoveRow: any,
    handleAddRow: any
) => {
    const columns = useMemo<ColumnDef<Person | LogEntry, any>[]>(() => {
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
                columnDefinitions.unshift(
                    columnHelper.display({
                        id: 'actions',
                        header: () => (
                            <div className="flex justify-center items-center">
                                <button
                                    title="Create New Row"
                                    aria-label="Create New Row"
                                    data-testid="create-row-button"
                                    className="h-10 w-10 bg-primary-color text-white rounded hover:bg-primary-color-light flex justify-center items-center"
                                    onClick={() => handleAddRow()}
                                >
                                    <Plus alt="add new row" className="h-6 w-6" />
                                </button>
                            </div>
                        ),
                        cell: ({ row }: any) => {
                            return (
                                <div className="flex justify-center items-center">
                                    <button
                                        title="Delete Current Row"
                                        aria-label="Delete Current Row"
                                        data-testid="delete-row-button"
                                        className="h-8 w-8 bg-red-400  text-white rounded hover:bg-red-500 flex justify-center items-center"
                                        onClick={() => handleRemoveRow(row)}
                                    >
                                        <Minus alt="add new row" className="h-4 w-4" />
                                    </button>
                                </div>
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
                        cell: ({ row }: any) => {
                            return (
                                <Link href={`/logs/logDetails=${row.original.id}`} className="flex justify-center">
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
    }, [columnHelper, handleRemoveRow, handleAddRow, data, showDetails, isEditable]);

    return columns;
};
export default useColumns;
