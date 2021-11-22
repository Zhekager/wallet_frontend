import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

//redux
import { useSelector, useDispatch } from 'react-redux';
//import '../../redux/transactions';
//import { fetchTransactions } from '../../redux/transactions/transaction-operations';
//import { fetchTransRequest// } from '../../redux/transactions/transaction-actions';

//components
import { getAllCategories } from '../../redux/categories/categories-selectors';
import transactionOperations from '../../redux/transactions/transaction-operations';
import Button from '../Button';
import Switch from './Switch';
import SelectCategory from './SelectCategory';
import Box from '@material-ui/core/Box';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { costs } from '../../assets/data/select-data/selectData';

//styles
import 'react-datepicker/dist/react-datepicker.css';
import styles from './TransactionForm.module.scss';
import './TransactionFormDatepicker.scss';

export default function TransactionForm({ onClose }) {
  const dispatch = useDispatch();
  const [chooseSelect, setChooseSelect] = useState(false);
  const [visibleCategory, setVisibleCategory] = useState(false);
  // const [category, setCategory] = useState('Choose category');
  const [type, setType] = useState('Сosts');
  const [startDate, setStartDate] = useState(new Date());

  const categories = useSelector(getAllCategories);
  const IdCategory = categories.find(category => category.id);

  // const handleChangeCategory = event => {
  //   setCategory(event.target.value);
  // };

  const onSwitchChecked = evt => {
    setChooseSelect(evt.target.checked);
    setType('Income');
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

  const currentDate = new Date().toLocaleDateString();

  const handleClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleSubmitForm = ({ type, money, comment, category, date }) => {
    // e.preventDefault();
    console.log({ type, category: IdCategory, money, date, comment });
    dispatch(
      transactionOperations.addTransactions({
        type,
        IdCategory,
        money,
        date,
        comment,
      }),
    );
    reset();
    onClose();
  };

  const reset = () => {
    setChooseSelect(false);
    setStartDate(new Date());
  };

  const validationsSchema = Yup.object().shape({
    type: Yup.string().required('Type is required'),
    category: Yup.string('Choose category').required('Category is required'),
    money: Yup.number('Enter your amount')
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
            type: 'Costs',
            category: '',
            money: '',
            date: startDate,
            comment: '',
          }}
          onSubmit={handleSubmitForm}
          validationSchema={validationsSchema}
          enableReinitialize
        >
          {({
            errors,
            touched,
            isSubmitting,
            values,
            handleChange,
            handleSubmit,
            handleReset,
            setFieldValue,
            setFieldTouched,
          }) => (
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
                  {/* {errors.type && touched.type && (
                    <span className={styles.inputFeedback}>
                      {errors.type}
                    </span>
                  )} */}

                  <SelectCategory label="category" name="category">
                    <option className={styles.optionSelect} value="">
                      Choose category
                    </option>

                    {costs.map(cost => (
                      <option
                        className={styles.optionChoose}
                        key={cost.id}
                        value={cost.id}
                      >
                        {cost.value}
                      </option>
                    ))}
                    {/* {categories.expenses.map(category => (
                      <option
                        className={styles.optionChoose}
                        key={category.id}
                        value={category.id}
                      >
                        {category.name}
                      </option>
                    ))} */}
                  </SelectCategory>

                  {/* <SelectCategory
                    name="category"
                    costs={costs}
                    hidden={visibleCategory}
                    category={category}
                    value={values.category}
                    onBlur={handleChange}
                    handleChange={handleChangeCategory}
                  /> */}
                </Box>
              )}

              <div className={styles.Credentials}>
                <div className={styles.AmountContainer}>
                  <Field
                    name="money"
                    type="number"
                    placeholder="0.00"
                    className={styles.Amount}
                  />
                  {errors.money && touched.money && (
                    <div className={styles.inputFeedback}>{errors.money}</div>
                  )}
                </div>

                <Box className={styles.date}>
                  <DatePicker
                    id="select"
                    className={styles.Date}
                    selected={startDate}
                    onChange={handleDate}
                    dateFormat="dd.MM.yyyy"
                  />
                </Box>
              </div>

              <Box className={styles.box_select}>
                <Field
                  name="comment"
                  as="textarea"
                  type="text"
                  placeholder="Comment"
                  className={styles.Comment}
                />
                {errors.comment && touched.comment && (
                  <div className={styles.inputFeedback}>{errors.comment}</div>
                )}
              </Box>

              <Button type="submit" contentBtn="Add" button="Button" />

              <Button
                handleClick={handleClick}
                contentBtn="Cancel"
                button="ButtonSecondary"
              />

              {/* {isLoading && <Spinner />} */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
