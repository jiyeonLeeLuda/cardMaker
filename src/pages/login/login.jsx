import React from 'react';
import { useNavigate } from 'react-router';

import styles from './login.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Login = ({ authService }) => {
  const navi = useNavigate();

  function login(event) {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => {
        console.log(data.user.uid);
        navi('/cards');
      });
  }
  return (
    <section className={styles.container}>
      <Header />
      <h1>Login</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button
            className={styles.button}
            onClick={(e) => {
              login(e);
            }}
          >
            google
          </button>
        </li>

        <li className={styles.item}>
          <button
            className={styles.button}
            onClick={(e) => {
              login(e);
            }}
          >
            github
          </button>
        </li>
      </ul>
      <Footer />
    </section>
  );
};

export default Login;
