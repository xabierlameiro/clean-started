import { Breadcrumbs } from './components/Breadcrumbs';
import { Logo } from './components/Logo';
import { Dropdown } from './components/Dropdown';
import { image } from '@/constants/images';

export const Header = () => {
    return (
        <header className="flex items-center justify-between w-full px-8 border-b-2">
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
