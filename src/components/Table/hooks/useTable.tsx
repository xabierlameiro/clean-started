import { useCallback } from 'react';
import { FilterFn } from '@tanstack/react-table';
import { rankItem } from '@tanstack/match-sorter-utils';
import { Plan } from '@/mocks/mockPlansDataList';
import { PlanDetail } from '@/mocks/mockPlanDetailDataList';
import { Log } from '@/mocks/mockLogsDataList';
import { LogDetail } from '@/mocks/mockLogDetailDataList';
const useTable = (
    data: (Plan | PlanDetail | Log | LogDetail)[],
    setData: React.Dispatch<React.SetStateAction<(Plan | PlanDetail | Log | LogDetail)[]>>
) => {
    const handleAddRow = () => {
        let newPlanLine = {} as PlanDetail;

        newPlanLine = {
            id_linea: `${data.length + 1}`,
            orden_compra: crypto.randomUUID().slice(0, 6),
            panificador: '',
            tipo_documento: '',
            tipo_cliente: '',
            canal: '',
            discripción: '',
            proveedor: '',
            suporte: '',
            formato: '',
            comentários: '',
            fecha_inicio: '',
            fecha_fin: '',
            tipo_cv: '',
            cantidad_compra: '',
            precio_compra: '',
            importe_venta: '',
            margen_real: '',
            venta_fee: '',
            referencia_cliente: '',
            importe_venta_estimado: '',
            margen_estimado: '',
        };

        setData([...data, newPlanLine]);
    };

    const handleRemoveRow = useCallback(
        (row: any) => {
            const updatedData = data.filter((d: any) => d.id_linea !== row.original.id_linea);
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
