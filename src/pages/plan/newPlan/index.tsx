import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { EditableTable } from '@/components/Table';
import { NewPlanForm } from './components/NewPlanForm';

const NewPlan = () => {
    return (
        <Layout
            sidebar={<Menu menuList={menuList} />}
            header={<Header />}
            subheader={<NewPlanForm />}
            content={<EditableTable dataList={[]} isEditable={true} />}
        />
    );
};
export default NewPlan;
