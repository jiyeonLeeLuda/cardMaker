import { Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import './app';
import Cards from './pages/cards/cards';
import Login from './pages/login/login';
import firebaseConfig from './service/firebase/config';

function App() {
  // Initialize Firebase
  initializeApp(firebaseConfig);
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/cards' element={<Cards />} />
    </Routes>
  );
}

export default App;
