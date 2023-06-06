import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { NewPlanForm } from '@/components/Plan/newPlan/components/form';
import { EditableTable } from '@/components/Table';

const NewPlan = () => {
    return (
        <Layout
            sidebar={<Menu menuList={menuList} />}
            header={<Header />}
            subheader={<NewPlanForm />}
            content={<EditableTable />}
        />
    );
};
export default NewPlan;
