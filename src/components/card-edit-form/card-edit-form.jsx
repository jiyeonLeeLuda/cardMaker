import React from 'react';
import styles from './card-edit-form.module.css';

const CardEditForm = ({ card }) => {
  return (
    <section>
      <h1>{card.name}</h1>
    </section>
  );
};

export default CardEditForm;
