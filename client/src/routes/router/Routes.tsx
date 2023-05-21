import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import UserDashboard from '../userdashboard/UserDashboard';
import NewList from '../lists/NewList';
import TestErrors from '../../components/errors/TestError';
import NotFound from '../../components/errors/NotFound';
import ServerError from '../../components/errors/ServerError';
import LoginForm from '../../components/users/LoginForm';
import Home from '../home/Home';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'dashboard', element: <UserDashboard /> },
      { path: 'newlist', element: <NewList /> },
      { path: 'login', element: <LoginForm /> },
      { path: 'errors', element: <TestErrors /> },
      { path: 'not-found', element: <NotFound /> },
      { path: 'server-error', element: <ServerError /> },
      { path: '*', element: <Navigate replace to={'/not-found'} /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
