import { Routes, Route } from 'react-router-dom';
import './app';
import Cards from './pages/cards/cards';
import Login from './pages/login/login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/cards' element={<Cards />} />
    </Routes>
  );
}

export default App;
