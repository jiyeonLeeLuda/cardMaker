import React from 'react';
import AddForm from '../add-form/add-form';
import CardEditForm from '../card-edit-form/card-edit-form';
import styles from './editor.module.css';

const Editor = ({ cards, onAdd }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => (
        <CardEditForm card={card} />
      ))}
      <AddForm onAdd={onAdd} />
    </section>
  );
};

export default Editor;
