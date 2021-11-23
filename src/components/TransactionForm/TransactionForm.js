import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

//components
import Button from '../Button';
import Switch from './Switch';
import SelectCategory from './SelectCategory';
import { costs } from '../../assets/data/select-data/selectData';
import Box from '@material-ui/core/Box';
import DatePicker from 'react-datepicker';
import moment from 'moment';
//import Select from "react-select";

//styles
import 'react-datepicker/dist/react-datepicker.css';
import styles from './TransactionForm.module.scss';
import './TransactionFormDatepicker.scss';
import { makeStyles } from '@material-ui/core/styles';

//redux
import { useSelector, useDispatch } from 'react-redux';
//import '../../redux/transactions';
//import { fetchTransactions } from '../../redux/transactions/transaction-operations';
//import { fetchTransRequest// } from '../../redux/transactions/transaction-actions';

export default function TransactionForm({ onClose }) {
  const dispatch = useDispatch();
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
    //dispatch(fetchTransactions.addTransaction(data));
    reset();
    onClose();
  };

  const reset = () => {
    setChooseSelect(false);
    setCategory('Choose category');
    setStartDate(new Date());
  };

  const validationsSchema = Yup.object().shape({
    typeOfTransaction: Yup.string().required('Type is required'),
    category: Yup.string('Choose category').required('Category is required'),
    amount: Yup.number('Enter your amount')
      .min(0)
      .required('Amount is required'),
    date: Yup.date(),
    comment: Yup.string('Enter your comment'),
  });

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
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
            <Form className={styles.form}>
              <h3 className={styles.title}>Add transaction</h3>

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

              {!visibleCategory && (
                <Box className={styles.categoryBox}>
                  {errors.typeOfTransaction && touched.typeOfTransaction && (
                    <span className={styles.inputFeedback}>
                      {errors.typeOfTransaction}
                    </span>
                  )}
                  <SelectCategory
                    name="category"
                    costs={costs.costs}
                    hidden={visibleCategory}
                    category={category}
                    value={values.category}
                    onBlur={handleChange}
                    handleChange={handleChangeCategory}

                    /* error={touched.category && Boolean(errors.category)}
              helperText={touched.category && errors.category} */
                  />
                </Box>
              )}

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

                <Box className={styles.data}>
                  <DatePicker
                    id="select"
                    className={styles.Date}
                    selected={startDate}
                    onChange={handleDate}
                    dateFormat="dd.MM.yyyy"
                  />
                  {errors.data && touched.data && (
                    <div className={styles.inputFeedback}>{errors.data}</div>
                  )}
                </Box>
              </div>

              {errors.comment && touched.comment && (
                <div className={styles.inputFeedback}>{errors.comment}</div>
              )}

              <Box className={styles.box_select}>
                <Field
                  name="comment"
                  as="textarea"
                  type="text"
                  placeholder="Comment"
                  className={styles.Comment}
                />
              </Box>

              <Button
                //onClick={handleSubmit}
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
  );
}











/* преобразование даты в строку с помощью библиотеки момент
const initialState = {
  date: Number(moment(new Date()).format("D")),
  month: moment(new Date()).format("MMMM"),
  year: Number(moment(new Date()).format("YYYY")),
}
const handleDate = (date) => {
    setStartDate(date);
    const formatedDate = moment(date).format("DD/MMMM/yyyy");
    const dateD = moment(formatedDate).date();
    const month = moment(formatedDate).format("MMMM");
    const year = moment(formatedDate).year();
    setTransactionItem((state) => ({
      ...state,
      date: dateD,
      month: month,
      year: year,
    }));
  }; */