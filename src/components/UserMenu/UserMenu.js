import { connect } from 'react-redux';
import { getUserEmail, logOut } from '../../redux/auth';

import { button, user } from './UserMenu.module.scss';

const UserMenu = ({ avatar, email, onLogout }) => (
  <div>
    <img src={avatar} alt="" width="32" />
    <span>
      Вітаємо, <span className={user}>{email}</span>{' '}
    </span>
    <button className={button} type="button" onClick={onLogout}>
      Вийти
    </button>
  </div>
);

const mapStateToProps = state => ({
  email: getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
