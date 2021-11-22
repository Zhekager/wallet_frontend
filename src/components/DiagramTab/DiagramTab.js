//import React from 'react';
//import { transSelectors } from '../../redux/transactions/';
//import { useSelector } from 'react-redux';

////import { useTheme } from '@material-ui/core/styles';

//import Chart from '../../components/Chart/Chart';
//import DiagramTab from '../../components/Table/Table';
//import SelectForStats from '../../components/SelectForStats/SelectForStats';

//import styles from './DiagramTab.module.scss';
//import { el } from 'date-fns/locale';

//const Stats = () => {
//const theme = useTheme();
//const allCategoriesWithColors = theme.categories;
//const months = theme.months;

// const categoriesFromState = useSelector(
//   transSelectors.getCategoriesTransactions,
// );
//const categoriesWithDB = categoriesFromState.categories;
//const consumption = categoriesFromState.consumption;

//const DB = categoriesWithDB ? categoriesWithDB : [];

//let allArray = [];

//function createArrDBWithState() {
// allCategoriesWithColors.forEach(el1 => {
// DB.forEach(el2 => {
//  if (el1.value === el2.category) {
//  const sum = el2.sum;
// allArray.push({ ...el1, sum });
//}
//});
// });
// }

// createArrDBWithState();

//const colors = allArray.map(el => el.color);

//const arrMoney = allArray.map(el => el.sum);
//return (
// <>
// <div className={styles.statisticsPage}>
//   <Chart
//   arrColors={colors}
//   arrMoney={arrMoney}
//consumption={consumption}
// />
//<div>
// <SelectForStats months={months} />
//  <DiagramTab allArray={allArray} />
// </div>
//  </div>
//  </>
//);
//};
//export default Stats;

// //import { Route, Switch } from 'react-router-dom';
// import Chart from '../../components/Chart/Chart';
// import Table from '../../components/Table/Table';
// //import useSizeScreen from '../../hooks/useSizeScreen';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// //import apiOperations from '../../redux/categories/';
// import authSelectors from '../../redux/auth/auth-selectors';
// //import { getYears } from '../../redux/transactions/transaction-selectors';
// //import {
// // getCategories,
// // getTransactionStats,
// //} from '../../redux/categories/categories-selectors';
// import Period from './Period';
// import styles from './DiagramTab.module.scss';

// const DiagramTab = () => {
//   const balance = useSelector(state => authSelectors.getBalance(state));
//   // const years = useSelector(state => getYears(state)) || [];
//   //const categories = useSelector(state => getCategories(state));
//   //const transactionStats = useSelector(state => getTransactionStats(state));

//   const date = new Date();
//   const [month, setMonth] = useState(() => date.getUTCMonth() + 1);
//   const [year, setYear] = useState('');
//   const dispatch = useDispatch();

//   //useEffect(() => {
//   //const params = { year, month };
//   //dispatch(apiOperations.getTransactionStats(params));
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, [month, year]);

//   let data, totalForAllCategories;

//   //if (categories.expenses && transactionStats.expenseStats) {
//   //  data = categories.expenses.map((el, index) => {
//   //  const { expenseStats } = transactionStats;
//   //   return { ...el, ...expenseStats[index] };
//   // });
//   //totalForAllCategories = transactionStats.expenseStats.reduce(
//   // (acc, item) => {
//   //  return (acc += item.amount);
//   // },
//   //  0,
//   // );
//   //}

//   const dataNut = {
//     labels: data?.map(item => item.name),
//     datasets: [
//       {
//         label: '# of Votes',
//         data: data?.map(item => item.amount),
//         backgroundColor: data?.map(item => item.color),
//         borderColor: data?.map(item => item.color),
//         borderWidth: 1,
//       },
//       { width: 1 },
//     ],
//   };

//   const dataNutPlaceholder = {
//     labels: [],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [balance],
//         backgroundColor: ['#dcdcdf'],
//         borderColor: ['#000'],
//         borderWidth: 0,
//       },
//       { width: 1 },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: {
//         labels: {
//           boxWidth: 20,
//           boxHeight: 10,
//           font: {
//             size: 14,
//           },
//         },
//         //display: ? true : false,
//         position: 'top',
//         align: 'start',
//       },
//     },
//   };

//   return (
//     <div className={styles.statsContainer}>
//       {data && balance !== 0 && (
//         <>
//           <h2 className={styles.title}>Статистика</h2>
//           <div className={styles.statsWrapper}>
//             <div className={styles.chartTab}>
//               <Chart
//                 //dataNut={totalForAllCategories ? dataNut : dataNutPlaceholder}
//                 options={options}
//                 balance={balance}
//                 totalForAllCategories={totalForAllCategories}
//               />
//             </div>
//             <div className={styles.categoriesTab}>
//               <Period
//                 setRequestedMonth={setMonth}
//                 setRequestedYear={setYear}
//                 //years={years}
//               />
//               <Table
//                 data={data}
//                 //expenses={transactionStats.expenses}
//                 // incomes={transactionStats.incomes}
//               />
//             </div>
//           </div>
//         </>
//       )}
//       {/* {balance === 0 && <NoStats />} */}
//     </div>
//   );
// };

// export default DiagramTab;

// //const sizeScreen = useSizeScreen();
// //const [showModal, setShowModal] = useState(false);

// //const toggleModal = () => {
// //  setShowModal(!showModal);
// //};

// //const onOpenModal = e => {
// // setShowModal(true);
// // };

// //return (
// //  <>
// //   <div className={style.diagramTab}>
// //     <div className={style.wrapper}>

// //       <Chart />
// //        <Table />

// //      </div>
// //    </div>
// //// </>
// // );

import { useSelector } from 'react-redux';
import { getStatistics } from '../../redux/transactions/transaction-selectors';
import Chart from '../Chart';
import Table from '../Table';
import styles from './DiagramTab.module.scss';

export default function DiagramTab() {
  const data = useSelector(getStatistics)

  return (
    <section className={styles.SectionStats}>
      <h1 className={styles.StatisticsTitle}>Statistics</h1>
      <div className={styles.ContainerStats}>
        <Chart data={data} />
        <Table data={data} />
      </div>
    </section>
  )
};
