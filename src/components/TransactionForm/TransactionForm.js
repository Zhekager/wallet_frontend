import React, { useState } from 'react';
import Select from 'react-select';
import style from './TransactionForm.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '../Button';
import Switch from './Switch';
import SelectCategoryItem from './SelectCategoryItem';

import { costs } from '../../assets/data/select-data/selectData';

//import Box from '@material-ui/core/Box';
import DatePicker from 'react-datepicker';
import moment from 'moment';
//import Box from '@material-ui/core/Box';
import 'react-datepicker/dist/react-datepicker.css';
import AddTransaction from '../AddTransactionsButton/AddTransaction';
//redux
//import { useDispatch } from 'react-redux';
//import fetchTransactions from '../../redux/transactions/transaction-operations';

import styles from './TransactionForm.module.scss';

export default function TransactionForm() {
  const [chooseSelect, setChooseSelect] = useState(false);
  const [visibleCategory, setVisibleCategory] = useState(false);
  const [typeOfTransaction, setTypeOfTransaction] = useState('Сosts');
  // const [category, setCategory] = useState();
  const [startDate, setStartDate] = useState(new Date());

  const onSwitchChecked = evt => {
    setChooseSelect(evt.target.checked);
    setTypeOfTransaction('Income');
    toggleVisibleCategory();
  };

  const toggleVisibleCategory = () => {
    setVisibleCategory(!visibleCategory);
  };

  const validationsSchema = Yup.object().shape({
    typeOfTransaction: Yup.string().required('Type is required'),
    category: Yup.string(),
    amount: Yup.number().min(0).required('Amount is required'),
    date: Yup.date().required('Date is required'),
    comment: Yup.string(),
  });

  const handleDate = date => {
    setStartDate(date);
    const formatedDate = moment(date).format('DD/MMMM/yyyy');
    const dateD = moment(formatedDate).date();
    const month = moment(formatedDate).format('MMMM');
    const year = moment(formatedDate).year();
    /* setTransactionItem((state) => ({
      ...state,
      date: dateD,
      month: month,
      year: year,
    })); */
  };

  //

  return (
    <div className={style.container}>
      <div className={style.form}>
        <h3 className={style.title}>Add transaction</h3>

        <Formik
          initialValues={{
            typeOfTransaction: 'Costs',
            category: '',
            amount: '',
            date: '',
            comment: '',
          }}
          //onSubmit={openModal}
          validationSchema={validationsSchema}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              {/* <div id="my-radio-group"></div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="typeOfTransaction" value="Доход" />
              Доход
            </label>
            <label>
              <Field type="radio" name="typeOfTransaction" value="Расход" />
              Расход
            </label>
              {errors.typeOfTransaction && touched.typeOfTransaction && (
                <span className="error">{errors.typeOfTransaction}</span>
              )}
          </div> */}

              <div className={style.box}>
                <p
                  className={style.text}
                  style={{ color: 'rgba(36, 204, 167, 1)' }}
                >
                  Income
                </p>
                <Switch
                  onSwitch={chooseSelect => onSwitchChecked(chooseSelect)}
                  isChecked={chooseSelect}
                  onClick={chooseSelect => onSwitchChecked(chooseSelect)}
                />
                <p
                  className={style.text}
                  style={{ color: 'rgba(255, 101, 150, 1)' }}
                >
                  Cost
                </p>
              </div>

              {errors.category && touched.category && (
                <div className="input-feedback">{errors.category}</div>
              )}
              <Field
                name="category"
                costs={costs.costs}
                as="select"
                hidden={visibleCategory}
                className={styles.SelectBox}
              >
                <option
                  value="Choose category"
                  className={styles.PlaceholderSelect}
                >
                  Choose category
                </option>
                {costs.map(SelectCategoryItem)}
              </Field>

              {/* <div className={style.select}>
                <Select
                  className="select"
                  classNamePrefix="selectprefix"
                  isIncome={!chooseSelect}
                  category={category}
                  placeholder="Choose category"
                  isSearchable={true}
                  name="category"
                  value={category}
                  onChange={handleSelect}
                />
              </div> */}

              {errors.amount && touched.amount && (
                <div className={styles.inputFeedback}>{errors.amount}</div>
              )}
              <div className={styles.Credentials}>
                <Field
                  name="amount"
                  type="number"
                  placeholder="0.00"
                  className={styles.Amount}
                />
                <Field name="date" type="date" className={styles.Date} />
              </div>

              {/* <div className={style.datebform}>
                <Field
                  className={style.inputNumber}
                  name="amount"
                  type="number"
                  placeholder="0.00"
                />

                <DatePicker
                  id="select"
                  className={style.calendar}
                  selected={startDate}
                  onChange={handleDate}
                  dateFormat="dd.MM.yyyy"
                />
              </div> */}

              <Field
                name="comment"
                as="textarea"
                type="text"
                placeholder="Comment"
                className={styles.Comment}
              />

              {/* <Field
                className={style.textarea}
                name="comment"
                as="textarea"
                type="text"
                placeholder="Comment"
              /> */}

              <Button
                disabled={isSubmitting}
                type="submit"
                contentBtn="Add"
                button="Button"
              />
              <Button
                type="submit"
                contentBtn="Cancel"
                button="ButtonSecondary"
              />

              {/* {isLoading && <LoaderSpinner />} */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
