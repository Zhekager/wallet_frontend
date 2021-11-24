import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Balance from './ChartBalance/ChartBalance';
import styles from './Chart.module.scss';

export default function Chart() {
  return (
    <div className={styles.chart}>
      {/* <p className={styles.title}>Statistics</p> */}{' '}
      {/* уже есть в диаграмм табе */}
      <div className={styles.containerChart}>
        <Balance />
        <div className={styles.doughnut}>
          <Doughnut
            data={{
              datasets: [
                {
                  //   data: categoriesSummary
                  //     ? Object.values(categoriesSummary)
                  //     : null,
                  data: [12, 19, 3, 5, 2, 3],
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
// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// export default function Chart() {
//   return <Doughnut data={data} />;
// }
