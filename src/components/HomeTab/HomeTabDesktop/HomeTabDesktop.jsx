import transactions from '../transactions.json';
import './HomeTabDesktop.scss';

const tableHeadData = ['Date', 'Type', 'Category', 'Comment', 'Sum', 'Balance'];

export default function HomeTabDesktop() {
  const res = transactions.data;

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
          {res.map(item => {
            const result = item.Expenses ? '-' : '+';

            return (
              <tr key={item.id} className={'homeTab-body_row'}>
                <td className={'homeTab-body_data'}>{item.date}</td>
                <td className={'homeTab-body_data'}>{result}</td>
                <td className={'homeTab-body_data'}>{item.category}</td>
                <td className={'homeTab-body_data'}>{item.comment}</td>
                <td
                  className={
                    result === '+'
                      ? 'homeTab-body_data homeTab-body_data--plus'
                      : 'homeTab-body_data homeTab-body_data--minus'
                  }
                >
                  {item.sum}
                </td>
                <td className={'homeTab-body_data'}>{item.balance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
