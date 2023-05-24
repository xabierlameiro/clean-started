import { ReactElement } from 'react';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { Filters } from '@/components/Filters';
import Table from '@/components/Table';

type Props = {
    children: ReactElement;
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <div className="h-screen w-screen flex">
                <div className="w-auto">
                    <Menu menuList={menuList} />
                </div>
                <div className="w-full flex flex-col">
                    <Header />
                    <main className="border-2 border-gray-200 bg-gray-100 h-full p-5 pt-3 flex flex-col mr-[3%]">
                        <div className=" h-auto mb-4">
                            <Filters />
                        </div>
                        {children}
                        <div>
                            <Table />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};
