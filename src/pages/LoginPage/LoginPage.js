import LoginForm from '../../components/LoginForm';
import PageHeading from '../../components/PageHeading';
import AuthHeading from '../../components/AuthHeading';
import AuthNav from '../../components/AuthNav';

import useSizeScreen from '../../hooks/useSizeScreen';
import { LoginImgPage } from '../../components/IconBtn/LoginImgPage';

import styles from './LoginPage.module.scss';

export default function LoginPage() {
  const sizeScreen = useSizeScreen();

  return (
    <div className={styles.LoginPage}>
      <div className={styles.ImgContent}>
        {/* <div className={styles.svgLoginImg}></div> */}
        {sizeScreen >= 768 && sizeScreen < 1280 && (
          <LoginImgPage svg={styles.svgLoginImg} />
        )}
        {sizeScreen >= 1280 && <LoginImgPage svg={styles.svgLoginImg} />}

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
