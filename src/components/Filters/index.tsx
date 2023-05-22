import React, { useState } from 'react';
import { InputType } from 'zlib';

const Filters = () => {
    //SEARCH INPUT PARAMS
    //FIX TYPES & COMBINE STATE?
    const [documentType, setDocumentType] = useState<string>('');
    const [documentNumber, setDocumentNumber] = useState<InputType>('');
    const [campaign, setCampaign] = useState<InputType>('');
    const [startDate, setStartDate] = useState<InputType>('');
    const [endDate, setEndDate] = useState<InputType>('');
    const [clientName, setClientName] = useState<InputType>('');
    const [channelName, setChannelName] = useState<InputType>('');

    // HANDLE FUCTION FOR COMBINE STATE?
    // HANDLE SEARCH FUNCTION/LOGIC

    return (
        <div className="flex flex-col">
            <div className="flex items-center">
                <div className="mr-4 w-32">
                    <h3 className="text-xl font-bold">Documento</h3>
                </div>
                <div className="mr-4">
                    <select
                        className="w-40 px-2 py-1 font-semibold border-2 rounded"
                        value={documentType}
                        onChange={(e) => setDocumentType(e.target.value)}
                    >
                        <option value="">Tipo</option>
                        <option value="txt">.txt</option>
                        <option value="xls">.xls</option>
                        <option value="doc">.doc</option>
                    </select>
                </div>
                <div className="mr-4">
                    <input
                        type="text"
                        placeholder="Nº Documento"
                        className="w-40 px-2 py-1 border rounded"
                        value={documentNumber}
                        onChange={(e) => setDocumentNumber(e.target.value)}
                        disabled={!documentType}
                    />
                </div>
                <div className="mr-4">
                    <input
                        type="text"
                        placeholder="Campaña"
                        className="w-[400px] px-2 py-1 border rounded"
                        value={campaign}
                        onChange={(e) => setCampaign(e.target.value)}
                        disabled={!documentType}
                    />
                </div>
                <div className="mr-4">
                    <input
                        type="date"
                        placeholder="Fecha Contable Desde"
                        className="w-40 px-2 py-1 border rounded"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        disabled={!documentType}
                    />
                </div>
                <div>
                    <input
                        type="date"
                        placeholder="Fecha Contlable Hasta"
                        className="w-40 px-2 py-1 border rounded"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        disabled={!documentType}
                    />
                </div>
            </div>
            <div className="flex items-center mt-4">
                <div className="mr-4 w-32">
                    <h3 className="text-xl font-bold">Cliente</h3>
                </div>
                <div className="mr-4">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="w-[400px] px-2 py-1 border rounded"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        disabled={!documentType}
                    />
                </div>
            </div>
            <div className="flex items-center mt-4">
                <div className="mr-4 w-32">
                    <h3 className="text-xl font-bold">Canal</h3>
                </div>
                <div className="mr-4">
                    <input
                        type="text"
                        placeholder="Nombre del Canal"
                        className="w-[400px] px-2 py-1 border rounded"
                        value={channelName}
                        onChange={(e) => setChannelName(e.target.value)}
                        disabled={!documentType}
                    />
                </div>
            </div>
        </div>
    );
};

export default Filters;
