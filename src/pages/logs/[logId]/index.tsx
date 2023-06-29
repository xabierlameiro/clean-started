import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { EditableTable } from '@/components/Table';
import { logData } from '@/mocks/mockLogsDataList';
import { logDetails } from '@/mocks/mockLogDetailDataList';

import { useRouter } from 'next/router';
import LogsFilter from '@/components/Logs/filter';

export type IsLogDetailProps = {
    ID_Plan: string;
    campaña: string;
};

const LogDetails = () => {
    const router = useRouter();
    const logId = router.query.logId;
    const filteredLogDetails = logDetails.filter((item) => {
        return item.ID_Plan === logId;
    });

    const isLogDetail: IsLogDetailProps = {
        ID_Plan: logId as string,
        campaña: logData.find((item) => item.ID_Plan === logId)?.campaña || '',
    };

    return (
        <Layout
            sidebar={<Menu menuList={menuList} />}
            header={<Header />}
            subheader={<LogsFilter />}
            content={<EditableTable dataList={filteredLogDetails} isLogDetail={isLogDetail} />}
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
