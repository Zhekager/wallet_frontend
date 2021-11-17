import React, { useState } from 'react';
import Select from "react-select";
import style from './TransactionForm.module.scss'; 
import { Formik, Form, Field, } from 'formik';

import * as Yup from 'yup';

import SelectCategoryItem from './SelectCategoryItem';
import Button from '../Button';
import Switch from './Switch';

import { costs } from '../../assets/data/select-data/selectData';

import styles from './TransactionForm.module.scss';


import DatePicker from "react-datepicker";
import moment from "moment";

//import Box from '@material-ui/core/Box';
import "react-datepicker/dist/react-datepicker.css";
import AddTransaction from '../AddTransactionsButton/AddTransaction';
//redux
//import { useDispatch } from 'react-redux';
//import fetchTransactions from '../../redux/transactions/transaction-operations';

export default function TransactionForm() {
  const [chooseSelect, setChooseSelect] = useState(false);
  const [visibleCategory, setVisibleCategory] = useState(false);
  const [typeOfTransaction, setTypeOfTransaction] = useState('Сosts');

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


  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h3 className={styles.title}>Add transaction</h3>

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
            <Form className={styles.Form}>
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
                {/* <option value="">Выберите категорию</option>
                <option value="Основной">Основной</option>
                <option value="Еда">Еда</option>
                <option value="Авто">Авто</option>
                <option value="Развитие">Развитие</option>
                <option value="Дети">Дети</option>
                <option value="Дом">Дом</option>
                <option value="Образование">Образование</option>
                <option value="Остальное">Остальное</option> */}
              </Field>
              {errors.category && touched.category && (
                <div className={styles.inputFeedback}>{errors.category}</div>
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
                <Field name="date" type="date" className={styles.Date} />
              </div>

              <Field
                name="comment"
                as="textarea"
                type="text"
                placeholder="Comment"
                className={styles.Comment}
              />

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

              
           
//        <div className={style.box}>  
//            <p className={style.text} style={{ color: 'rgba(36, 204, 167, 1)' }}>
//             Income
//           </p> 
             
//             <Switch    
//             onSwitch={chooseSelect => onSwitchChecked(chooseSelect)}
//             isChecked={chooseSelect}
//             onClick={chooseSelect => onSwitchChecked(chooseSelect)}
//           />
//           <p className={style.text} style={{ color: 'rgba(255, 101, 150, 1)' }}>
//             Cost
//           </p>
           
//          </div> 
      
            
//             {/* <Field name="category" as="select" hidden>
//               <option value="">Choose category</option>
//               <option value="Основной">Основной</option>
//               <option value="Еда">Еда</option>
//               <option value="Авто">Авто</option>
//               <option value="Развитие">Развитие</option>
//               <option value="Дети">Дети</option>
//               <option value="Дом">Дом</option>
//               <option value="Образование">Образование</option>
//               <option value="Остальное">Остальное</option>
//             </Field> */}
              
// <div className={style.select}>
//               <Select
//                  className="select"
//                 classNamePrefix="selectprefix"
//                 isIncome={!chooseSelect}
//                 category={category}
//                 placeholder="Choose category"
//                 isSearchable={true}
//                 name="category"
//                 value={category}
//                 onChange={handleSelect}
//               />
// </div>

//             {errors.category && touched.category &&
//         <span className="input-feedback">
//           {errors.category}
//         </span>}
// <div className={style.datebform}>
//       <Field
//             className={style.inputNumber}
//             name="amount"
//             type="number"
//             placeholder="0.00"
//             //value={amount}
//             //onChange={updateAnmount}
//              />
//         {errors.amount &&
//         touched.amount &&
//         <span className="input-feedback">
//           {errors.amount}
//         </span>}
            
//          {/*    <Field
//             name="date"
//             type="date"
//           /> */}
              
//               <DatePicker
//               id="select"
//               className={style.calendar}
//               selected={startDate}
//               onChange={handleDate}
//               dateFormat="dd.MM.yyyy"
//             />
//    </div>         
//               <Field
//                 className={style.textarea}
//                 name="comment" as="textarea"
//             type="text"
//             placeholder="Comment" />

//         <Button  disabled={isSubmitting} type="submit" contentBtn="Add" />
//         {/* <Button className={style.btn2}  type="submit" contentBtn="Cancel" /> */}
// <button className={style.btn2} >
//             Cancel
//           </button>
//           {/* {isLoading && <LoaderSpinner />} */}
//         </Form>
//       )}
//       </Formik>
    

      </div>
      
    </div>
  );
}
