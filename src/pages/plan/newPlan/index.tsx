import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { EditableTable } from '@/components/Table';
import UseColumns from '@/components/Table/utils/columns';
import { NewPlanForm } from './components/NewPlanForm';

const NewPlan = () => {
    return (
        <Layout
            sidebar={<Menu menuList={menuList} />}
            header={<Header />}
            subheader={<NewPlanForm />}
            content={<EditableTable dataList={[]} useColumns={UseColumns} isEditable={true} />}
        />
    );
};
export default NewPlan;
