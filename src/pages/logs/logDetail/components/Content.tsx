import { useState } from 'react';

export const Content = () => {
    const [data] = useState({
        names: { prop1: 'Dato1', prop2: 'Dato2', prop3: 'Dato3', prop4: 'Dato4' },
        current: { prop1: 'nuevo1', prop2: 'nuevo2', prop3: 'nuevo3', prop4: 'nuevo4' },
        previous: { prop1: 'viejo1', prop2: 'viejo2', prop3: 'viejo3', prop4: 'viejo4' },
    });

    return (
        <div className="flex w-full h-full flex-col items-center">
            <h4 className="m-4 text-xl font-bold tracking-tight text-secondary-color">Detalle cambios plan: 1234</h4>
            <div className="w-full md:flex-col flex-row flex pt-2 mt-8">
                {Object.entries(data).map(([key, line]) => {
                    return (
                        <>
                            <div
                                key={key + line}
                                className="h-full flex md:flex-row flex-col w-full justify-center items-center"
                            >
                                {key === 'names' ? (
                                    <div className="w-full border-2 border-transparent h-full md:flex-row flex-col flex items-center justify-center">
                                        <h4 className="font-bold w-full h-16 flex items-center justify-center">{''}</h4>
                                    </div>
                                ) : (
                                    <div className="w-full border-2 border-terciary-color-dark h-full md:flex-row flex-col flex items-center justify-center">
                                        <h4 className="font-bold w-full h-16 flex items-center justify-center">
                                            {key}
                                        </h4>
                                    </div>
                                )}

                                {Object.entries(line).map(([key2, value]) => {
                                    return (
                                        <div
                                            key={key2 + value}
                                            className={`${
                                                key === 'names' && 'font-bold'
                                            } w-full h-full md:flex-row flex-col flex items-center justify-center`}
                                        >
                                            <div className="w-full h-full border-2 border-terciary-color-dark flex items-center justify-center">
                                                {value}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {key === 'previous' && <div className="h-6"></div>}
                        </>
                    );
                })}
            </div>
        </div>
    );
};
