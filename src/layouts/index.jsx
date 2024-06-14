import { Layout, Menu } from 'antd';
import {
    DashboardOutlined,
    UserOutlined,
    SettingOutlined
} from '@ant-design/icons';
import AppMenu from './appMenu';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible>
                <div className="logo" />
                <AppMenu></AppMenu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    {/* <Outlet /> */}
                    Outlet
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
