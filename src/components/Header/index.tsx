import { Breadcrumbs } from './components/Breadcrumbs';
import { Dropdown } from './components/Dropdown';
import { LogoDigital } from '@/assets/images/LogoDigital';

export const Header = () => {
    return (
        <header className="flex items-center justify-between w-full h-16 pl-8 pr-8 border-b-2 bg-white">
            <nav aria-label="Breadcrumb">
                <Breadcrumbs />
            </nav>
            <div className="bg-gray-400">
                <LogoDigital height={60} width={0} />
            </div>
            <div className="flex place-content-end">
                <Dropdown />
            </div>
        </header>
    );
};
