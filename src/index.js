import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import firebaseApp from './service/firebase/firebase';
import AuthService from './service/firebase/auth';
import Cloudnary from './service/cloudnary';

const authService = new AuthService(firebaseApp);
const imgUploadService = new Cloudnary(
  process.env.REACT_APP_CLOUDNARY_CLOUD_NAME,
  process.env.REACT_APP_CLOUDNARY_PRESET
);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} imgUploadService={imgUploadService} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
