import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { NewPlanForm } from '@/components/Plan/newPlan/components/form';
import { EditableTable } from '@/components/Table';
import UseColumns from '@/components/Table/utils/columns';

const NewPlan = () => {
    return (
        <Layout
            sidebar={<Menu menuList={menuList} />}
            header={<Header />}
            subheader={<NewPlanForm />}
            content={<EditableTable dataList={[]} useColumns={UseColumns} />}
        />
    );
};
export default NewPlan;
