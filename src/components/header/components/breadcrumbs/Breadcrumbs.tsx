import { useRouter } from 'next/router';
import { Crumb } from './components/crumb';

export const BreadCrumbs = () => {
    const location = useRouter();
    let currentLink = '';

    const crumbs = location.pathname
        .split('/')
        .filter((crumb) => crumb !== '')
        .map((crumb) => {
            return crumb;
        });

    return (
        <ol className="inline-flex items-center">
            {!crumbs ? (
                <p>Cargando!!</p>
            ) : (
                crumbs.map((crumb, index) => {
                    currentLink += `/${crumb}`;
                    return <Crumb key={crumb} crumbs={crumbs} currentLink={currentLink} crumb={crumb} index={index} />;
                })
            )}
        </ol>
    );
};
