import Menu from '../components/menu';
import menuItems from 'src/constants/menuItems';

const Employees = ({ user }: { user: string }) => {
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
