import React from 'react';
// redux to add
import styles from './Balance.module.scss';

const Balance = () => {
  const total = 24000; //to change

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Ваш баланс</h2>
      <p className={styles.text}>
        <span className={styles.currency}>&#8372;</span>
        {total}
      </p>
    </div>
  );
};

export default Balance;
