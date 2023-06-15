import { useRouter } from 'next/router';
import { Crumb } from '../Crumb';

export const Breadcrumbs = () => {
    const location = useRouter();
    let currentLink = '';

    const crumbs = decodeURI(location.asPath)
        .split('/')
        .filter((crumb) => crumb !== '');

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
