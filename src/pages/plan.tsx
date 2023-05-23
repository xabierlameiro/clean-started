import { Layout } from '@/components/Layout';

const Plan = () => {
    return (
        <Layout>
            <>
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
