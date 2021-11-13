import { useState } from 'react';
import Select from 'react-select';
import { month, year, tableData } from '../../assets/data/select-data/selectData';
import styles from './Table.module.scss';
import { monthInitial, yearInitial, } from '../../assets/data/select-data/selectData';
const colourStyles = {
  placeholder: base => ({
    ...base,
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#000000',
  }),
  menu: (provided, state) => ({
    ...provided,
    padding: 10,
    background: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
  }),

  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),

  control: styles => ({
      ...styles,
    borderRadius: '30px',
    border: '1px solid #000000',
    padding: '0 15px',
    minHeight: '50px',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: ' 1.5',
    color: '#000000',
    backgroundColor: 'transparent',
    ':hover': { cursor: 'pointer' },
    '@media screen and (min-width: 768px)': {
      minWidth: '166px',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255,0.7)',
    color: '#000000',
    padding: 20,
    ':hover': { cursor: 'pointer' },
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
      lineHeight: ' 1.5',
      
  }),
};

function Table() {
    const [selected, setSelected] = useState({ month: '', year: '' });
    const handleChange = event => {
        setSelected(event.label);
    };
    return (
        <div className={styles.tableContainer}>
            <div className={styles.selectContainer}>
            <div className={styles.select}>
            <Select
            value={selected.month}
            options={month}
            name="month"
                onChange={handleChange}
                placeholder={monthInitial}
                styles={colourStyles} 
            />
            </div>
            <div className={styles.select}>
            <Select
                value={selected.year}
                options={year}
                name="month"
                onChange={handleChange}
                placeholder={yearInitial}
                styles={colourStyles}
            />
            </div>
            </div>

            <div className={styles.categoryContainer}>
                <ul className={styles.listTitle}>
                    <li className={styles.listTitleText}>Категория</li>
                    <li className={styles.listTitleText}>Сумма</li>
                </ul>

                <ul className={styles.listTransaction}>
                    {tableData?.length > 0 ? (
                        tableData.map(({ color, value, sum}) => {
                            return (
                                <li className={styles.elementTransaction}>
                                    <div
                                        style={{
                                            backgroundColor: `${color}`,
                                            width: '24px',
                                            minHeight: '24px',
                                            borderRadius: '2px',
                                            marginRight: '16px',
                                        }}
                                    ></div>
                                    <div className={styles.category}>{value}</div>
                                    <div className={styles.sum}>{sum}</div>
                                </li>
                            );
                        })
                    ) : (
                        <li className={styles.elementTransaction}>
                                <div className={styles.category}>За выбраный период нет транзакций :(</div>
                        </li>
                    )}
                </ul>

                <ul className={styles.listTotal}>
                    <li className={styles.itemTotal}>
                        <div className={styles.itemText}>Расходы:</div>
                        
                        
                    </li>
                    <li className={styles.itemTotal}>
                        <div className={styles.itemText}>Доходы:</div>
                    </li>
                </ul>
            </div>
            </div>
        
    );
};

export default Table;