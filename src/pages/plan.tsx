import { Layout } from '@/components/Layout';

const Plan = ({ user }: { user: string }) => {
    console.log(user);

    return (
        <Layout>
            <>
                <div className="border-2 border-green-500 bg-white h-20 mb-4">Filtros</div>
                <button className="text-white rounded  bg-green-600 p-2 w-full mb-6">Buscar</button>
                <div className="border-2 border-green-500 bg-white h-full">tabla</div>
            </>
        </Layout>
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

export default Plan;
