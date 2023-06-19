import Link from 'next/link';
import { capitalize } from '@/helpers/capitalize.helper';
import { ChevronRight } from '@/assets/icons/ChevronRight';

interface Props {
    crumb: string;
    crumbs: string[];
    currentLink: string;
    index: number;
}

export const Crumb = ({ crumbs, crumb, currentLink, index }: Props) => {
    return (
        <div className="inline-flex items-end" key={crumb}>
            <Link
                className={`text-sm font-semibold ${
                    index < crumbs.length - 1 ? 'text-terciary-color' : 'text-primary-color'
                } hover:font-bold`}
                href={currentLink}
            >
                {capitalize(crumb)}
            </Link>
            {index < crumbs.length - 1 && <ChevronRight className="w-4 h-4" alt="" />}
        </div>
    );
};
