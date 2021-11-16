import React, { useState } from 'react';
import Select from "react-select";
import style from './TransactionForm.module.scss'; 
import { Formik, Form, Field, } from 'formik';
import * as Yup from 'yup';
import Button from '../Button';
import Switch from './Switch';
import DatePicker from "react-datepicker";
import moment from "moment";
//import Box from '@material-ui/core/Box';
import "react-datepicker/dist/react-datepicker.css";
import AddTransaction from '../AddTransactionsButton/AddTransaction';
//redux
//import { useDispatch } from 'react-redux';
//import fetchTransactions from '../../redux/transactions/transaction-operations';

export default function TransactionForm() {
  

  const validationsSchema = Yup.object().shape({
    typeOfTransaction: Yup.string().required('Type is required'),
    category: Yup.string(),
    amount: Yup.number().min(0).required('Amount is required'),
    date: Yup.date().required('Date is required'),
    comment: Yup.string()
  });




  const [chooseSelect, setSelect] = useState(false);
  const [category, setCategory] = useState();
  const [startDate, setStartDate] = useState(new Date());

   const onSwitchChecked = evt => {
    setSelect(evt.target.checked);
    setCategory(null);
  };
  //

  const handleSelect = evt => {
    setCategory(evt.target.value);
  };

 const handleDate = (date) => {
    setStartDate(date);
    const formatedDate = moment(date).format("DD/MMMM/yyyy");
    const dateD = moment(formatedDate).date();
    const month = moment(formatedDate).format("MMMM");
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
        typeOfTransaction: 'Cost',
        category: 'Choose category',
        amount: '',
        date: '',
        comment: ''
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
           <p className={style.text} style={{ color: 'rgba(36, 204, 167, 1)' }}>
            Income
          </p> 
             
            <Switch    
            onSwitch={chooseSelect => onSwitchChecked(chooseSelect)}
            isChecked={chooseSelect}
            onClick={chooseSelect => onSwitchChecked(chooseSelect)}
          />
          <p className={style.text} style={{ color: 'rgba(255, 101, 150, 1)' }}>
            Cost
          </p>
           
         </div> 
      
            
            {/* <Field name="category" as="select" hidden>
              <option value="">Choose category</option>
              <option value="Основной">Основной</option>
              <option value="Еда">Еда</option>
              <option value="Авто">Авто</option>
              <option value="Развитие">Развитие</option>
              <option value="Дети">Дети</option>
              <option value="Дом">Дом</option>
              <option value="Образование">Образование</option>
              <option value="Остальное">Остальное</option>
            </Field> */}
              
<div className={style.select}>
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
</div>

            {errors.category && touched.category &&
        <span className="input-feedback">
          {errors.category}
        </span>}
<div className={style.datebform}>
      <Field
            className={style.inputNumber}
            name="amount"
            type="number"
            placeholder="0.00"
            //value={amount}
            //onChange={updateAnmount}
             />
        {errors.amount &&
        touched.amount &&
        <span className="input-feedback">
          {errors.amount}
        </span>}
            
         {/*    <Field
            name="date"
            type="date"
          /> */}
              
              <DatePicker
              id="select"
              className={style.calendar}
              selected={startDate}
              onChange={handleDate}
              dateFormat="dd.MM.yyyy"
            />
   </div>         
              <Field
                className={style.textarea}
                name="comment" as="textarea"
            type="text"
            placeholder="Comment" />

        <Button  disabled={isSubmitting} type="submit" contentBtn="Add" />
        {/* <Button className={style.btn2}  type="submit" contentBtn="Cancel" /> */}
<button className={style.btn2} >
            Cancel
          </button>
          {/* {isLoading && <LoaderSpinner />} */}
        </Form>
      )}
      </Formik>
    
      </div>
      
    </div>
    
  );
}


