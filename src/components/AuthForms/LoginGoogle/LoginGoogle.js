import { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { Google } from '../../IconBtn/Google';

import styles from './LoginGoogle.module.scss';

// const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LoginGoogle = () => {
  const [isLogined, setIsLogined] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  const login = response => {
    if (response.accessToken) {
      setIsLogined(true);
      setAccessToken(response.accessToken);
    }
  };

  const logout = response => {
    setIsLogined(false);
    setAccessToken('');
  };

  const handleLoginFailure = response => {
    alert('Failed to log in');
  };

  const handleLogoutFailure = response => {
    alert('Failed to log out');
  };

  return (
    <div>
      {isLogined ? (
        <GoogleLogout
          // clientId={CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={logout}
          onFailure={handleLogoutFailure}
        ></GoogleLogout>
      ) : (
        <GoogleLogin
          // clientId={CLIENT_ID}
          // clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          render={({ onClick, disabled }) => (
            <button
              className={styles.BtnGoogle}
              onClick={onClick}
              disabled={disabled}
            >
              <Google svg={styles.svgGoogle} />
              Log in with Google
            </button>
          )}
          buttonText="Log in with Google"
          onSuccess={login}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
          responseType="code,token"
        />
      )}
      {accessToken ? (
        <h5>
          Your Access Token: <br />
          <br /> {accessToken}
        </h5>
      ) : null}
    </div>
  );
};

export default LoginGoogle;
