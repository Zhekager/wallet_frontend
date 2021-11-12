import LoginForm from '../../components/LoginForm';
import PageHeading from '../../components/PageHeading';
import AuthHeading from '../../components/AuthHeading';
import AuthNav from '../../components/AuthNav';

import styles from './LoginPage.module.scss';

export default function LoginPage() {
  return (
    <div className={styles.LoginPage}>
      <div className={styles.ImgContent}>
        <div className={styles.Img}></div>
        <PageHeading text="Finance App" />
      </div>

      <div className={styles.LoginContent}>
        <div className={styles.LoginForm}>
          <AuthHeading text="Wallet" />

          <LoginForm />

          <AuthNav content="регистрация" path="/register" />
        </div>
      </div>
    </div>
  );
}
