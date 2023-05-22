import { ReactElement } from 'react';
import menuItems from '@/constants/menuItems';
import { Header } from '../Header';
import { Menu } from '../Menu';

type Props = {
    children: ReactElement;
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="h-screen w-screen flex">
            <div className="w-auto">
                <Menu items={menuItems} />
            </div>
            <div className="w-full flex flex-col">
                <Header />
                <main className="border-2 border-gray-200 bg-gray-100 h-full p-5 pt-3 flex flex-col">{children}</main>
            </div>
        </div>
    );
};
