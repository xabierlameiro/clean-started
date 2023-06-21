import { Save } from '@/assets/icons/Save';
import { ArrowUpCircle } from 'src/assets/icons/ArrowUpCircle';
import { PlanType } from '../..';

type Props = {
    plan: PlanType;
    onSave: () => void;
    isCreated: boolean;
};

export const NewPlanSubmenu: React.FC<Props> = ({ plan, onSave, isCreated }) => {
    return (
        <section className="flex items-center justify-between w-full px-4 py-3 border-b-2 bg-gray-100">
            <div className="flex items-center gap-1">
                <ArrowUpCircle className="text-primary-color w-6 h-6" alt="arrow up circle" />
                <span className="text-xs font-semibold lg:text-sm">Número Plan: {plan.id}</span>
            </div>
            <ul className="flex gap-1 text-terciary-color font-semibold text-sm">
                <button
                    onClick={onSave}
                    disabled={isCreated}
                    className={`flex flex-col lg:flex-row justify-center items-center text-sm py-1 px-2 border border-gray-400 rounded shadow ${
                        !isCreated ? 'hover:bg-gray-200' : ''
                    }`}
                >
                    <Save className=" w-5 h-5 pr-1" alt="arrow up circle" />
                    <span>Añadir</span>
                </button>
            </ul>
        </section>
    );
};
