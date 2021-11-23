import React from 'react';
import s from './ChartBalance.module.scss';

export default function Balance({ consumption }) {
  return (
    // <div>
    //   {consumption ? (
    //     <p className={s.balancePositive}>&#8372; {consumption}</p>
    //   ) : (
    //     <p className={s.balanceNegative}>&#8372; {consumption}</p>
    //   )}
    // </div>
    <div>
      <p className={s.balance}>&#8372; {consumption}</p>
    </div>
  );
}
