import { onValue, ref, set } from '@firebase/database';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Editor from '../../components/card-editor/editor';
import Preview from '../../components/card-preview/preview';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './cards.module.css';

const Cards = ({ authService, FileInput, db }) => {
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState('');
  const navi = useNavigate();
  const location = useLocation();
  const locationState = location.state;
  locationState && setUserId(locationState.id);
  function onLogout() {
    authService //
      .logout()
      .then(navi('/'));
  }
  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          navi('/');
        }
      });
  });

  useEffect(() => {
    const stopSync = db.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => {
      stopSync();
    };
  }, [db, userId]);
  const AddOrUpdate = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    //db에 카드 저장.
    db.saveCard(userId, card);
  };
  const onDelete = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    //db에서 해당카드 제거
    db.deleteCard(userId, card);
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
          FileInput={FileInput}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Cards;
