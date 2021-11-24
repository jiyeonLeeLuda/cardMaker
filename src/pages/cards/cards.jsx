import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Editor from '../../components/card-editor/editor';
import Preview from '../../components/card-preview/preview';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './cards.module.css';

const Cards = ({ authService, imgUploadService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });
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
  const AddOrUpdate = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const onDelete = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.cards}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          onAdd={AddOrUpdate}
          onUpdate={AddOrUpdate}
          onDelete={onDelete}
          imgUploadService={imgUploadService}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Cards;
