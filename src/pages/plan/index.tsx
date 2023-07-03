import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { Filters } from '@/components/Filters';
import { NewPlanButton } from '@/components/ButtonNewPlan/NewPlanButton';
import { EditableTable } from '@/components/Table';
import { Modal } from '@/src/components/Modal';
import { api } from '../../constants/api';
import { useFetch } from '@/src/hooks/useFetch';
import { Spinner } from '@/src/components/Spinner';
import { PlansDataList } from '@/mocks/mockPlansDataList';

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
                content={
                    <>
                        <EditableTable dataList={PlansDataList} showDetails />
                        <NewPlanButton />
                    </>
                }
            />
        </>
    );
};

export default Plan;
