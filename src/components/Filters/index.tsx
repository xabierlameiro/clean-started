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

const Filters = () => {
    //FIX TYPES & COMBINED STATE?
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

    // HANDLE FUCTION FOR COMBINE STATE
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFilterParams((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // HANDLE SEARCH FUNCTION/LOGIC
    const handleSearch = () => {};

    // DISABLED WHEN FILE TYPE NOT SELECTED
    return (
        <section className="p-4">
            <div className="flex flex-col w-full gap-4">
                <div className="flex items-center gap-4">
                    <h3 className="w-20 font-bold">Documento</h3>
                    <select
                        className="w-24 px-2 py-1 font-semibold border-2 rounded"
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
                        className="w-32 px-2 py-1 border rounded"
                        name="documentNumber"
                        value={documentNumber}
                        onChange={(e) => handleInputChange(e)}
                        disabled={!documentType}
                    />
                    <input
                        type="text"
                        placeholder="Campaña"
                        className="w-1/3 px-2 py-1 border rounded"
                        name="campaign"
                        value={campaign}
                        onChange={(e) => handleInputChange(e)}
                        disabled={!documentType}
                    />
                    <input
                        type="date"
                        placeholder="Fecha Contable Desde"
                        className="w-40 px-2 py-1 border rounded"
                        name="startDate"
                        value={startDate}
                        onChange={(e) => handleInputChange(e)}
                        disabled={!documentType}
                    />
                    <input
                        type="date"
                        placeholder="Fecha Contlable Hasta"
                        className="w-40 px-2 py-1 border rounded"
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
                        className="w-full px-2 py-1 border rounded md:w-2/3"
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
                        className="w-full  px-2 py-1 border rounded md:w-2/3 "
                        name="channelName"
                        value={channelName}
                        onChange={(e) => handleInputChange(e)}
                        disabled={!documentType}
                    />
                </div>
                <button
                    className="w-full h-10 bg-green-500 text-white font-bold rounded hover:bg-green-400"
                    onClick={handleSearch}
                >
                    Buscar
                </button>
            </div>
        </section>
    );
};

export default Filters;
