import DateRangePicker from '@/components/Logs/CalendarFilter';
import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { EditableTable } from '@/components/Table';
import { logDetails } from '@/mocks/mockLogsDataList';

import { useRouter } from 'next/router';

const LogDetails = () => {
    const router = useRouter();
    const logId = router.query.logId as String;
    const filteredLogDetails = logDetails.filter((item) => {
        console.log('item', item);
        return item.ID_Plan === logId.replace(/\D/g, '');
    });

    return (
        <Layout
            sidebar={<Menu menuList={menuList} />}
            header={<Header />}
            subheader={<DateRangePicker />}
            content={<EditableTable dataList={filteredLogDetails} />}
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

export default LogDetails;
