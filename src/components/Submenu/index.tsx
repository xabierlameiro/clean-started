import { ArrowUpCircle } from '@/components/Icons/ArrowUpCircle';
import { Envelope } from '@/components/Icons/Envelope';
import { Trash } from '@/components/Icons/Trash';
import { Copy } from '@/components/Icons/Copy';
import { Share } from '@/components/Icons/Share';
import { DocumentCheck } from '@/components/Icons/DocumentCheck';

export const Submenu = () => {
    return (
        <section className="flex items-center justify-between w-full  px-4 py-3 border border-gray-300 shadow-gray-500">
            <div className="flex items-center gap-1">
                <ArrowUpCircle className="text-primary-color w-5 h-5" alt="arrow up circle" />
                <span className="text-sm font-semibold">Número de Plan: Primario\122</span>
            </div>
            <ul className="flex gap-1 text-terciary-color font-semibold text-sm">
                <button className="flex gap-1 items-center  py-1 px-2 border border-gray-400 rounded shadow hover:bg-gray-200">
                    <DocumentCheck className=" w-5 h-5" alt="arrow up circle" />
                    <span>Actualizar</span>
                </button>
                <button className="flex gap-1 items-center py-1 px-2 border border-gray-400 rounded shadow hover:bg-gray-200">
                    <Copy className=" w-5 h-5" alt="arrow up circle" />
                    <span>Copiar a Pedido de Venta</span>
                </button>
                <button className="flex gap-1 items-center py-1 px-2 border border-gray-400 rounded shadow hover:bg-gray-200">
                    <Envelope className=" w-5 h-5" alt="arrow up circle" />
                    <span>Enviar Email</span>
                </button>
                <button className="flex gap-1 items-center py-1 px-2 border border-gray-400 rounded shadow hover:bg-gray-200">
                    <Share className=" w-5 h-5" alt="arrow up circle" />
                    <span>Ver ralaciones</span>
                </button>
                <button className="flex gap-1 items-center py-1 px-2 border border-gray-400 rounded shadow hover:bg-gray-200">
                    <Trash className=" w-5 h-5" alt="arrow up circle" />
                    <span>Cancelar</span>
                </button>
            </ul>
        </section>
    );
};
