import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { Filters } from '@/components/Filters';
import { EditableTable } from '@/components/Table';
import { PlanDataList } from '@/mocks/mockPlanDetailDataList';

const Plan = () => {
    return (
        <Layout
            sidebar={<Menu menuList={menuList} />}
            header={<Header />}
            subheader={<Filters />}
            content={<EditableTable dataList={PlanDataList} isEditable />}
        />
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
