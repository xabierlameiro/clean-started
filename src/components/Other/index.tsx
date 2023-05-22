import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Item = {
    icon: string | React.ReactElement;
    label: string;
    path: string;
};

type MenuItems = {
    items: Item[];
};

const Menu = ({ items }: MenuItems) => {
    // routing page for active state
    const router = useRouter();
    const currentPage = router.pathname;

    return (
        <aside
            id="default-sidebar"
            className="w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-white">
                <ul className="space-y-2 font-medium">
                    {items.map(({ path, icon, label }, id) => (
                        <li key={id}>
                            <Link
                                href={path}
                                className={` flex items-center p-2 rounded-lg ${
                                    path == currentPage
                                        ? 'text-secondary-color bg-primary-color'
                                        : 'text-primary-color '
                                }   hover:bg-primary-color  hover:text-secondary-color`}
                            >
                                <div className="w-6 h-6  transition duration-75 group-hover:text-secondary-color">
                                    {icon}
                                </div>
                                <span className="ml-3">{label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Menu;
