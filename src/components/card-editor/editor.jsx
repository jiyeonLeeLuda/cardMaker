import React from 'react';
import AddForm from '../add-form/add-form';
import CardEditForm from '../card-edit-form/card-edit-form';
import styles from './editor.module.css';

const Editor = ({ cards, onAdd, onDelete, onUpdate, FileInput }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards &&
        Object.values(cards).map((card) => (
          <CardEditForm
            key={card.id}
            card={card}
            deleteCard={onDelete}
            updateCard={onUpdate}
            FileInput={FileInput}
          />
        ))}
      <AddForm addCard={onAdd} FileInput={FileInput} />
    </section>
  );
};

export default Editor;
