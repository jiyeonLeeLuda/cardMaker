import { Routes, Route } from 'react-router-dom';

import styles from './app.module.css';
import Cards from './pages/cards/cards';
import Login from './pages/login/login';

function App({ authService, imgUploadService }) {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Login authService={authService} />} />
        <Route
          path='/cards'
          element={
            <Cards
              authService={authService}
              imgUploadService={imgUploadService}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
