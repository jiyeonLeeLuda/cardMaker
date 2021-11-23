import React from 'react';
import styles from './card-edit-form.module.css';
import ImageFileInput from '../img-file-input/img-file-input';
import Button from '../button/button';

const CardEditForm = ({ card, deleteCard, updateCard }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;
  const onSubmit = () => {
    deleteCard(card);
  };
  const onChange = (event) => {
    if (event.target == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='text'
        name='company'
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name='theme'
        value={theme}
        onChange={onChange}
      >
        <option value='dark'>dark</option>
        <option value='light'>light</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='title'
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='text'
        name='email'
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name='message'
        value={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>

      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
