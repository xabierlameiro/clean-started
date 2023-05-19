import { Dropdown } from './components/dropdown';
import { Logo } from './components/logo';
import { icons } from 'src/constants/icons';
import { BreadCrumbs } from './components/breadcrumbs';

export const Header = () => {
    return (
        <header className="flex items-center w-full border-2 pl-4 pr-4">
            <nav className="w-2/5" aria-label="Breadcrumb">
                <BreadCrumbs />
            </nav>
            <div className="w-1/5">
                <Logo img={icons.logo1} />
            </div>
            <div className="w-2/5 flex place-content-end">
                <Dropdown />
            </div>
        </header>
    );
};
