import React from 'react';
import styles from './login.module.css';
const Login = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.loginBox}>
        <button className={styles.loginGoogle}>Login with gogle</button>
        <button className={styles.loginGithub}>Login with github</button>
      </div>
    </section>
  );
};

export default Login;
