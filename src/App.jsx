import React, { Suspense, useEffect } from 'react';
import {
    BrowserRouter as Router,
    useRoutes,
    useLocation
} from 'react-router-dom';
import { Spin } from 'antd';
import routes from '@/router';

const AppRouter = () => {
    const routing = useRoutes(routes);
    const location = useLocation();

    // useEffect(() => {
    //     const currentRoute = routes.find(
    //         route => route.path === location.pathname
    //     );
    //     if (currentRoute && currentRoute.meta && currentRoute.meta.title) {
    //         document.title = currentRoute.meta.title;
    //     }
    // }, [location]);

    // return <Suspense fallback={<Spin></Spin>}>{routing}</Suspense>;
    return useRoutes(routes);
};

const App = () => (
    <Router>
        <AppRouter />
    </Router>
);

export default App;
