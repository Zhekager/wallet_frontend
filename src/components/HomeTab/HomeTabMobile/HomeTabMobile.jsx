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
              <span className="mobile-list_category">Дата</span>
              <span className="mobile-list_data">{item.date}</span>
            </li>
            <li className="mobile-list_item">
              <span className="mobile-list_category">Тип</span>
              <span className="mobile-list_data">{result}</span>
            </li>
            <li className="mobile-list_item">
              <span className="mobile-list_category">Категория</span>
              <span className="mobile-list_data">{item.category}</span>
            </li>
            <li className="mobile-list_item">
              <span className="mobile-list_category">Комментарий</span>
              <span className="mobile-list_data">{item.comment}</span>
            </li>
            <li className="mobile-list_item">
              <span className="mobile-list_category">Сумма</span>
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
              <span className="mobile-list_category">Баланс</span>
              <span className="mobile-list_data">{item.balance}</span>
            </li>
          </ul>
        );
      })}
    </>
  );
}
