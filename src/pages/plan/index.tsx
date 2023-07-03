import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { Filters } from '@/components/Filters';
import { EditableTable } from '@/components/Table';
import { PersonsDataList } from '@/mocks/mockMakeDataList';
import { Modal } from '@/src/components/Modal';
import { api } from '../../constants/api';
import { useFetch } from '@/src/hooks/useFetch';
import { Spinner } from '@/src/components/Spinner';

const Plan = () => {
    const { isFetching } = useFetch(api.endpoint.morty.getAll);

    return (
        <>
            {isFetching && (
                <Modal>
                    <Spinner />
                </Modal>
            )}

            <Layout
                sidebar={<Menu menuList={menuList} />}
                header={<Header />}
                subheader={<Filters />}
                content={<EditableTable dataList={PersonsDataList} isEditable />}
            />
        </>
    );
};

export default Plan;
