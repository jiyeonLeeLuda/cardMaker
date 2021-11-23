import React from 'react';
import styles from './card.module.css';

const Card = ({ card }) => {
  return (
    <section>
      <h1>{card.id}</h1>
    </section>
  );
};

export default Card;
