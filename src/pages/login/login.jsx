import React from 'react';
import { useNavigate } from 'react-router';
import { loginWithGoogle } from '../../service/firebase/auth';

import styles from './login.module.css';

const Login = (props) => {
  const navi = useNavigate();

  async function googleLogin() {
    const res = await loginWithGoogle();
    if (res) {
      return navi('/cards');
    }
  }
  return (
    <section className={styles.container}>
      <div className={styles.loginBox}>
        <button className={styles.loginGoogle} onClick={googleLogin}>
          Login with google
        </button>
        <button className={styles.loginGithub}>Login with github</button>
      </div>
    </section>
  );
};

export default Login;
