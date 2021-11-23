import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';
//import { getTransactions } from '../../../redux/transactions/transaction-selectors';
import './HomeTabDesktop.scss';

const tableHeadData = ['Date', 'Type', 'Category', 'Comment', 'Sum', 'Balance'];

export default function HomeTabDesktop() {
  const arr = useSelector(authSelectors.getTransactionsUser);

  return (
    <>
      <table className={'homeTab'}>
        <thead className={'homeTab-head'}>
          <tr className={'homeTab-head_row'}>
            {tableHeadData.map(head => (
              <th className={'homeTab-head_data'} key={head}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={'homeTab-body'}>
          {arr?.map(({ _id, type, date, money, category, comment, balance }) => (
              <tr key={_id} className={'homeTab-body_row'}>
                <td className={'homeTab-body_data'}>{date}</td>
                <td className={'homeTab-body_data'}>{type}</td>
                <td className={'homeTab-body_data'}>{category.name}</td>
                <td className={'homeTab-body_data'}>{comment}</td>
                <td
                  className={
                    type === '+'
                      ? 'homeTab-body_data homeTab-body_data--plus'
                      : 'homeTab-body_data homeTab-body_data--minus'
                  }
                 >
                  {money}
                </td>
                <td className={'homeTab-body_data'}>{balance}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
}
