import React, { Suspense, useEffect } from 'react';

import {
    BrowserRouter as Router,
    useRoutes,
    useLocation
} from 'react-router-dom';
import routes from '@/router';

const AppRouter = () => {
    const routing = useRoutes(routes);
    const location = useLocation();

    useEffect(() => {
        const currentRoute = routes.find(
            route => route.path === location.pathname
        );
        if (currentRoute && currentRoute.meta && currentRoute.meta.title) {
            document.title = currentRoute.meta.title;
        }
    }, [location]);

    return <Suspense fallback={<div>Loading...</div>}>{routing}</Suspense>;
};

const App = () => (
    <Router>
        <AppRouter />
    </Router>
);

export default App;
