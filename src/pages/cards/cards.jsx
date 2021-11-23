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
      fileName: 'Jiyeon',
      fileURL: 'Jiyeon.png',
    },
    {
      id: '2',
      name: 'Jiyeon2',
      company: 'Kakao',
      theme: 'light',
      title: 'software engineer',
      email: 'Jiyeon@gmail.com',
      message: 'go for it ',
      fileName: 'Jiyeon',
      fileURL: 'Jiyeon.png',
    },
    {
      id: '3',
      name: 'Jiyeon3',
      company: 'Kakao',
      theme: 'light',
      title: 'software engineer',
      email: 'Jiyeon@gmail.com',
      message: 'go for it ',
      fileName: 'Jiyeon',
      fileURL: 'Jiyeon.png',
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
  return (
    <section className={styles.cards}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Cards;
