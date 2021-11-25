import React, { useState } from 'react';
import { useRef } from 'react/cjs/react.development';
import styles from './img-file-input.module.css';

const ImgFileInput = ({ imgUploadService, fileName, onChangeFile }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (event) => {
    //로딩 스피너 시작
    setLoading(true);
    const file = event.target.files[0];
    const name = file['name'];
    const url = await imgUploadService.uploadImage(file);
    console.log(url);
    //로딩 스피너 끝
    setLoading(false);
    onChangeFile({ name, url });
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        ref={inputRef}
        type='file'
        name='file'
        accept='image/*'
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${fileName ? styles.pink : styles.grey}`}
          onClick={onClick}
        >
          {fileName || 'No File'}
        </button>
      )}

      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImgFileInput;
