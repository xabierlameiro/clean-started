import { ReactElement } from 'react';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
type Props = {
    children: ReactElement;
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="h-screen w-screen flex">
            <div className="w-auto">
                <Menu menuList={menuList} />
            </div>
            <div className="w-full flex flex-col">
                <Header />
                <main className="border-2 border-gray-200 bg-gray-100 h-full p-5 pt-3 flex flex-col">
                    <div className="bg-white h-20 mb-4">Filtros</div>
                    <button className="text-white rounded  bg-green-600 p-2 w-full mb-6">Buscar</button>
                    {children}
                </main>
            </div>
        </div>
    );
};
