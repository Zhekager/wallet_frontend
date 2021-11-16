import LoginForm from '../../components/LoginForm';
import AuthHeading from '../../components/AuthHeading';
import AuthNav from '../../components/AuthNav';
import LoginGoogle from '../../components/LoginGoogle';
import BgPageContainer from '../../components/BgPageContainer';
import ImgContentContainer from '../../components/ImgContentContainer';
import AuthContentContainer from '../../components/AuthContentContainer';

import useSizeScreen from '../../hooks/useSizeScreen';
import { LoginImgPage } from '../../components/IconBtn/LoginImgPage';

import styles from './LoginPage.module.scss';

export default function LoginPage() {
  const sizeScreen = useSizeScreen();

  return (
    <BgPageContainer bgContainer="BgPageContainer">
      <ImgContentContainer>
        {sizeScreen >= 768 && sizeScreen < 1280 && (
          <LoginImgPage svg={styles.svgLoginImg} />
        )}
        {sizeScreen >= 1280 && <LoginImgPage svg={styles.svgLoginImg} />}
      </ImgContentContainer>

      <AuthContentContainer authContainer="LoginContainer">
        <AuthContentContainer authContainer="LoginFormContainer">
          <AuthHeading text="Wallet" />
          <LoginForm />
          <LoginGoogle />
          <AuthNav content="регистрация" path="/register" />
        </AuthContentContainer>
      </AuthContentContainer>
    </BgPageContainer>
  );
}
