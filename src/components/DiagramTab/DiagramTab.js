import React from 'react';
//import { transSelectors } from '../../redux/transactions/';
//import { useSelector } from 'react-redux';

import { useTheme } from '@material-ui/core/styles';

import Chart from '../../components/Chart/Chart';
import DiagramTab from '../../components/Table/Table';
//import SelectForStats from '../../components/SelectForStats/SelectForStats';

import styles from './DiagramTab.module.scss';
//import { el } from 'date-fns/locale';

const Stats = () => {
  const theme = useTheme();
  //const allCategoriesWithColors = theme.categories;
  //const months = theme.months;

  // const categoriesFromState = useSelector(
  //   transSelectors.getCategoriesTransactions,
  // );
  //const categoriesWithDB = categoriesFromState.categories;
  //const consumption = categoriesFromState.consumption;

  //const DB = categoriesWithDB ? categoriesWithDB : [];

  let allArray = [];

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

  const colors = allArray.map(el => el.color);

  const arrMoney = allArray.map(el => el.sum);
  return (
    <>
      <div className={styles.statisticsPage}>
        <Chart
          arrColors={colors}
          arrMoney={arrMoney}
          //consumption={consumption}
        />
        {/*<div>
         <SelectForStats months={months} />
          <DiagramTab allArray={allArray} />
        </div> */}
      </div>
    </>
  );
};
export default Stats;
