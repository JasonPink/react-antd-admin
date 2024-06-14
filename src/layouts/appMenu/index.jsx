import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { layoutRoutes } from '@/router';

const generateMenuItems = (routes, parentPath = '') => {
    return routes
        .filter(route => route.meta?.title)
        .map(route => {
            const path = parentPath + '/' + route.path;
            return {
                key: path,
                label: route.meta?.title,
                children: route.children
                    ? generateMenuItems(route.children, path)
                    : null
            };
        });
};

const AppMenu = () => {
    const naviagte = useNavigate();
    const location = useLocation();
    const [openKeys, setOpenKeys] = useState(() => {
        const storedKeys = localStorage.getItem('openKeys');
        return storedKeys ? JSON.parse(storedKeys) : [];
    });
    const [selectedKeys, setSelectedKeys] = useState([location.pathname]);

    useEffect(() => {
        setSelectedKeys([location.pathname]);
    }, [location]);

    const onOpenChange = keys => {
        setOpenKeys(keys);
        localStorage.setItem('openKeys', JSON.stringify(keys));
    };

    const handleClickMenu = current => {
        naviagte(current.key);
    };

    return (
        <Menu
            theme="dark"
            mode="inline"
            items={generateMenuItems(layoutRoutes)}
            onClick={handleClickMenu}
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
        ></Menu>
    );
};

export default AppMenu;
