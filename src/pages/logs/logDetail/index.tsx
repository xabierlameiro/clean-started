import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { menuList } from '@/mocks/mockMenuItemList';
import { Content } from './components/Content';

const LogDetail = () => {
    return <Layout sidebar={<Menu menuList={menuList} />} header={<Header />} content={<Content />} />;
};

export default LogDetail;
