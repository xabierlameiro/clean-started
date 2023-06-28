import LogsFilter from '@/components/Logs/filter';
import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { EditableTable } from '@/components/Table';

import { logData } from '@/mocks/mockLogsDataList';

const Logs = () => {
    return (
        <Layout
            sidebar={<Menu menuList={menuList} />}
            header={<Header />}
            subheader={<LogsFilter />}
            content={<EditableTable dataList={logData} showDetails />}
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

export default Logs;
