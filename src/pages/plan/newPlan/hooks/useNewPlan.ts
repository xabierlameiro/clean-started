import { Dispatch, SetStateAction } from 'react';
import { SelectorOptionsType } from 'src/types/Table';

export const useNewPlan = <T extends Object>(formData: T, setFormData: Dispatch<SetStateAction<T>>) => {
    const selectorOptions: SelectorOptionsType[] = [
        { name: 'Selecciona...', value: '' },
        { name: 'Compra-Venta', value: 'buy-sell' },
        { name: 'Proforma', value: 'proform' },
        { name: 'Factura', value: 'invoice' },
    ];

    const onSavePlan = () => {
        setFormData({
            ...formData,
            saved: true,
        });
    };

    return { selectorOptions, onSavePlan };
};
