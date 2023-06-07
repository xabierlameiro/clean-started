import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { Filters } from '@/components/Filters';
import { EditableTable } from '@/components/Table';
import UseColumns from '@/components/Table/utils/columns';
import { PersonsDataList } from '@/mocks/mockMakeDataList';

const Plan = () => {
    return (
        <Layout
            sidebar={<Menu menuList={menuList} />}
            header={<Header />}
            subheader={<Filters />}
            content={<EditableTable dataList={PersonsDataList} useColumns={UseColumns} isEditable={true} />}
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
