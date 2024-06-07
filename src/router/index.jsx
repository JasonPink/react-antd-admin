import React, { lazy } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from 'react-router-dom';
import Layout from '@/layouts';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Login = lazy(() => import('@/pages/Login'));
const Users = lazy(() => import('@/pages/Users'));
const Profile = lazy(() => import('@/pages/Users/profile'));
const Userlist = lazy(() => import('@/pages/Users/list'));

export const layoutRoutes = [
    {
        path: '/',
        element: <Navigate to="/dashboard" />
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        meta: {
            title: '数据看板'
        }
    },
    {
        path: 'user',
        element: <Users />,
        meta: {
            title: '用户管理'
        },
        children: [
            {
                path: 'profile',
                element: <Profile />,
                meta: {
                    title: '用户简介'
                }
            },
            {
                path: 'list',
                element: <Userlist />,
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
