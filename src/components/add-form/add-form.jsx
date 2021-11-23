import React, { useRef } from 'react';
import Button from '../button/button';
import ImgFileInput from '../img-file-input/img-file-input';
import styles from './add-form.module.css';

const AddForm = ({ addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };

    formRef.current.reset();
    addCard(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type='text'
        name='name'
        placeholder='Name'
      />
      <input
        ref={companyRef}
        className={styles.input}
        type='text'
        name='company'
        placeholder='Company'
      />
      <select ref={themeRef} className={styles.select} name='theme'>
        <option value='dark'>dark</option>
        <option value='light'>light</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type='text'
        name='title'
        placeholder='Title'
      />
      <input
        ref={emailRef}
        className={styles.input}
        type='text'
        name='email'
        placeholder='Email'
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name='message'
        placeholder='message'
      ></textarea>
      <div className={styles.fileInput}>
        <ImgFileInput />
      </div>

      <Button name='Add' onClick={onSubmit}></Button>
    </form>
  );
};

export default AddForm;
