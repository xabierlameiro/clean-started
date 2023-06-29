const LogsFilter: React.FC = () => {
    return (
        <section className="w-full mb-4 border-2 shadow-lg">
            <div className="flex items-center justify-end gap-4">
                <input
                    type="text"
                    placeholder="Nº Plan"
                    className={`text-md px-2 py-1 border rounded w-32 flex-grow `}
                    name="documentNumber"
                    value=""
                />

                <input
                    type="text"
                    placeholder="Nombre de Campaña"
                    className={`px-2 py-1 border rounded w-32 flex-grow `}
                    name="campaign"
                    value=""
                />
                <div className="flex items-center gap-2">
                    <label title="end date">Desde</label>
                    <input name="start date" type="date" className="text-sm px-2 py-1 border rounded w-40" />
                </div>
                <div className="flex items-center gap-2">
                    <label title="end date">hasta</label>
                    <input name="end date" type="date" className="text-sm px-2 py-1 border rounded w-40" />
                </div>
                <button className="bg-green-500 text-white w-24 rounded-md">Filtrar</button>
            </div>
        </section>
    );
};

export default LogsFilter;
