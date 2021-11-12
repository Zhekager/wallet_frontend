import RegistrationForm from '../../components/RegistrationForm';

import PageHeading from '../../components/PageHeading';
import AuthHeading from '../../components/AuthHeading';

import AuthNav from '../../components/AuthNav';

import styles from './RegistrationPage.module.scss';

export default function RegistrationPage() {
  return (
    <div className={styles.RegistrationPage}>
      <div className={styles.ImgContent}>
        <div className={styles.Img}></div>
        <PageHeading text="Finance App" />
      </div>

      <div className={styles.SignupContent}>
        <div className={styles.SignupForm}>
          <AuthHeading text="Wallet" />

          <RegistrationForm />

          <AuthNav content="вход" path="/login" />
        </div>
      </div>
    </div>
  );
}
