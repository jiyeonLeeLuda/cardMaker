import React from 'react';
import styles from './img-file-input.module.css';

const ImgFileInput = ({ imgUploadService, card, updateCard }) => {
  const onChange = async (event) => {
    const url = await imgUploadService.uploadImage(event.target.files[0]);
    console.log(url);

    updateCard({ ...card, fileURL: url });
  };
  return (
    <input
      className={styles.fileInput}
      type='file'
      name='file'
      accept='image/*'
      onChange={onChange}
    />
  );
};

export default ImgFileInput;
