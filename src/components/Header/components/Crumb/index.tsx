import Link from 'next/link';
import Image from 'next/image';
import { icons } from '@/constants/icons';
import { capitalize } from '@/helpers/capitalize.helper';

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
            {index < crumbs.length - 1 && (
                <Image
                    src={icons.chevronRight.url}
                    alt={icons.chevronRight.name}
                    width={15}
                    height={0}
                    className="mx-auto"
                />
            )}
        </div>
    );
};
