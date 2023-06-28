import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Plan } from '@/mocks/mockPlansDataList';
import { PlanDetail } from '@/mocks/mockPlanDetailDataList';
import { Log } from '@/mocks/mockLogsDataList';
import { LogDetail } from '@/mocks/mockLogDetailDataList';
import { Eye } from '@/assets/icons/Eye';
import { Plus } from '@/assets/icons/plus';
import { Minus } from '@/assets/icons/Minus';
import { capitalize } from '@/helpers/capitalize.helper';

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
    const suggestions = ['bad sugestion', 'good sugestion', 'great sugestion'];

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    if (isEditable && ['tipo_documento', 'canal', 'proveedor', 'formato', 'soporte'].includes(column.id)) {
        return (
            <select className="text-center" value={value} onChange={(e) => setValue(e.target.value)} onBlur={onBlur}>
                <option value={value}>{value}</option>
                {suggestions.map((suggestion) => (
                    <option key={suggestion} value={suggestion}>
                        {suggestion}
                    </option>
                ))}
            </select>
        );
    } else if (isEditable && ['fecha_inicio', 'fecha_fin'].includes(column.id)) {
        return (
            <input
                className="text-center"
                type="date"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={onBlur}
            />
        );
    } else if (isEditable) {
        return (
            <input className="text-center" value={value} onChange={(e) => setValue(e.target.value)} onBlur={onBlur} />
        );
    } else {
        return <input className="text-center" value={value} disabled />;
    }
};

const useColumns = (
    data: Plan | PlanDetail | Log | LogDetail,
    columnHelper: any,
    isEditable: boolean,
    showDetails: boolean,
    handleRemoveRow: any,
    handleAddRow: any
) => {
    const router = useRouter();
    const isPlanRoute = router.pathname.startsWith('/plan');

    const columns = useMemo<ColumnDef<Plan | PlanDetail | Log | LogDetail, any>[]>(() => {
        const defaultData = showDetails
            ? { id: null, Plan: null, page: null, action: null }
            : { id: null, titular: null, amount: null, stateDoc: null, campaing: null, customer: null, numDoc: null };

        const columnDefinitions = Object.keys(data || defaultData).map((key) => {
            return columnHelper.accessor(key, {
                header: () => <span>{capitalize(key)}</span>,
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
                                <div className="flex justify-center items-center bg-white">
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
                                <Link
                                    href={
                                        isPlanRoute ? `/plan/${row.original.id_plan}` : `/logs/${row.original.ID_Plan}`
                                    }
                                    className="flex justify-center"
                                >
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
    }, [columnHelper, handleRemoveRow, handleAddRow, data, showDetails, isEditable, isPlanRoute]);

    return columns;
};
export default useColumns;
