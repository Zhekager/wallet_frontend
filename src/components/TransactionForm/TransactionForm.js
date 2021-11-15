import React, {useState} from 'react';
import style from './TransactionForm.module.scss'; 
import { Formik, Form, Field, } from 'formik';
import * as Yup from 'yup';
import Button from '../Button';
import Switch from './Switch';
//import Box from '@material-ui/core/Box';

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

   const onSwitchChecked = evt => {
    setSelect(evt.target.checked);
    setCategory(null);
  };
  


//
  return (
   
    <div className={style.container}>
    <div className={style.form}>
    <h3 className={style.title}>Добавить транзакцию</h3>
    
    <Formik
      initialValues={{
        typeOfTransaction: 'Расход',
        category: 'Выберите категорию',
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
            Доход
          </p> 
             
            <Switch    
            onSwitch={chooseSelect => onSwitchChecked(chooseSelect)}
            isChecked={chooseSelect}
            onClick={chooseSelect => onSwitchChecked(chooseSelect)}
          />
          <p className={style.text} style={{ color: 'rgba(255, 101, 150, 1)' }}>
            Расход
          </p>
           
         </div> 
      
            
            <Field name="category" as="select" hidden>
              <option value="">Выберите категорию</option>
              <option value="Основной">Основной</option>
              <option value="Еда">Еда</option>
              <option value="Авто">Авто</option>
              <option value="Развитие">Развитие</option>
              <option value="Дети">Дети</option>
              <option value="Дом">Дом</option>
              <option value="Образование">Образование</option>
              <option value="Остальное">Остальное</option>
            </Field>
            {errors.category && touched.category &&
        <span className="input-feedback">
          {errors.category}
        </span>}

            <Field name="amount"
            type="number"
            placeholder="0.00" />
            {errors.amount &&
        touched.amount &&
        <span className="input-feedback">
          {errors.amount}
        </span>}
            
            <Field
            name="date"
            type="date"
          />
            
            <Field name="comment" as="textarea"
            type="text"
            placeholder="Комментарий" />

          <Button disabled={isSubmitting} type="submit" contentBtn="Добавить" />
          <Button type="submit" contentBtn="Отмена" />

          {/* {isLoading && <LoaderSpinner />} */}
        </Form>
      )}
      </Formik>
    
      </div>
    </div>
    
  );
}


