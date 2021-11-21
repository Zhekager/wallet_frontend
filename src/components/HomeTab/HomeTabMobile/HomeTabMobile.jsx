import transactions from '../transactions.json';
import './HomeTabMobile.scss';

export default function HomeTabMobile() {
  const res = transactions.data;

  return (
    <>
      {res.map(item => {
        const borderColor = item.Expenses ? '#ff6596' : '#24cca7';
        const result = item.Expenses ? '-' : '+';

        return (
          <ul
            key={item.id}
            className={
              result === '+' ? 'mobile-list mobile-list--plus' : 'mobile-list'
            }
            style={{ borderColor: borderColor }}
          >
            <li className="mobile-list_item">
              <span className="mobile-list_category">Date</span>
              <span className="mobile-list_data">{item.date}</span>
            </li>
            <li className="mobile-list_item">
              <span className="mobile-list_category">Type</span>
              <span className="mobile-list_data">{result}</span>
            </li>
            <li className="mobile-list_item">
              <span className="mobile-list_category">Category</span>
              <span className="mobile-list_data">{item.category}</span>
            </li>
            <li className="mobile-list_item">
              <span className="mobile-list_category">Comment</span>
              <span className="mobile-list_data">{item.comment}</span>
            </li>
            <li className="mobile-list_item">
              <span className="mobile-list_category">Sum</span>
              <span
                className={
                  result === '+'
                    ? 'mobile-list_data mobile-list_data--plus'
                    : 'mobile-list_data mobile-list_data--minus'
                }
              >
                {item.sum}
              </span>
            </li>
            <li className="mobile-list_item">
              <span className="mobile-list_category">Balance</span>
              <span className="mobile-list_data">{item.balance}</span>
            </li>
          </ul>
        );
      })}
    </>
  );
}
