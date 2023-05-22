import { Breadcrumbs } from './components/Breadcrumbs';
import { Logo } from './components/Logo';
import { Dropdown } from './components/Dropdown';
import { image } from '@/constants/images';

export const Header = () => {
    return (
        <header className="flex items-center w-full shadow-gray-500 pl-4 pr-4">
            <nav className="w-2/5" aria-label="Breadcrumb">
                <Breadcrumbs />
            </nav>
            <div className="w-1/5">
                <Logo {...image.logo} />
            </div>
            <div className="w-2/5 flex place-content-end">
                <Dropdown />
            </div>
        </header>
    );
};
