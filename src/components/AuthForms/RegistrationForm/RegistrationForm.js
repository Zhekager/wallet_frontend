import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import authOperations from '../../../redux/auth/auth-operations';
import authSelectors from '../../../redux/auth/auth-selectors';
import { Formik, Form } from 'formik';
import PasswordStrenghtMeter from './PasswordStrenghtMeter';
import TextFieldForm from '../TextFieldForm';
import * as Yup from 'yup';
import Spinner from '../../Spinner';

import Button from '../../Button';
import { ReactComponent as IconEmail } from '../../icons/email.svg';
import { ReactComponent as IconLock } from '../../icons/lock.svg';
import { ReactComponent as IconName } from '../../icons/user.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './RegistrationForm.module.scss';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [password, setPassword] = useState('');
  const isLoading = useSelector(authSelectors.getLoading);

  const validationsSchema = Yup.object({
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required!'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .max(12, 'Password should be of maximum 12 characters length')
      .required('Password is required!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords are not the same')
      .required('Password confirmation is required!'),
    name: Yup.string()
      .typeError()
      .min(1, 'Name should be of minimum 1 character length')
      .max(12, 'Name should be of maximum 12 characters length')
      .required('Name is required!'),
  });

  const handleSubmit = ({ email, password, name }) => {
    // e.preventDefault();
    dispatch(
      authOperations.register({
        email,
        password,
        name,
      }),
    );

    history.push('/login');
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
      }}
      validateOnBlur
      onSubmit={handleSubmit}
      validationSchema={validationsSchema}
    >
      {({ handleChange, handleBlur, values, isValid, dirty }) => (
        <Form className={styles.Form}>
          <TextFieldForm
            label={<IconEmail width={24} height={24} />}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
            type="email"
            placeholder="E-mail"
            className={styles.Field}
            id="email"
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
            id="password"
            onInput={e => setPassword(e.target.value)}
          />
          <TextFieldForm
            label={<IconLock width={24} height={24} />}
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            placeholder="Confirm password"
            className={styles.Field}
          />

          <PasswordStrenghtMeter password={password} />

          <TextFieldForm
            label={<IconName width={24} height={24} />}
            name="name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder="Your name"
            className={styles.Field}
            id="name"
          />

          <Button
            type="submit"
            contentBtn="Sign up"
            button="Button"
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
          />

          {isLoading && <Spinner />}
        </Form>
      )}
    </Formik>
  );
}
