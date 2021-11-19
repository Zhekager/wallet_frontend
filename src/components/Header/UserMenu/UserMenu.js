// import { connect } from 'react-redux';
// import { getUserEmail, logOut } from '../../redux/auth';

// import { button, user } from './UserMenu.module.scss';

// const UserMenu = ({ email, onLogout }) => (
//   <div>
//     <span>
//       Вітаємо, <span className={user}>{email}</span>{' '}
//     </span>
//     <button className={button} type="button" onClick={onLogout}>
//       Вийти
//     </button>
//   </div>
// );

// const mapStateToProps = state => ({
//   email: getUserEmail(state),
// });

// const mapDispatchToProps = {
//   onLogout: logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

/////////////////////////

// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
import ButtonIcon from '../../ModalAddTransaction/ButtonIcon';
import { Logout } from '../../IconBtn/Logout';
import useSizeScreen from '../../../hooks/useSizeScreen';

import Avatar from '@material-ui/core/Avatar';
import { styled } from '@material-ui/core/styles';

import styles from './UserMenu.module.scss';

const MyAvatar = styled(Avatar)({
  background: '#24CCA7',
  color: '#ffffff',
  width: 30,
  height: 30,
  borderRadius: '50%',
  // marginRight: 10,
  fontSize: 16,
  border: 0,
  boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.15)',
});

export default function UserMenu({ onClick }) {
  const sizeScreen = useSizeScreen();
  // const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);

  return (
    <div className={styles.UserMenu}>
      {sizeScreen <= 767 ? (
        <div className={styles.UserName}>
          {/* <MyAvatar>{name[0]}</MyAvatar> */}
          <MyAvatar>N</MyAvatar>
        </div>
      ) : (
        <div className={styles.UserName}>
          {/* <MyAvatar>{name[0]}</MyAvatar>
          <span className={styles.Name}>{name}</span> */}

          <MyAvatar>N</MyAvatar>
          <span className={styles.Name}>Maryna Skrypnyk</span>
        </div>
      )}

      <ButtonIcon
        onClick={onClick}
        aria-label="Open modal"
        btnClass="btnLogout"
      >
        {sizeScreen <= 767 ? (
          <div className={styles.boxLogout}>
            <Logout svg={styles.svgLogout} />
          </div>
        ) : (
          <div className={styles.boxLogout}>
            <Logout svg={styles.svgLogout} />
            <span className={styles.textNav}>Log out</span>
          </div>
        )}
      </ButtonIcon>
    </div>
  );
}
