import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import Box from '@material-ui/core/Box';
import DatePicker from 'react-datepicker';
import { addMonths } from 'date-fns';

//redux
import { useDispatch } from 'react-redux'; //видалив  useSelector,

//components
// import categorySelectors from '../../redux/categories/categories-selectors';
import transactionOperations from '../../redux/transactions/transaction-operations';
import Button from '../Button';
import Switch from './Switch';
import SelectCategory from './SelectCategory';

import { Calendar } from '../IconBtn/Calendar';

import {
  categories,
  addIncomes,
} from '../../assets/data/select-data/selectData';

//styles
import 'react-datepicker/dist/react-datepicker.css';
import styles from './TransactionForm.module.scss';

export default function TransactionForm({ onClose }) {
  const dispatch = useDispatch();
  const [chooseType, setChooseType] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [type, setType] = useState('-');

  // const categories = useSelector(categorySelectors.getAllCategories);
  // console.log(categories);

  const handleChangeType = () => {
    setChooseType(!chooseType);

    setType('+');
  };

  const handleChangeDate = e => {
    setIsOpenDate(!isOpenDate);
    setStartDate(e);
  };

  const handleClickDate = e => {
    e.preventDefault();
    setIsOpenDate(!isOpenDate);
  };

  const dateMoment = moment(new Date()).format('DD.MM.YYYY');

  const handleClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleSubmitForm = (
    { type, category, money, date, comment },
    { resetForm },
  ) => {
    console.log({ type, category, money, date, comment });

    const currentCategoryCosts = categories.find(category => {
      return category === category._id;
    });

    const currentCategoryIncomes = addIncomes.find(category => {
      return category === category._id;
    });

    dispatch(
      transactionOperations.addTransactions({
        type,
        category: type === '-' ? currentCategoryCosts : currentCategoryIncomes,
        money,
        date,
        comment,
      }),
    );
    resetForm();
    onClose();
  };

  const validationsSchema = Yup.object().shape({
    type: Yup.string().required('Type is required'),
    category: Yup.string('Choose a category').required('Category is required'),
    money: Yup.number('Enter your amount')
      .min(0)
      .required('Amount is required'),
    date: Yup.string(),
    comment: Yup.string('Enter your comment').max(
      12,
      'No more than 20 characters',
    ),
  });

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <Formik
          initialValues={{
            type: !chooseType ? '-' : '+',
            category: '',
            money: '',
            date: dateMoment,
            comment: '',
          }}
          onSubmit={handleSubmitForm}
          validationSchema={validationsSchema}
          enableReinitialize
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <h3 className={styles.title}>Add transaction</h3>

              <Switch
                isChecked={chooseType}
                onSwitch={handleChangeType}
                value="type"
              />

              {chooseType ? (
                <Box className={styles.categoryBox}>
                  <SelectCategory label="category" name="category">
                    <option className={styles.optionSelect} value="">
                      Choose category
                    </option>

                    {addIncomes.map(category => (
                      <option
                        className={styles.optionChoose}
                        key={category._id}
                        value={category.name}
                      >
                        {category.name}
                      </option>
                    ))}
                  </SelectCategory>
                </Box>
              ) : (
                <Box className={styles.categoryBox}>
                  <SelectCategory label="category" name="category">
                    <option className={styles.optionSelect} value="">
                      Choose category
                    </option>

                    {categories.map(category => (
                      <option
                        className={styles.optionChoose}
                        key={category._id}
                        value={category.name}
                      >
                        {category.name}
                      </option>
                    ))}
                  </SelectCategory>
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

                <Box className={styles.DateBox}>
                  <DatePicker
                    maxDate={addMonths(new Date(), 0)}
                    showDisabledMonthNavigation
                    name="date"
                    open={false}
                    className={styles.Date}
                    selected={startDate}
                    onChange={handleChangeDate}
                    dateFormat="dd.MM.yyyy"
                  />

                  <button
                    className={styles.BtnIconCalendar}
                    onClick={handleClickDate}
                  >
                    <Calendar svg={styles.svgCalendar} />
                  </button>

                  {isOpenDate && (
                    <div className={styles.datePicker}>
                      <DatePicker
                        maxDate={addMonths(new Date(), 0)}
                        showDisabledMonthNavigation
                        closeOnScroll={true}
                        selected={startDate}
                        onChange={handleChangeDate}
                        inline
                      />
                    </div>
                  )}
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
