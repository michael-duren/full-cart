import { ReactComponent as Logo } from './assets/icons/logo.svg';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <header className="flex justify-between ">
          <h1 className="text-lg">
            <div>
              <span className="font-serif text-geraldine">full</span>
              <span className="font-serif text-h-pink">Cart</span>
            </div>
          </h1>
          <div>
            <Logo className="w-8 h-8" />
          </div>
        </header>
      </Layout>
    </>
  );
}

export default App;
