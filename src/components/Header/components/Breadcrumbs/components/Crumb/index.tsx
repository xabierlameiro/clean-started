import Link from 'next/link';
import { ChevronRight } from '@/assets/icons/ChevronRight';

type Props = {
    label: string;
    crumbs: string[];
    currentLink: string;
    index: number;
};

export const Crumb = ({ crumbs, label, currentLink, index }: Props) => {
    const isLastItem = index < crumbs.length - 1;

    return (
        <div className="flex flex-row items-center h-full justify-center" key={label}>
            {isLastItem ? (
                <>
                    <Link className="text-sm font-semibold text-primary-color cursor-pointer" href={currentLink}>
                        {label}
                    </Link>
                    {index < crumbs.length - 1 && <ChevronRight className="w-4 h-4" alt="" />}
                </>
            ) : (
                <span className="text-sm font-semibold text-terciary-color cursor-auto">{label}</span>
            )}
        </div>
    );
};
