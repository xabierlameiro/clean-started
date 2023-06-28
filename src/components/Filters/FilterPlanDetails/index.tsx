import React, { ChangeEvent, useState } from 'react';
import { SubmenuPlanDetails } from '@/components/Submenu/SubmenuPlanDetails';

type FilterParams = {
    ID_Plan: string | undefined;
    client: string | undefined;
    anouncer: string | undefined;
    brand: string | undefined;
    campaign: string | undefined;
    facture: string | undefined;
    startDate: string | undefined;
    endDate: string | undefined;
    period: string | undefined;
    planner: string | undefined;
};

export const FilterPlanDetails = () => {
    const [filterParams, setFilterParams] = useState<FilterParams>({
        ID_Plan: '',
        client: '',
        anouncer: '',
        brand: '',
        campaign: '',
        facture: '',
        startDate: '',
        endDate: '',
        period: '',
        planner: '',
    });
    const { ID_Plan, client, anouncer, brand, campaign, facture, startDate, endDate, period, planner } = filterParams;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFilterParams((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // TODO: ADD FUNCTION LOGIC
    const handleSearch = () => {};

    // DISABLED WHEN FILE TYPE NOT SELECTED
    return (
        <>
            <section className="w-full mb-4 border-2 shadow-lg">
                <SubmenuPlanDetails />
                <div className="flex flex-col gap-4 bg-white p-4">
                    <div className="flex items-center gap-2 gap-y-4 flex-wrap">
                        <input
                            type="text"
                            placeholder="Cliente"
                            className={`text-md px-2 py-1 border rounded w-32 flex-grow`}
                            name="client"
                            value={client}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            type="text"
                            placeholder="Anunciante"
                            className={`text-md px-2 py-1 border rounded w-32 flex-grow `}
                            name="anouncer"
                            value={anouncer}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="flex items-center gap-2 gap-y-4 flex-wrap">
                        <input
                            type="text"
                            placeholder="Marca"
                            className={`text-md px-2 py-1 border rounded w-32 flex-grow `}
                            name="brand"
                            value={brand}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            type="text"
                            placeholder="Campaña"
                            className={`text-md px-2 py-1 border rounded w-32 flex-grow `}
                            name="campaign"
                            value={campaign}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="flex items-center gap-2 gap-y-4 flex-wrap">
                        <input
                            type="text"
                            placeholder={ID_Plan || 'ID Plan'}
                            className={`px-2 py-1 border rounded w-24 `}
                            name="ID_Plan"
                            disabled
                        />
                        <select
                            className="w-32 px-2 py-1 border-1 rounded"
                            name="facture"
                            value={facture}
                            onChange={(e) => handleInputChange(e)}
                        >
                            <option value="" hidden selected>
                                Facturación
                            </option>
                            <option value="monthly">Mensual</option>
                            <option value="anticipated">Antecipada</option>
                        </select>

                        <input
                            type="date"
                            placeholder="Fecha Inicio"
                            className={`text-sm px-2 py-1 border rounded w-40`}
                            name="startDate"
                            value={startDate}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            type="date"
                            placeholder="Fecha Fin"
                            className={`text-sm px-2 py-1 border rounded w-40`}
                            name="endDate"
                            value={endDate}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            type="date"
                            placeholder="Periodo Contable"
                            className={`text-sm px-2 py-1 border rounded w-40`}
                            name="period"
                            value={period}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            type="text"
                            placeholder="Panificador"
                            className={`px-2 py-1 border rounded flex-grow  `}
                            name="planner"
                            value={planner}
                            disabled
                        />
                    </div>
                    <div className="flex items-center gap-2"></div>
                </div>
            </section>
            <button
                className="w-full h-10 mb-4 bg-primary-color text-white font-bold rounded shadow hover:bg-primary-color-light"
                onClick={handleSearch}
            >
                Buscar
            </button>
        </>
    );
};
