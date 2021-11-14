import React from 'react';
import { ErrorMessage, useField } from 'formik';

import styles from './TextFieldForm.module.scss';

const TextFieldForm = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div>
      <ErrorMessage
        component="div"
        name={field.name}
        style={{ color: '#FF6596' }}
      />
      <label htmlFor={field.name} className={styles.Label}>
        {label}
        <input {...field} {...props} autoComplete="off" />
      </label>
    </div>
  );
};

export default TextFieldForm;
