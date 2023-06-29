import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { Filters } from '@/components/Filters';
import { EditableTable } from '@/components/Table';
import { PersonsDataList } from '@/mocks/mockMakeDataList';

const Plan = () => {
    return (
        <Layout
            sidebar={<Menu menuList={menuList} />}
            header={<Header />}
            subheader={<Filters />}
            content={<EditableTable dataList={PersonsDataList} isEditable />}
        />
    );
};

export default Plan;
