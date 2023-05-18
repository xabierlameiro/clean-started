import Menu from '../components/menu';
import { useRouter } from 'next/router';

const Employees = ({ user }: { user: string }) => {
    // routing page for active state
    const router = useRouter();
    const currentPage = router.pathname;

    // Custom list of items for the side menu
    type Item = {
        icon: string | React.ReactElement;
        label: string;
        path: string;
    };

    const menuItems: Item[] = [
        {
            icon: (
                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
            ),
            label: 'Plan',
            path: '/plan',
        },
        { icon: 'A', label: 'Pedido de Venta', path: '/pedidoventa' },
        { icon: '', label: 'Pedido de compra', path: '/pedidocompra' },
        {
            icon: (
                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
            ),
            label: 'Auditoria de Compra',
            path: '/auditoriacompra',
        },
        {
            icon: (
                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
            ),
            label: 'Auditoria de Venta',
            path: '/auditoriaventa',
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Bienvenido, {user}</h1>
            <Menu items={menuItems} currentPage={currentPage} />
        </div>
    );
};

export async function getServerSideProps() {
    // Get user from server
    const user = 'John Doe';

    if (!user) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {
            user,
        },
    };
}

export default Employees;
