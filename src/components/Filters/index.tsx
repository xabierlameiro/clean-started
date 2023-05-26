import React, { ChangeEvent, useState } from 'react';
import { Submenu } from '@/components/Submenu';

type FilterParams = {
    documentType: string | undefined;
    documentNumber: string | undefined;
    campaign: string | undefined;
    startDate: string | undefined;
    endDate: string | undefined;
    clientName: string | undefined;
    channelName: string | undefined;
};

export const Filters = () => {
    const [filterParams, setFilterParams] = useState<FilterParams>({
        documentType: '',
        documentNumber: '',
        campaign: '',
        startDate: '',
        endDate: '',
        clientName: '',
        channelName: '',
    });
    const { documentType, documentNumber, campaign, startDate, endDate, clientName, channelName } = filterParams;

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
                <Submenu />
                <div className="flex flex-col gap-4 bg-white p-4">
                    <div className="flex items-center gap-2 gap-y-4 flex-wrap">
                        <h3 className="w-24 font-bold">Documento</h3>
                        <select
                            className="w-24 px-2 py-1 text-sm font-semibold border-2 rounded"
                            name="documentType"
                            value={documentType}
                            onChange={(e) => handleInputChange(e)}
                        >
                            <option value="">Tipo</option>
                            <option value="txt">.txt</option>
                            <option value="xls">.xls</option>
                            <option value="doc">.doc</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Nº Documento"
                            className={`text-md px-2 py-1 border rounded w-32 flex-grow ${
                                !documentType ? 'bg-gray-200' : null
                            }`}
                            name="documentNumber"
                            value={documentNumber}
                            onChange={(e) => handleInputChange(e)}
                            disabled={!documentType}
                        />

                        <input
                            type="text"
                            placeholder="Campaña"
                            className={`px-2 py-1 border rounded w-32 flex-grow ${
                                !documentType ? 'bg-gray-200' : null
                            }`}
                            name="campaign"
                            value={campaign}
                            onChange={(e) => handleInputChange(e)}
                            disabled={!documentType}
                        />
                        <div className="ml-auto flex gap-2">
                            <input
                                type={!documentType ? 'text' : 'date'}
                                placeholder="Fecha Contable Desde"
                                className={`text-sm px-2 py-1 border rounded w-40 ${
                                    !documentType ? 'bg-gray-200' : null
                                }`}
                                name="startDate"
                                value={startDate}
                                onChange={(e) => handleInputChange(e)}
                                disabled={!documentType}
                            />
                            <input
                                type={!documentType ? 'text' : 'date'}
                                placeholder="Fecha Contable Hasta"
                                className={`text-sm px-2 py-1 border rounded w-40 ${
                                    !documentType ? 'bg-gray-200' : null
                                }`}
                                name="endDate"
                                value={endDate}
                                onChange={(e) => handleInputChange(e)}
                                disabled={!documentType}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <h3 className="w-24 font-bold">Cliente</h3>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className={`px-2 py-1 border rounded flex-grow lg:w-1/2 lg:flex-grow-0 ${
                                !documentType ? 'bg-gray-200' : null
                            }`}
                            name="clientName"
                            value={clientName}
                            onChange={(e) => handleInputChange(e)}
                            disabled={!documentType}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <h3 className="w-24 font-bold">Canal</h3>
                        <input
                            type="text"
                            placeholder="Nombre del Canal"
                            className={`px-2 py-1 border rounded flex-grow lg:w-1/2 lg:flex-grow-0 ${
                                !documentType ? 'bg-gray-200' : null
                            }`}
                            name="channelName"
                            value={channelName}
                            onChange={(e) => handleInputChange(e)}
                            disabled={!documentType}
                        />
                    </div>
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
