import { RouteObject, createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../home/Home';
import NewList from '../lists/NewList';
import TestErrors from '../../components/TestError';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'newlist', element: <NewList /> },
      { path: 'errors', element: <TestErrors /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
