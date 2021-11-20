import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Editor from '../../components/card-editor/editor';
import Preview from '../../components/card-preview/preview';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './cards.module.css';

const Cards = ({ authService }) => {
  const navi = useNavigate();
  const location = useLocation();
  console.log(location.state);
  function onLogout() {
    authService //
      .logout()
      .then(navi('/'));
  }
  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        if (!user) {
          navi('/');
        }
      });
  });
  return (
    <section className={styles.cards}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Cards;
