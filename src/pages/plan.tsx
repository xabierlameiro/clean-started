import Menu from '../components/menu';

const Employees = ({ user }: { user: string }) => {
    // Custom list of itemsw for the side menu
    type Item = {
        icon: string | React.ReactElement;
        label: string;
        path: string;
    };

    const menuItems: Item[] = [
        {
            icon: (
                <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
            ),
            label: 'Plan',
            path: 'plan',
        },
        { icon: 'A', label: 'Pedido de Venta', path: 'pedidoventas' },
        { icon: '', label: 'Pedido de compra', path: 'pedidocompra' },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Bienvenido, {user}</h1>
            <Menu items={menuItems} />
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
