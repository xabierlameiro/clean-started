import React, { ChangeEvent, useState } from 'react';

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

    const handleSearch = () => {};

    // DISABLED WHEN FILE TYPE NOT SELECTED
    return (
        <section>
            <div className="flex flex-col w-full gap-5 bg-white mb-8 px-4 py-8">
                <div className="flex items-center gap-3">
                    <h3 className="w-20 font-bold">Documento</h3>
                    <select
                        className="w-20 px-2 py-1 font-semibold border-2 rounded"
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
                        className={`px-2 py-1 border rounded w-20 ${!documentType ? 'bg-gray-200' : null}`}
                        name="documentNumber"
                        value={documentNumber}
                        onChange={(e) => handleInputChange(e)}
                        disabled={!documentType}
                    />
                    <input
                        type="text"
                        placeholder="Campaña"
                        className={` px-2 py-1 border rounded flex-1 ${!documentType ? 'bg-gray-200' : null}`}
                        name="campaign"
                        value={campaign}
                        onChange={(e) => handleInputChange(e)}
                        disabled={!documentType}
                    />
                    <input
                        type={!documentType ? 'text' : 'date'}
                        placeholder="Fecha Contable Desde"
                        className={`w-24 px-2 py-1 border rounded lg:w-44 ${!documentType ? 'bg-gray-200' : null}`}
                        name="startDate"
                        value={startDate}
                        onChange={(e) => handleInputChange(e)}
                        disabled={!documentType}
                    />
                    <input
                        type={!documentType ? 'text' : 'date'}
                        placeholder="Fecha Contable Hasta"
                        className={`w-24 px-2 py-1 border rounded lg:w-44 ${!documentType ? 'bg-gray-200' : null}`}
                        name="endDate"
                        value={endDate}
                        onChange={(e) => handleInputChange(e)}
                        disabled={!documentType}
                    />
                </div>
                <div className="flex items-center gap-4">
                    <h3 className="w-20 font-bold">Cliente</h3>
                    <input
                        type="text"
                        placeholder="Nombre"
                        className={`px-2 py-1 border rounded w-full lg:w-1/2 ${!documentType ? 'bg-gray-200' : null}`}
                        name="clientName"
                        value={clientName}
                        onChange={(e) => handleInputChange(e)}
                        disabled={!documentType}
                    />
                </div>
                <div className="flex items-center gap-4 sm">
                    <h3 className="w-20 font-bold">Canal</h3>
                    <input
                        type="text"
                        placeholder="Nombre del Canal"
                        className={`px-2 py-1 border rounded w-full lg:w-1/2 ${!documentType ? 'bg-gray-200' : null}`}
                        name="channelName"
                        value={channelName}
                        onChange={(e) => handleInputChange(e)}
                        disabled={!documentType}
                    />
                </div>
            </div>
            <button
                className="w-full h-10 bg-primary-color text-white font-bold rounded hover:bg-primary-color-light"
                onClick={handleSearch}
            >
                Buscar
            </button>
        </section>
    );
};
