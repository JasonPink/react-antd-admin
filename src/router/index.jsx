import React, { lazy } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from 'react-router-dom';
import Layout from '@/layouts';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Users = lazy(() => import('@/pages/Users'));
const Profile = lazy(() => import('@/pages/Users/profile'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/dashboard" />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/user',
                element: <Users />,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                    {
                        path: '',
                        element: <Navigate to="profile" />
                    }
                ]
            }
        ]
    }
]);

const Routes = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
