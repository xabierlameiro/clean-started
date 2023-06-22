import { useCallback } from 'react';
import { FilterFn } from '@tanstack/react-table';
import { rankItem } from '@tanstack/match-sorter-utils';
import { Plan } from '@/mocks/mockPlanDataList';
import { LogEntry } from '@/mocks/mockLogsDataList';
import { LogDetail } from '@/mocks/mockLogsDataList';

const useTable = (
    data: (Plan | LogEntry | LogDetail)[],
    setData: React.Dispatch<React.SetStateAction<(Plan | LogEntry | LogDetail)[]>>
) => {
    const handleAddRow = () => {
        let newData = {} as Plan;

        newData = {
            id_plan: crypto.randomUUID().slice(0, 4),
            tipo_documento: '',
            canal: '',
            proveedor: '',
            soporte: '',
            formato: '',
            seccion: '',
            segmentacion: '',
            fecha_inicio: '',
            fecha_fin: '',
            tipo_cv: '',
            cantidad_compra: '',
            precio_compra: '',
            importe_compra: '',
            fee_porcentaje: '',
            fee_euros: '',
            cantidad_venta: '',
            precio_venta: '',
            importe_venta: '',
            importe_venta_estimado: '',
            venta_fee: '',
            margen_inicial: '',
            acciones: '',
        };

        setData([...data, newData]);
    };

    const handleRemoveRow = useCallback(
        (row: any) => {
            const updatedData = data.filter((d: any) => d.id_plan !== row.original.id_plan);
            setData(updatedData);
        },
        [data, setData]
    );

    const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
        // Rank the item
        const itemRank = rankItem(row.getValue(columnId), value);

        // Store the itemRank info
        addMeta({
            itemRank,
        });

        // Return if the item should be filtered in/out
        return itemRank.passed;
    };

    return {
        handleAddRow,
        handleRemoveRow,
        fuzzyFilter,
    };
};

export default useTable;
