import { Plus } from '@/assets/icons/plus';
import Link from 'next/link';

export const NewPlanButton = () => {
    return (
        <div className="flex justify-end py-4 bg-slate-100">
            <Link title="create new plan" href="/plan/newPlan">
                <Plus className="bg-primary-color w-6 h-6 rounded-xl text-white" alt="icon-plus" />
            </Link>
        </div>
    );
};
