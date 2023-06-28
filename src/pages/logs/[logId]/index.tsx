import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { EditableTable } from '@/components/Table';
import { logDetails } from '@/mocks/mockLogDetailDataList';

import { useRouter } from 'next/router';

const LogDetails = () => {
    const router = useRouter();
    const logId = router.query.logId;
    const filteredLogDetails = logDetails.filter((item) => {
        return item.ID_Plan === logId;
    });

    return (
        <Layout
            sidebar={<Menu menuList={menuList} />}
            header={<Header />}
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
