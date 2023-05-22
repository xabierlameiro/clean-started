import { Dropdown } from './components/dropdown';
import { icons } from '@/constants/icons';
import { Breadcrumbs } from './components/breadcrumbs';
import { Logo } from './components/logo';

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
