import { Breadcrumbs } from './components/Breadcrumbs';
import { image } from '@/constants/images';
import { Dropdown } from './components/Dropdown';
import { Logo } from './components/Logo';

export const Header = () => {
    return (
        <header className="flex items-center justify-between w-full h-16 pl-12 pr-8 border-b-2 bg-white">
            <nav aria-label="Breadcrumb">
                <Breadcrumbs />
            </nav>
            <div>
                <Logo {...image.logo} />
            </div>
            <div className="flex place-content-end">
                <Dropdown />
            </div>
        </header>
    );
};
