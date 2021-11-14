import React, {useState} from 'react';
import style from './TransactionForm.module.scss'; 

 export const TransactionForm = () => {
  const [typeOfTransaction, setTypeOfTransiction] = useState('');
  const updateTypeOfTransiction = e => {
    setAnmount('');
    setDate(currentDate);
    setComment('');
    setTypeOfTransiction(e.target.value);
  };

  const [amount, setAnmount] = useState('');
  const updateAnmount = e => {
    setAnmount(e.target.value);
  };

  const currentDate = new Date()
    .toLocaleDateString()
    .split('.')
    .reverse()
    .join('-');
  const [date, setDate] = useState(currentDate);
  const updateDate = e => {
    setDate(e.target.value);
  };

  const [comment, setComment] = useState('');
  const updateComment = e => {
    setComment(e.target.value);
  };

  const [category, setCategory] = useState('');
  const updateCategory = e => {
    setCategory(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      typeOfTransaction,
      amount,
      date,
      comment,
    };
    console.log(formData);
  };

  return ( 
    /* <div className={style.modal}> */
       <div className={style.container}>  
        
        {/* <div className={style.box}>  */}
           <form className={style.form} onSubmit={handleSubmit}>
            <h1 className={style.title}>Добавить транзакцию</h1>
            <div className={style.formBox}>
              <div className={style.toggleradio} > 
               <label className={style.labelBox}>
                Доход  
                  <input
                  className={style.perekl}
                  type="radio"
                  value="income"
                  id='Доход'
                  name="typeOfTransiction"
                  checked={typeOfTransaction === 'income'}
                  onChange={updateTypeOfTransiction}
                  required
                /> 
                
            </label> 
               <label className={style.labelBox}> 
                  <input
                    className={style.perekl}
                  type="radio"
                  value="cost"
                  id='Расход'
                  name="typeOfTransiction"
                  checked={typeOfTransaction === 'cost'}
                  onChange={updateTypeOfTransiction}
                  
                  
                /> 
                Расход
                </label>

              </div>
              {typeOfTransaction === 'cost' && (
                <label className={style.categoryBox}>
                  <select
                    className={style.inputCategory}
                    value={category}
                    onChange={updateCategory}
                    required
                  >
                    <option hidden="">Выберите категорию</option>
                    <option value="Основной">Основной</option>
                    <option value="Еда">Еда</option>
                    <option value="Авто">Авто</option>
                    <option value="Развитие">Развитие</option>
                    <option value="Дети">Дети</option>
                    <option value="Дом">Дом</option>
                    <option value="Образование">Образование</option>
                    <option value="Остальное">Остальное</option>
                  </select>
                </label>
              )}
              <input
                className={style.inputNumber}
                type="number"
                placeholder="0.00"
                name="amount"
                value={amount}
                onChange={updateAnmount}
                required
              />
              <input
                className={style.inputDate}
                type="date"
                name="date"
                value={date}
                onChange={updateDate}
                required
              />
              <label>
            <textarea
                  placeholder='Комментарий'
                  className={style.textarea}
                  type="text"
                  name="comment"
                  value={comment}
                  onChange={updateComment}
                  required
                >
                  
                </textarea>
              </label>
             </div> 
            <div className={style.btnBox}>
              <button className={style.button} type="submit">
                Добавить
              </button>
          
              <button className={style.button2} type="submit">
                Отмена
              </button>
          
            </div>
          </form>
        </div> 
      /* </div>
      </div>  */
    );
 }


