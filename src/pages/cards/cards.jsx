import { onValue, ref, set } from '@firebase/database';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Editor from '../../components/card-editor/editor';
import Preview from '../../components/card-preview/preview';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './cards.module.css';

const Cards = ({ authService, FileInput, db }) => {
  const [cards, setCards] = useState(
    null
    //     {
    //     1: {
    //       id: '1',
    //       name: 'Jiyeon',
    //       company: 'Kakao',
    //       theme: 'light',
    //       title: 'software engineer',
    //       email: 'Jiyeon@gmail.com',
    //       message: 'go for it ',
    //       fileName: null,
    //       fileURL: null,
    //     },
    //     2: {
    //       id: '2',
    //       name: 'Jiyeon2',
    //       company: 'Kakao',
    //       theme: 'colorful',
    //       title: 'software engineer',
    //       email: 'Jiyeon@gmail.com',
    //       message: 'go for it ',
    //       fileName: null,
    //       fileURL: null,
    //     },
    //     3: {
    //       id: '3',
    //       name: 'Jiyeon3',
    //       company: 'Kakao',
    //       theme: 'dark',
    //       title: 'software engineer',
    //       email: 'Jiyeon@gmail.com',
    //       message: 'go for it ',
    //       fileName: null,
    //       fileURL: null,
    //     },
    // }
  );
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

  const writeCardData = (userId, data) => {
    set(ref(db, 'users/' + userId), data);
  };

  useEffect(() => {
    const cardsRef = ref(db, 'users/' + location.state.id);
    onValue(cardsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(snapshot);
      console.log(data);
      data && setCards(data['cards']);
    });
  }, []);

  useEffect(() => {
    // console.log('useEffect : DB write');
    cards && writeCardData(location.state.id, { cards });
  }, [cards]);
  return (
    <section className={styles.cards}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          onAdd={AddOrUpdate}
          onUpdate={AddOrUpdate}
          onDelete={onDelete}
          FileInput={FileInput}
        />
        {cards && <Preview cards={cards} />}
      </div>
      <Footer />
    </section>
  );
};

export default Cards;
