import React from 'react';
import styles from './popUp.module.css';

function PopUp({ message, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup}>
        <p>{message}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default PopUp;
