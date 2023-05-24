import { Layout } from '@/components/Layout';
import ReactTable from '../components/react-table/index';

const Plan = () => {
    return (
        <Layout>
            <div className="h-full">
                <ReactTable />
            </div>
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
