import React from 'react';
import AddForm from '../add-form/add-form';
import CardEditForm from '../card-edit-form/card-edit-form';
import styles from './editor.module.css';

const Editor = ({ cards, onAdd, onDelete, onUpdate, imgUploadService }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.values(cards).map((card) => (
        <CardEditForm
          key={card.id}
          card={card}
          deleteCard={onDelete}
          updateCard={onUpdate}
          imgUploadService={imgUploadService}
        />
      ))}
      <AddForm addCard={onAdd} />
    </section>
  );
};

export default Editor;
