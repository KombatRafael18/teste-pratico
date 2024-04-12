import React from 'react';
import styles from './popUp.module.css';

function PopUp({ message, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup}>
        <div className={styles.texte}>
          <p>{message}</p>
        </div>
        <div>
          <button className={styles.submitButton} onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
