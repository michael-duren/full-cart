import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../home/Home';
import NewList from '../lists/NewList';
import TestErrors from '../../components/errors/TestError';
import NotFound from '../../components/errors/NotFound';
import ServerError from '../../components/errors/ServerError';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'newlist', element: <NewList /> },
      { path: 'errors', element: <TestErrors /> },
      { path: 'not-found', element: <NotFound /> },
      { path: 'server-error', element: <ServerError /> },
      { path: '*', element: <Navigate replace to={'/not-found'} /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
