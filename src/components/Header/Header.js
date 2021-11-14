import React, { useCallback } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';
import s from './Header.scss';
import authSelectors from '../../redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
  const user = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);
  return (
    <>
      <header className={s.header}>
        <div className={s.header__box}>
          <a href="/" className={s.logo}>
            <p>Wallet</p>
          </a>
          <div className={s.user}>
            <a href="/user" className={s.user__info}>
              {<img src={user.avatar} alt="avatar" className={s.avatar} /> || (
                <AccountCircleIcon color="secondary" />
              )}
              <p>{user.name}</p>
            </a>
            <IconButton
              type="button"
              onClick={onLogout}
              color="secondary"
              variant="contained"
            >
              <ExitToAppIcon />
            </IconButton>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
