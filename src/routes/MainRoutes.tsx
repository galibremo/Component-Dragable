import { lazy } from 'react';

// project imports
import AuthGuard from 'utils/route-guard/AuthGuard';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const TodoList = Loadable(lazy(() => import('views/todo-list')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <SamplePage />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/todo-list',
            element: <TodoList />
        }
    ]
};

export default MainRoutes;
