import { Outlet } from 'react-router-dom';
import NavBar from './routes/navigation/NavBar';
import Layout from './components/layout/Layout';
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer/Footer';
import { useStore } from './stores/store';
import { useEffect } from 'react';
import LogoSpinner from './components/spinners/LogoSpinner';
import { observer } from 'mobx-react-lite';

function App() {
  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);

  if (!commonStore.appLoaded) return <LogoSpinner />;

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Layout>
        <NavBar />
        <Outlet />
        <Footer />
      </Layout>
    </>
  );
}

export default observer(App);
