import { capitalize } from '@/helpers/capitalize.helper';
import Link from 'next/link';

interface Props {
    crumb: string;
    crumbs: string[];
    currentLink: string;
    index: number;
}

export const Crumb = ({ crumbs, crumb, currentLink, index }: Props) => {
    return (
        <div className="inline-flex items-center" key={crumb}>
            <Link
                className={`text-sm ${index < crumbs.length - 1 ? 'text-gray-400' : 'text-blue-600'} hover:font-medium`}
                href={currentLink}
            >
                {capitalize(crumb)}
            </Link>
            {index < crumbs.length - 1 && (
                <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="6 0 5 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            )}
        </div>
    );
};
