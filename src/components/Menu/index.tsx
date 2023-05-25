import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type MenuItem = {
    icon: string | React.ReactElement;
    label: string;
    path: string;
};

type MenuList = {
    menuList: MenuItem[];
};

export const Menu = ({ menuList }: MenuList) => {
    const router = useRouter();
    const currentPage = router.pathname;

    return (
        <main className="h-full px-3 py-4 bg-white" aria-label="Sidebar">
            <ul className="space-y-2 font-medium">
                {menuList.map(({ path, icon, label }, id) => (
                    <li key={`menuitem-${id}`}>
                        <Link
                            href={path}
                            className={` flex items-center gap-2 p-2 rounded-lg ${
                                path == currentPage ? 'text-white bg-primary-color' : 'text-primary-color '
                            }   hover:bg-primary-color  hover:text-white`}
                        >
                            <div className="w-6 h-6 transition">{icon}</div>
                            <span>{label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};
