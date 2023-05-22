import { Layout } from '@/components/Layout';

const Plan = () => {
    return (
        <Layout>
            <>
                <div className="bg-white h-20 mb-4">Filtros</div>
                <button className="text-white rounded  bg-green-600 p-2 w-full mb-6">Buscar</button>
                <div className="bg-white h-full">tabla</div>
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
