// import React from 'react';
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import PageHeading from '../../components/PageHeading';
import AuthHeading from '../../components/AuthHeading';
import Button from '../../components/Button';
import { ReactComponent as IconEmail } from '../../components/icons/email.svg';
import { ReactComponent as IconPassword } from '../../components/icons/password.svg';
import { ReactComponent as IconName } from '../../components/icons/name.svg';
import AuthNav from '../../components/AuthNav';
// import { ReactComponent as IconSignupPage } from '../../components/icons/signup-page.svg';
import styles from './RegistrationPage.module.scss';

export default function RegistrationPage() {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  // const isLoading = useSelector(authSelectors.getLoading);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'confirmPassword':
        return setConfirmPassword(value);
      case 'name':
        return setName(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(authOperations.register({ name, email, password }));
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
  };

  const validationsSchema = Yup.object().shape({
    email: Yup.string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup.string('Enter your password')
      .min(6, 'Password should be of minimum 6 characters length')
      .max(12, 'Password should be of maximum 12 characters length')
      .required('Password is required'),
    confirmPassword: Yup.string('Enter your password again')
      .oneOf([Yup.ref('password')], 'Passwords are not the same!')
      .required('Password confirmation is required!'),
    name: Yup.string()
      .typeError('Enter your name')
      .min(1, 'Name should be of minimum 1 character length')
      .max(12, 'Name should be of maximum 12 characters length')
      .required('Name is required'),
  });

  return (
    <div className={styles.RegistrationPage}>
      <div className={styles.ImgContent}>
        <div className={styles.Img}></div>
        <PageHeading text="Finance App" />
      </div>

      <div className={styles.SignupContent}>
        <div className={styles.SignupForm}>
          <AuthHeading text="Wallet" />
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
              name: '',
            }}
            validateOnBlur
            // onSubmit={async values => {
            //   await sleep(500);
            //   alert(JSON.stringify(values, null, 2));
            // }}
            onSubmit={handleSubmit}
            validationSchema={validationsSchema}
          >
            {({ isSubmitting }) => (
              <Form className={styles.Form}>
                <label htmlFor="email" className={styles.Label}>
                  <IconEmail width={20} height={16} />
                  <Field
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    className={styles.Field}
                  />
                </label>

                <label htmlFor="password" className={styles.Label}>
                  <IconPassword width={16} height={21} />
                  <Field
                    name="password"
                    placeholder="Пароль"
                    type="password"
                    value={password}
                    onChange={handleChange}
                    className={styles.Field}
                  />
                </label>

                <label htmlFor="confirmPassword" className={styles.Label}>
                  <IconPassword width={16} height={21} />
                  <Field
                    name="confirmPassword"
                    placeholder="Подтвердите пароль"
                    type="password"
                    value={confirmPassword}
                    onChange={handleChange}
                    className={styles.Field}
                  />
                </label>

                <label htmlFor="name" className={styles.Label}>
                  <IconName width={18} height={18} />
                  <Field
                    name="name"
                    placeholder="Ваше имя"
                    type="text"
                    value={name}
                    onChange={handleChange}
                    className={styles.Field}
                  />
                </label>

                <Button
                  type="submit"
                  // disabled={isSubmitting}
                  contentBtn="Регистрация"
                />

                {/* {isLoading && <LoaderSpinner />} */}
              </Form>
            )}
          </Formik>

          <AuthNav content="вход" path="/login" />
        </div>
      </div>
    </div>
  );
}
