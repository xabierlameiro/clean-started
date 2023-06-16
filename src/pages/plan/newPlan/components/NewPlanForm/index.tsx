import React from 'react';
import { useForm } from '@/hooks/useForm';
import { NewPlanSubmenu } from './components/NewPlanSubmenu';
import { Save } from '@/assets/icons/Save';
import { mockSelectorOptions } from '@/mocks/mocksNewPlan';

type FormType = {
    customerName: string;
    campain: string;
    docDate: Date;
    status: string;
    startDate: Date;
    endDate: Date;
    documentType: string;
    isCreated: boolean;
};

const initialFormValues = {
    customerName: '',
    campain: '',
    docDate: new Date(),
    status: 'Abierto',
    startDate: new Date(),
    endDate: new Date(),
    documentType: '',
    isCreated: false,
};

export const NewPlanForm = () => {
    const { formData, handleInputChange, setFormData, resetForm } = useForm<FormType>(initialFormValues);
    const { customerName, campain, docDate, status, startDate, endDate, documentType, isCreated } = formData;

    const onSavePlan = () => {
        setFormData({
            ...formData,
            isCreated: true,
        });
    };

    return (
        <>
            <section className="w-full mb-4 border-2 shadow-lg bg-white">
                <NewPlanSubmenu onSave={onSavePlan} isCreated={isCreated} />
                <div className="flex flex-row gap-4 bg-white p-4 pb-2">
                    <div className="flex gap-2 w-3/12 flex-col justify-start items-start">
                        <p className="font-bold">Cliente</p>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className={`px-2 py-1 border rounded w-full`}
                            name="customerName"
                            value={customerName}
                            onChange={handleInputChange}
                            disabled={false}
                        />
                    </div>
                    <div className="flex gap-2 flex-col w-3/12 justify-start items-start">
                        <p className="font-bold">Campaña</p>
                        <input
                            type="text"
                            placeholder="Campaña"
                            className={`px-2 py-1 border rounded w-full`}
                            name="campain"
                            value={campain}
                            onChange={handleInputChange}
                            disabled={false}
                        />
                    </div>
                    <div className="flex gap-2 flex-col w-2/12 justify-start items-start">
                        <p className="font-bold">F. documento</p>
                        <input
                            type={'text'}
                            placeholder="Fecha documento"
                            className={`px-2 py-1 border rounded w-full`}
                            name="docDate"
                            value={docDate.toLocaleDateString()}
                            disabled={true}
                        />
                    </div>
                    <div className="flex gap-2 flex-col w-4/12 justify-start items-start">
                        <p className="font-bold">Estado</p>
                        <p className="py-1 w-full">{status}</p>
                    </div>
                </div>
                <div className="flex flex-row gap-4 bg-white p-4 pt-2 pb-6">
                    <div className="flex gap-2 flex-col w-3/12 justify-start items-start">
                        <p className="font-bold">Fecha de Inicio</p>
                        <input
                            type="date"
                            placeholder="startDate"
                            className={`px-2 py-1 border rounded w-full`}
                            name="startDate"
                            value={startDate.toString()}
                            onChange={handleInputChange}
                            disabled={false}
                        />
                    </div>
                    <div className="flex gap-2 flex-col w-3/12 justify-start items-start">
                        <p className="font-bold">Fecha de fin</p>
                        <input
                            type="date"
                            placeholder="endDate"
                            className={`px-2 py-1 border rounded w-full`}
                            name="endDate"
                            value={endDate.toString()}
                            onChange={handleInputChange}
                            disabled={false}
                        />
                    </div>
                    <div className="flex gap-2 flex-col w-3/12 justify-start items-start">
                        <p className="font-bold">Tipo de documento</p>
                        <select
                            className={`px-2 py-1 border rounded w-full`}
                            name="documentType"
                            value={documentType}
                            onChange={handleInputChange}
                        >
                            {mockSelectorOptions.map(({ name, value }) => {
                                return (
                                    <option key={value} value={value}>
                                        {name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="flex w-3/12 items-center justify-end">
                        <button
                            onClick={resetForm}
                            disabled={false}
                            className="flex flex-col lg:flex-row justify-center items-center text-sm py-1 px-2 border border-gray-400 rounded shadow hover:bg-gray-200"
                        >
                            <Save className=" w-5 h-5 pr-1" alt="arrow up circle" />
                            <span>Resetear formulario</span>
                        </button>
                    </div>
                </div>
            </section>
            <div className="font-bold w-full flex justify-center">
                <p>Líneas de Plan: Primario\122</p>
            </div>
        </>
    );
};
