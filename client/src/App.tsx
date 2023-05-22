import { Outlet } from 'react-router-dom';
import NavBar from './routes/navigation/NavBar';
import Layout from './components/layout/Layout';
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer/Footer';

function App() {
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

export default App;
