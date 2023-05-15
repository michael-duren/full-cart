import { Outlet } from 'react-router-dom';
import NavBar from './routes/navigation/NavBar';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <NavBar />
      <Outlet />
    </Layout>
  );
}

export default App;
