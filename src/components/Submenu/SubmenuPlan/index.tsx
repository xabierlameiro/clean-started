import { ArrowUpCircle } from 'src/assets/icons/ArrowUpCircle';
import { Trash } from 'src/assets/icons/Trash';

export const SubmenuPlan = () => {
    return (
        <section className="flex items-center justify-between w-full  px-4 py-3 border-b-2">
            <div className="flex items-center gap-1">
                <ArrowUpCircle className="text-primary-color w-6 h-6" alt="arrow up circle" />
                <span className="text-xs font-semibold lg:text-sm">Número Plan: Primario\122</span>
            </div>

            <button className="flex flex-col gap-1 lg:flex-row justify-center items-center text-sm text-terciary-color font-semibold py-1 px-2 border border-gray-400 rounded shadow hover:bg-gray-200">
                <Trash className=" w-5 h-5" alt="arrow up circle" />
                <span>Resetear Filtros</span>
            </button>
        </section>
    );
};
