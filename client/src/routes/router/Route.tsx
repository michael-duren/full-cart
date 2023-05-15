import { RouteObject, createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../home/Home';
import NewList from '../lists/NewList';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'newlist', element: <NewList /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
