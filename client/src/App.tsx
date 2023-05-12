import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import NewList from './routes/lists/NewList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newlist" element={<NewList />} />
    </Routes>
  );
}

export default App;
