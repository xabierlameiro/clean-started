import { availableRoutes } from '@/constants/routes';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-3xl font-bold text-primary-color">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-secondary-color sm:text-5xl">
                    Página no encontrada
                </h1>
                <p className="mt-6 text-base leading-7 text-terciary-color">
                    UPSS, parece que esta página no está disponible.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href={availableRoutes.plan}
                        className="rounded-md bg-primary-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-color-light  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
                    >
                        Página principal
                    </Link>
                    <Link href="#" className="text-sm font-semibold text-secondary-color">
                        Contactar soporte <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Custom404;
