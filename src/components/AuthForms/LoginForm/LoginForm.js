import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { authOperations, authSelectors } from '../../../redux/auth';
import authOperations from '../../../redux/auth/auth-operations';
import authSelectors from '../../../redux/auth/auth-selectors';
import { Formik, Form } from 'formik';
import TextFieldForm from '../TextFieldForm';
import * as Yup from 'yup';

import Button from '../../Button';
import Spinner from '../../Spinner';
import { ReactComponent as IconEmail } from '../../icons/email.svg';
import { ReactComponent as IconLock } from '../../icons/lock.svg';

import styles from './LoginForm.module.scss';

export default function LoginForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);

  const validationsSchema = Yup.object().shape({
    email: Yup.string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup.string('Enter your password')
      .min(6, 'Password should be of minimum 6 characters length')
      .max(12, 'Password should be of maximum 12 characters length')
      .required('Password is required'),
  });

  const handleSubmit = ({ email, password }) => {
    // e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validateOnBlur
      onSubmit={handleSubmit}
      validationSchema={validationsSchema}
    >
      {({ handleChange, handleBlur, values, isValid, dirty }) => (
        <Form className={styles.Form}>
          <TextFieldForm
            label={<IconEmail width={24} height={24} />}
            name="email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="E-mail"
            className={styles.Field}
          />
          <TextFieldForm
            label={<IconLock width={24} height={24} />}
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="Password"
            className={styles.Field}
          />

          <Button
            type="submit"
            disabled={!isValid && !dirty}
            contentBtn="Log in"
            button="Button"
          />

          {isLoading && <Spinner />}
        </Form>
      )}
    </Formik>
  );
}
