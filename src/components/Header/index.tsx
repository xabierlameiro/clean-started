import { icons } from '@/constants/icons';
import { Dropdown } from './components/Dropdown';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Logo } from './components/Logo';

export const Header = () => {
    return (
        <header className="flex items-center w-full border-2 pl-4 pr-4">
            <nav className="w-2/5" aria-label="Breadcrumb">
                <Breadcrumbs />
            </nav>
            <div className="w-1/5">
                <Logo img={icons.logo} />
            </div>
            <div className="w-2/5 flex place-content-end">
                <Dropdown />
            </div>
        </header>
    );
};
