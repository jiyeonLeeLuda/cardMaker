import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Editor from '../../components/card-editor/editor';
import Preview from '../../components/card-preview/preview';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './cards.module.css';

const Cards = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Jiyeon',
      company: 'Kakao',
      theme: 'light',
      title: 'software engineer',
      email: 'Jiyeon@gmail.com',
      message: 'go for it ',
      fileName: null,
      fileURL: null,
    },
    {
      id: '2',
      name: 'Jiyeon2',
      company: 'Kakao',
      theme: 'colorful',
      title: 'software engineer',
      email: 'Jiyeon@gmail.com',
      message: 'go for it ',
      fileName: null,
      fileURL: null,
    },
    {
      id: '3',
      name: 'Jiyeon3',
      company: 'Kakao',
      theme: 'dark',
      title: 'software engineer',
      email: 'Jiyeon@gmail.com',
      message: 'go for it ',
      fileName: null,
      fileURL: null,
    },
  ]);
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
  const onAdd = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.cards}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} onAdd={onAdd} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Cards;
