import { ArrowUpCircle } from '@/components/Icons/ArrowUpCircle';
import { Envelope } from '@/components/Icons/Envelope';
import { Trash } from '@/components/Icons/Trash';
import { Copy } from '@/components/Icons/Copy';
import { Share } from '@/components/Icons/Share';
import { DocumentCheck } from '@/components/Icons/DocumentCheck';

export const Submenu = () => {
    return (
        <section className="flex items-center justify-between w-full  px-4 py-3 border-b-2">
            <div className="flex items-center gap-1">
                <ArrowUpCircle className="text-primary-color w-6 h-6" alt="arrow up circle" />
                <span className="text-xs font-semibold lg:text-sm">Número Plan: Primario\122</span>
            </div>
            <ul className="flex gap-1 text-terciary-color font-semibold text-sm">
                <button className="flex flex-col lg:flex-row justify-center items-center gap-1 py-1 px-2 border border-gray-400 rounded shadow hover:bg-gray-200">
                    <DocumentCheck className=" w-5 h-5" alt="arrow up circle" />
                    <span>Actualizar</span>
                </button>
                <button className="flex flex-col lg:flex-row justify-center items-center text-sm py-1 px-2 border border-gray-400 rounded shadow hover:bg-gray-200">
                    <Copy className=" w-5 h-5" alt="arrow up circle" />
                    <span>Copiar </span>
                    <span className="hidden lg:block"> Pedido de Venta</span>
                </button>
                <button className="flex flex-col lg:flex-row justify-center items-center text-sm py-1 px-2 border border-gray-400 rounded shadow hover:bg-gray-200">
                    <Envelope className=" w-5 h-5" alt="arrow up circle" />
                    <span>Enviar Email</span>
                </button>
                <button className="flex flex-col lg:flex-row justify-center items-center text-sm py-1 px-2 border border-gray-400 rounded shadow hover:bg-gray-200">
                    <Share className=" w-5 h-5" alt="arrow up circle" />
                    <span>Ralaciones</span>
                </button>
                <button className="flex flex-col lg:flex-row justify-center items-center text-sm py-1 px-2 border border-gray-400 rounded shadow hover:bg-gray-200">
                    <Trash className=" w-5 h-5" alt="arrow up circle" />
                    <span>Cancelar</span>
                </button>
            </ul>
        </section>
    );
};
