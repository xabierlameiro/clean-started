import Link from 'next/link';
import { itemsList } from '@/mocks/mockDropdownHeaderList';

export const DropdownMenu = () => {
    return (
        <div className="bg-white border-2 absolute right-5 top-12 flex flex-col items-start rounded-lg p-4 gap-2 w-60">
            {itemsList.map(({ label, path }, index) => (
                <div key={index}>
                    <Link className="text-sm hover:font-medium cursor-pointer" href={path}>
                        {label}
                    </Link>
                </div>
            ))}
        </div>
    );
};
