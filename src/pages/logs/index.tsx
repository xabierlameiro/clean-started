import DateRangePicker from '@/components/Logs/CalendarFilter';
import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { EditableTable } from '@/components/Table';
import UseColumns from '@/components/Logs/Table/columns';
import { logData } from '@/mocks/mockLogsDataList';

const Logs = () => {
    return (
        <Layout
            sidebar={<Menu menuList={menuList} />}
            header={<Header />}
            subheader={<DateRangePicker />}
            content={<EditableTable dataList={logData} useColumns={UseColumns} isEditable={false} />}
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
