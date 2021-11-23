import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Balance from './ChartBalance/ChartBalance';
import styles from './Chart.module.scss';

export default function Chart( ) {
  
  return (
    <div className={styles.chart}>
      {/* <p className={styles.title}>Statistics</p> */} {/* уже есть в диаграмм табе */}
      <div className={styles.containerChart}>
        <Balance consumption={consumption} />
        <div className={styles.doughnut}>
          <Doughnut
            data={{
              datasets: [
                {
                
                  data: data.categoriesSummary
                    ? Object.values(data.categoriesSummary)
                    : null, 
                  backgroundColor: [
                    '#FED057',
                    '#FFD8D0',
                    '#FD9498',
                    '#C5BAFF',
                    '#6E78E8',
                    '#4A56E2',
                    '#81E1FF',
                    '#24CCA7',
                    '#00AD84',
                  ],
                  borderColor: [
                    '#FED057',
                    '#FFD8D0',
                    '#FD9498',
                    '#C5BAFF',
                    '#6E78E8',
                    '#4A56E2',
                    '#81E1FF',
                    '#24CCA7',
                    '#00AD84',
                  ],
                  borderWidth: 1,
                  cutout: 90,
                },
                // {
                //   label: '# of Votes',
                //   data: arrMoney,
                //   backgroundColor: arrColors,
                //   borderColor: arrColors,
                //   borderWidth: 1,
                //   cutout: 90,
                // },
              ],
            }}
            options={{ maintainAspectRatio: false }}
            height={270}
            width={270}
          />
        </div>
      </div>
    </div>
  );
}
