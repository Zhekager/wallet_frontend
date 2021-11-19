import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { authOperations, authSelectors } from 'redux/auth';
import { authOperations } from '../../../redux/auth';
import { authSelectors } from '../../../redux/auth';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const handleSubmit = e => {
    // e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
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

// import { useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { authOperations, authSelectors } from 'redux/auth';
// import { Formik, Field, Form } from 'formik';
// import * as Yup from 'yup';

// import Button from '../Button';
// import { ReactComponent as IconEmail } from '../icons/email.svg';
// import { ReactComponent as IconLock } from '../icons/lock.svg';

// import styles from './LoginForm.module.scss';

// export default function LoginForm() {
//   // const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const isLoading = useSelector(authSelectors.getLoading);

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);
//       default:
//         return;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     // dispatch(authOperations.logIn({ email, password }));
//     setEmail('');
//     setPassword('');
//   };

//   const validationsSchema = Yup.object().shape({
//     email: Yup.string('Enter your email')
//       .email('Enter a valid email')
//       .required('Email is required'),
//     password: Yup.string('Enter your password')
//       .min(6, 'Password should be of minimum 6 characters length')
//       .max(12, 'Password should be of maximum 12 characters length')
//       .required('Password is required'),
//   });

//   return (
//     <Formik
//       initialValues={{
//         email: '',
//         password: '',
//       }}
//       validateOnBlur
//       // onSubmit={async values => {
//       //   await sleep(500);
//       //   alert(JSON.stringify(values, null, 2));
//       // }}
//       onSubmit={handleSubmit}
//       validationSchema={validationsSchema}
//     >
//       {({ isSubmitting }) => (
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

//           <Button
//             type="submit"
//             // disabled={isSubmitting}
//             contentBtn="вход"
//           />

//           {/* {isLoading && <LoaderSpinner />} */}
//         </Form>
//       )}
//     </Formik>
//   );
// }
