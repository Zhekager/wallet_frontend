import RegistrationForm from '../../components/RegistrationForm';

import PageHeading from '../../components/PageHeading';
import AuthHeading from '../../components/AuthHeading';
import AuthNav from '../../components/AuthNav';

import useSizeScreen from '../../hooks/useSizeScreen';
import { SignupImgPage } from '../../components/IconBtn/SignupImgPage';

import styles from './RegistrationPage.module.scss';

export default function RegistrationPage() {
  const sizeScreen = useSizeScreen();

  return (
    <div className={styles.RegistrationPage}>
      <div className={styles.ImgContent}>
        {/* <div className={styles.svgSignup}></div> */}
        {sizeScreen >= 768 && sizeScreen < 1280 && (
          <SignupImgPage svg={styles.svgSignup} />
        )}
        {sizeScreen >= 1280 && <SignupImgPage svg={styles.svgSignup} />}

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
