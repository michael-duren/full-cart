import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Layout from './components/layout/Layout.tsx';
import NavBar from './routes/navigation/NavBar.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <NavBar />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Layout>
  </React.StrictMode>
);
