type Props = {};

export const Submenu = ({}: Props) => {
    return (
        <section className="flex items-center justify-between w-full border border-gray-300 shadow-gray-500 px-4 py-4">
            <div className="flex items-center gap-1">
                <p>icon</p>
                <span className="text-sm font-semibold">Número de Plan: Primario\122</span>
            </div>
            <ul>
                <button className="text-terciary-color font-semibold py-1 px-4 mr-1 border border-gray-400 rounded shadow  hover:bg-gray-200">
                    Button
                </button>
                <button className="text-terciary-color font-semibold py-1 px-4 mr-1 border border-gray-400 rounded shadow  hover:bg-gray-200">
                    Button
                </button>
                <button className="text-terciary-color font-semibold py-1 px-4 mr-1 border border-gray-400 rounded shadow  hover:bg-gray-200">
                    Button
                </button>
                <button className="text-terciary-color font-semibold py-1 px-4 mr-1 border border-gray-400 rounded shadow  hover:bg-gray-200">
                    Button
                </button>
                <button className="text-terciary-color font-semibold py-1 px-4 mr-1 border border-gray-400 rounded shadow  hover:bg-gray-200">
                    Button
                </button>
            </ul>
        </section>
    );
};
