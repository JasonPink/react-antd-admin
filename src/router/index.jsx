import React, { lazy, Suspense } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from 'react-router-dom';
import { Spin } from 'antd';
import Layout from '@/layouts';
// import Dashboard from '@/pages/Dashboard';
// import Users from '@/pages/Users';
// import Profile from '@/pages/Users/profile';
// import Userlist from '@/pages/Users/list';

const Login = lazy(() => import('@/pages/Login'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Users = lazy(() => import('@/pages/Users'));
const Profile = lazy(() => import('@/pages/Users/profile'));
const Userlist = lazy(() => import('@/pages/Users/list'));

const lazyCom = element => {
    return <Suspense fallback={<Spin></Spin>}>{element}</Suspense>;
};

export const layoutRoutes = [
    {
        path: '/',
        element: <Navigate to="/dashboard" />
    },
    {
        path: 'dashboard',
        element: lazyCom(<Dashboard />),
        meta: {
            title: '数据看板'
        }
    },
    {
        path: 'user',
        element: lazyCom(<Users />),
        meta: {
            title: '用户管理'
        },
        children: [
            {
                path: 'profile',
                element: lazyCom(<Profile />),
                meta: {
                    title: '用户简介'
                }
            },
            {
                path: 'list',
                element: lazyCom(<Userlist />),
                meta: {
                    title: '用户列表'
                }
            },
            {
                path: '',
                element: <Navigate to="profile" />
            }
        ]
    }
];

const routes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Layout />,
        children: layoutRoutes
    }
];

export default routes;
