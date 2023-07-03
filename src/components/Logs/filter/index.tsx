import { IsLogDetailProps } from '@/pages/logs/[logId]';

interface LogsFilterProps {
    isLogDetail?: IsLogDetailProps;
}

const LogsFilter: React.FC<LogsFilterProps> = ({ isLogDetail }) => {
    return (
        <section className="w-full mb-4 border-2 shadow-lg">
            <div className="flex gap-4 p-4">
                <div className="flex items-center gap-2 flex-grow lg:w-1/2 lg:flex-grow-0">
                    {isLogDetail && <h3 className="font-bold min-w-max">ID Plan:</h3>}
                    <input
                        type="text"
                        placeholder="Nº Plan"
                        className={`px-2 py-1 border rounded w-full ${!!isLogDetail ? 'bg-gray-200' : null}`}
                        name="documentNumber"
                        value={isLogDetail ? isLogDetail.ID_Plan : ''}
                        disabled={!!isLogDetail}
                    />
                </div>
                <div className="flex items-center gap-2 flex-grow lg:w-1/2 lg:flex-grow-0">
                    {isLogDetail && <h3 className="font-bold w-min">Campaña</h3>}
                    <input
                        type="text"
                        placeholder="Nombre de Campaña"
                        className={`px-2 py-1 border rounded w-full ${!!isLogDetail ? 'bg-gray-200' : null}`}
                        name="campaign"
                        value={!isLogDetail ? '' : isLogDetail.campaña}
                        disabled={!!isLogDetail}
                    />
                </div>
                {!isLogDetail && (
                    <>
                        <div className="flex items-center gap-2">
                            <label title="end date">Desde</label>
                            <input name="start date" type="date" className="text-sm px-2 py-1 border rounded w-40" />
                        </div>
                        <div className="flex items-center gap-2">
                            <label title="end date">hasta</label>
                            <input name="end date" type="date" className="text-sm px-2 py-1 border rounded w-40" />
                        </div>
                        <button className="bg-green-500 text-white w-24 rounded-md">Filtrar</button>
                    </>
                )}
            </div>
        </section>
    );
};

export default LogsFilter;
