import React, { ChangeEvent, useState } from 'react';
import { SubmenuPlan } from '@/components/Submenu/SubmenuPlan';

type FilterParams = {
    id_plan: string;
    titular: string;
    cliente: string;
    canal: string;
    anunciante: string;
    marca: string;
    campaña: string;
    fecha_inicio: String;
    fecha_fin: String;
    importe: string;
    estado: string;
};

export const Filters = () => {
    const [filterParams, setFilterParams] = useState<FilterParams>({
        id_plan: '',
        titular: '',
        cliente: '',
        canal: '',
        anunciante: '',
        marca: '',
        campaña: '',
        fecha_inicio: '',
        fecha_fin: '',
        importe: '',
        estado: '',
    });
    const { id_plan, titular, cliente, canal, anunciante, marca, campaña, fecha_inicio, fecha_fin, estado } =
        filterParams;

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
                <SubmenuPlan />
                <div className="flex flex-col gap-4 bg-white p-4">
                    <section className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Nº Documento"
                            className="px-2 py-1 border rounded w-1/2 lg:w-2/12"
                            name="id_plan"
                            value={id_plan}
                            onChange={(e) => handleInputChange(e)}
                        />

                        <input
                            type="text"
                            placeholder="Campaña"
                            className="px-2 py-1 border rounded w-1/2 lg:w-6/12"
                            name="campaña"
                            value={campaña}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <div className="flex gap-2 lg:w-4/12">
                            <input
                                type={fecha_inicio ? 'date' : 'text'}
                                placeholder="Fecha Contable Desde"
                                className={`text-sm px-2 py-1 border rounded w-1/2 `}
                                name="startDate"
                                value=""
                                onChange={(e) => handleInputChange(e)}
                                onFocus={(e) => {
                                    e.target.type = 'date';
                                }}
                                onBlur={(e) => {
                                    if (e.target.value === '') e.target.type = 'text';
                                }}
                            />
                            <input
                                type={fecha_fin ? 'date' : 'text'}
                                placeholder="Fecha Contable Hasta"
                                className={`text-sm px-2 py-1 border rounded w-1/2`}
                                name="endDate"
                                value=""
                                onChange={(e) => handleInputChange(e)}
                                onFocus={(e) => {
                                    e.target.type = 'date';
                                }}
                                onBlur={(e) => {
                                    if (e.target.value === '') e.target.type = 'text';
                                }}
                            />
                        </div>
                    </section>
                    <section className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Nombre del Cliente"
                            className={`px-2 py-1 border rounded w-4/12 lg:w-4/12`}
                            name="clientName"
                            value={cliente}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            type="text"
                            placeholder="Anunciante"
                            className={`px-2 py-1 border rounded w-4/12 lg:w-4/12`}
                            name="anunciante"
                            value={anunciante}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            type="text"
                            placeholder="Marca"
                            className={`px-2 py-1 border rounded w-4/12 lg:w-4/12`}
                            name="marca"
                            value={marca}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </section>
                    <section className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Nombre del Canal"
                            className={`px-2 py-1 border rounded w-11/12 lg:w-4/12`}
                            name="canal"
                            value={canal}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <input
                            type="text"
                            placeholder="Titular del Plan"
                            className={`px-2 py-1 border rounded w-11/12 lg:w-4/12`}
                            name="titular"
                            value={titular}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <select
                            className="px-2 py-1 border rounded w-11/12 lg:w-4/12 text-gray-500"
                            name="estado"
                            onChange={(e) => handleInputChange(e)}
                        >
                            <option value={estado} hidden>
                                Estado del Canal
                            </option>
                            <option value="abierto">Abierto</option>
                            <option value="cerrado">Cerrado</option>
                        </select>
                    </section>
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
