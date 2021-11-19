import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '../Button';
import Switch from './Switch';
import SelectCategory from './SelectCategory';
import { costs } from '../../assets/data/select-data/selectData';
//import "./transactionFormSelect.scss";
//import Box from '@material-ui/core/Box';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
//import Select from "react-select";

import './TransactionFormDatepicker.scss';
//redux
import {useSelector, useDispatch} from 'react-redux';
//import fetchTransactions from '../../redux/transactions/transaction-operations';

import styles from './TransactionForm.module.scss';

export default function TransactionForm({ onClose }) {
  // const dispatch = useDispatch();
  
  const [chooseSelect, setChooseSelect] = useState(false);
  const [visibleCategory, setVisibleCategory] = useState(false);
  const [category, setCategory] = useState('Choose category');
  const [typeOfTransaction, setTypeOfTransaction] = useState('Сosts');
  const [startDate, setStartDate] = useState(new Date());

  const handleChangeCategory = event => {
    setCategory(event.target.value);
  };

  const onSwitchChecked = evt => {
    setChooseSelect(evt.target.checked);
    setTypeOfTransaction('Income');
    toggleVisibleCategory();
  };

  const toggleVisibleCategory = () => {
    setVisibleCategory(!visibleCategory);
  };

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

  const handleClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleSubmitForm = (e, data) => {
    e.preventDefault();
    // dispatch(fetchTransactions.addTransaction(data));
    reset();
    // onClose();
  };

  const reset = () => {
    setChooseSelect(false);
    setCategory('Choose category');
    setStartDate(new Date());
  };

  const validationsSchema = Yup.object().shape({
    typeOfTransaction: Yup.string().required('Type is required'),
    //category: Yup.string('Choose category').required('Category is required'),
    amount: Yup.number('Enter your amount')
      .min(0)
      .required('Amount is required'),
    date: Yup.date(),
    comment: Yup.string('Enter your comment'),
  });

  return (
    <div className={styles.modal}>
    <div className={styles.container}>
      <div className={styles.form}>
        <h3 className={styles.title}>Add transaction</h3>

        <Formik
          initialValues={{
            typeOfTransaction: 'Costs',
            category: category,
            amount: null,
            date: startDate,
            comment: '',
          }}
          onSubmit={handleSubmitForm}
          validationSchema={validationsSchema}
        >
          {({ errors, touched, isSubmitting, values, handleChange }) => (
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

              <div className={styles.box}>
                <p
                  className={styles.text}
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
                  className={styles.text}
                  style={{ color: 'rgba(255, 101, 150, 1)' }}
                >
                  Costs
                </p>
              </div>

              {/* <Field
                name="category"
                costs={costs.costs}
                as="select"
                hidden={visibleCategory}
                onBlur={handleChange}
                handleChange={handleChangeCategory}
                className={styles.SelectBox}
              >
                <option
                  value="Choose category"
                  className={styles.PlaceholderSelect}
                >
                  Choose category
                </option>
                {costs.map(SelectCategoryItem)}
              </Field> */}
              {!visibleCategory &&
                  <SelectCategory
                 
                  name="category"
                  costs={costs.costs}
                  hidden={visibleCategory}
                  category={category}
                  value={values.category}
                  onBlur={handleChange}
                  handleChange={handleChangeCategory}
                  
              
                //error={touched.category && Boolean(errors.category)}
                //helperText={touched.category && errors.category}
                />
              }
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
                {/*  <Field name="date" type="date" className={styles.Date} />  */}

                <DatePicker
                  id="select"
                  className={styles.Date}
                  selected={startDate}
                  onChange={handleDate}
                  dateFormat="dd.MM.yyyy"
                />
              </div>

              {errors.comment && touched.comment && (
                <div className={styles.inputFeedback}>{errors.comment}</div>
              )}

              <Field
                name="comment"
                as="textarea"
                type="text"
                placeholder="Comment"
                className={styles.Comment}
              />

              <Button
                // onClick={handleSubmit}
                disabled={isSubmitting}
                type="submit"
                contentBtn="Add"
                button="Button"
              />

              <Button
                handleClick={handleClick}
                contentBtn="Cancel"
                button="ButtonSecondary"
              />

              {/* {isLoading && <LoaderSpinner />} */}
            </Form>
          )}
        </Formik>
      </div>
      </div>
      </div>
  );
}
