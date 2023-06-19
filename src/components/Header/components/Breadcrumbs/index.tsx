import { useRouter } from 'next/router';
import { Crumb } from './components/Crumb';
import { availableCrumbs } from '@/constants/routes';

export const Breadcrumbs = () => {
    const location = useRouter();
    let currentLink = '';
    const crumbsArray = location.pathname.split('/').filter((crumbItem) => crumbItem !== '');

    const labelToShow = (crumbItem: string) => {
        let auxLabel = '';

        availableCrumbs.forEach((label) => {
            label.key === crumbItem && (auxLabel = label.name);
        });

        return auxLabel;
    };

    return (
        <ol className="flex flex-row items-center h-full justify-center">
            {!crumbsArray ? (
                <p>Cargando!!</p>
            ) : (
                crumbsArray.map((crumbItem, index) => {
                    currentLink += `/${crumbItem}`;

                    return (
                        <Crumb
                            key={crumbItem}
                            crumbs={crumbsArray}
                            currentLink={currentLink}
                            label={labelToShow(crumbItem)}
                            index={index}
                        />
                    );
                })
            )}
        </ol>
    );
};
