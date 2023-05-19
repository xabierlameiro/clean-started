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
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {items.map(({ path, icon, label }, id) => (
                        <li key={id}>
                            <Link
                                href={path}
                                className={` flex items-center p-2 rounded-lg ${
                                    path == currentPage
                                        ? 'text-menu-secondary-color bg-menu-primary-color'
                                        : 'text-menu-primary-color '
                                }   hover:bg-menu-primary-color  hover:text-menu-secondary-color`}
                            >
                                <div className="w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-menu-secondary-color dark:group-hover:text-white">
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
