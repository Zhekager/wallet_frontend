// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { authOperations, authSelectors } from 'redux/auth';
import { Formik, Form } from 'formik';
import TextFieldForm from '../TextFieldForm';
import * as Yup from 'yup';

import Button from '../Button';
import { ReactComponent as IconEmail } from '../icons/email.svg';
import { ReactComponent as IconLock } from '../icons/lock.svg';
import { ReactComponent as IconName } from '../icons/user.svg';

import styles from './RegistrationForm.module.scss';

export default function RegistrationForm() {
  //   const dispatch = useDispatch();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [name, setName] = useState('');
  //   const isLoading = useSelector(authSelectors.getLoading);

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

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(
    //   authOperations.register({ email, password, confirmPassword, name }),
    // );
    // setEmail('');
    // setPassword('');
    // setConfirmPassword('');
    // setName('');
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationsSchema}
    >
      {formik => (
        <Form className={styles.Form}>
          <TextFieldForm
            label={<IconEmail width={24} height={24} />}
            name="email"
            type="email"
            placeholder="E-mail"
            className={styles.Field}
          />
          <TextFieldForm
            label={<IconLock width={24} height={24} />}
            name="password"
            type="password"
            placeholder="Пароль"
            className={styles.Field}
          />
          <TextFieldForm
            label={<IconLock width={24} height={24} />}
            name="confirmPassword"
            type="password"
            placeholder="Подтвердите пароль"
            className={styles.Field}
          />
          <TextFieldForm
            label={<IconName width={24} height={24} />}
            name="name"
            type="text"
            placeholder="Ваше имя"
            className={styles.Field}
          />

          <Button type="submit" contentBtn="Регистрация" />

          {/* {isLoading && <LoaderSpinner />} */}
        </Form>
      )}
    </Formik>
  );
}

// import { useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { authOperations, authSelectors } from 'redux/auth';
// import { Formik, Field, Form, useField, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// import Button from '../Button';
// import { ReactComponent as IconEmail } from '../icons/email.svg';
// import { ReactComponent as IconLock } from '../icons/lock.svg';
// import { ReactComponent as IconName } from '../icons/user.svg';

// import styles from './RegistrationForm.module.scss';

// export default function RegistrationForm() {
//   //   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [name, setName] = useState('');
//   //   const isLoading = useSelector(authSelectors.getLoading);

//   const validationsSchema = Yup.object().shape({
//     email: Yup.string('Enter your email')
//       .email('Enter a valid email')
//       .required('Email is required'),
//     password: Yup.string('Enter your password')
//       .min(6, 'Password should be of minimum 6 characters length')
//       .max(12, 'Password should be of maximum 12 characters length')
//       .required('Password is required'),
//     confirmPassword: Yup.string('Enter your password again')
//       .oneOf([Yup.ref('password')], 'Passwords are not the same!')
//       .required('Password confirmation is required!'),
//     name: Yup.string()
//       .typeError('Enter your name')
//       .min(1, 'Name should be of minimum 1 character length')
//       .max(12, 'Name should be of maximum 12 characters length')
//       .required('Name is required'),
//   });

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);
//       case 'confirmPassword':
//         return setConfirmPassword(value);
//       case 'name':
//         return setName(value);
//       default:
//         return;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     // dispatch(
//     //   authOperations.register({ email, password, confirmPassword, name }),
//     // );
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//     setName('');
//   };

//   return (
//     <Formik
//       initialValues={{
//         email: '',
//         password: '',
//         confirmPassword: '',
//         name: '',
//       }}
//       // validateOnBlur
//       onSubmit={handleSubmit}
//       validationSchema={validationsSchema}
//     >
//       {formik => (
//         <Form className={styles.Form}>
//           <label htmlFor="email" className={styles.Label}>
//             <IconEmail width={24} height={24} />
//             <Field
//               name="email"
//               placeholder="E-mail"
//               type="email"
//               value={email}
//               onChange={handleChange}
//               className={styles.Field}
//             />
//           </label>
//           <ErrorMessage component="div" name={name} className="error" />

//           <label htmlFor="password" className={styles.Label}>
//             <IconLock width={24} height={24} />
//             <Field
//               name="password"
//               placeholder="Пароль"
//               type="password"
//               value={password}
//               onChange={handleChange}
//               className={styles.Field}
//             />
//           </label>

//           <label htmlFor="confirmPassword" className={styles.Label}>
//             <IconLock width={24} height={24} />
//             <Field
//               name="confirmPassword"
//               placeholder="Подтвердите пароль"
//               type="password"
//               value={confirmPassword}
//               onChange={handleChange}
//               className={styles.Field}
//             />
//           </label>

//           <label htmlFor="name" className={styles.Label}>
//             <IconName width={24} height={24} />
//             <Field
//               name="name"
//               placeholder="Ваше имя"
//               type="text"
//               value={name}
//               onChange={handleChange}
//               className={styles.Field}
//             />
//           </label>

//           <Button
//             type="submit"
//             // disabled={isSubmitting}
//             contentBtn="Регистрация"
//           />

//           {/* {isLoading && <LoaderSpinner />} */}
//         </Form>
//       )}
//     </Formik>
//   );
// }
