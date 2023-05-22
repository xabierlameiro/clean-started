import { Layout } from '@/components/Layout';
import { Content } from './components/Content';

const Plan = ({ user }: { user: string }) => {
    console.log(user);

    return (
        <Layout>
            <Content />
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
