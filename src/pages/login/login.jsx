import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import styles from './login.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Login = ({ authService }) => {
  const navi = useNavigate();

  function goToCards(userId) {
    navi('/cards', {
      state: {
        id: userId,
      },
    });
  }

  function onLogin(event) {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => {
        goToCards(data.user.uid);
      });
  }

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && goToCards(user.uid);
      });
  });
  return (
    <section className={styles.container}>
      <Header />
      <h1>Login</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button
            className={styles.button}
            onClick={(e) => {
              onLogin(e);
            }}
          >
            google
          </button>
        </li>

        <li className={styles.item}>
          <button
            className={styles.button}
            onClick={(e) => {
              onLogin(e);
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
