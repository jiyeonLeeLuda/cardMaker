import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './cards.module.css';

const Cards = (props) => {
  return (
    <section className={styles.cards}>
      <Header />
      <h1>cards</h1>
      <Footer />
    </section>
  );
};

export default Cards;
