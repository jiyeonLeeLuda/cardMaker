import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import firebaseApp from './service/firebase/firebase';
import AuthService from './service/firebase/auth';
import { getDatabase } from 'firebase/database';
import Cloudnary from './service/cloudnary';
import ImgFileInput from './components/img-file-input/img-file-input';

const authService = new AuthService(firebaseApp);
const db = getDatabase(firebaseApp);
const imgUploadService = new Cloudnary(
  process.env.REACT_APP_CLOUDNARY_CLOUD_NAME,
  process.env.REACT_APP_CLOUDNARY_PRESET
);

const FileInput = (props) => (
  <ImgFileInput {...props} imgUploadService={imgUploadService} />
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} FileInput={FileInput} db={db} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
