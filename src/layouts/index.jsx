import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import {
    DashboardOutlined,
    UserOutlined,
    SettingOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible>
                <div className="logo" />
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        <Link to="/dashboard">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        <Link to="/users">Users</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<SettingOutlined />}>
                        <Link to="/settings">Settings</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
