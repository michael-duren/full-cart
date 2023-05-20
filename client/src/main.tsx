import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { StoreContext, store } from './stores/store.ts';
import { router } from './routes/router/Routes.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
);
