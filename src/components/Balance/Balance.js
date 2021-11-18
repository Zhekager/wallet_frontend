import React from 'react';
// import { useSelector } from 'react-redux';
// import { balanceSelectors } from '../../redux/balance';

import styles from './Balance.module.scss';

const Balance = () => {
  const total = 24000;
  // const total = useSelector(balanceSelectors.getBalance);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>balance</h2>
      <p className={styles.text}>
        <span className={styles.currency}>&#8372;</span>
        {total}
      </p>
    </div>
  );
};

export default Balance;
