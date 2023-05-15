import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Layout from './components/layout/Layout.tsx';
import NavBar from './routes/navigation/NavBar.tsx';
import { StoreContext, store } from './stores/store.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Layout>
    <StoreContext.Provider value={store}>
      <NavBar />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContext.Provider>
  </Layout>
);
