import { ArrowUpCircle } from 'src/assets/icons/ArrowUpCircle';
import { Copy } from 'src/assets/icons/Copy';

export const SubmenuPlanDetails = () => {
    return (
        <section className="flex items-center justify-between w-full  px-4 py-3 border-b-2">
            <div className="flex items-center gap-1">
                <ArrowUpCircle className="text-primary-color w-6 h-6" alt="arrow up circle" />
                <span className="text-xs font-semibold lg:text-sm">Número Plan: Primario\122</span>
            </div>
            <ul className="flex gap-4 text-terciary-color font-semibold text-sm">
                <button className="flex flex-col lg:flex-row lg:gap-1 justify-center items-center text-sm py-1 px-2 border border-gray-400 rounded shadow hover:bg-gray-200">
                    <Copy className=" w-5 h-5" alt="arrow up circle" />
                    <span>Generar </span>
                    <span> Pedido de Compra</span>
                </button>

                <button className="flex flex-col lg:flex-row lg:gap-1 justify-center items-center text-sm py-1 px-2 border border-gray-400 rounded shadow hover:bg-gray-200">
                    <Copy className=" w-5 h-5" alt="arrow up circle" />
                    <span>Generar </span>
                    <span> Pedido de Venta</span>
                </button>
            </ul>
        </section>
    );
};
