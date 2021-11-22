import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import { Home } from '../IconBtn/Home';
import { Statistic } from '../IconBtn/Statistic';
import { Currenc } from '../IconBtn/Currenc';
import routes from '../../routes';
import Spinner from '../Spinner';

import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <div>
      <nav className={styles.navigation}>
        <NavLink
          exact
          to={routes.dashboard}
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          <div className={styles.boxNav}>
            <Home svg={styles.svgNav} />
            <span className={styles.textNav}>Home</span>
          </div>
        </NavLink>
        <NavLink
          to={routes.statistics}
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          <div className={styles.boxNav}>
            <Statistic svg={styles.svgNav} />
            <span className={styles.textNav}>Statistics</span>
          </div>
        </NavLink>
        <Media
          queries={{
            mobile: '(max-width: 767px)',
          }}
        >
          {({ mobile }) => (
            <>
              {mobile && (
                <NavLink
                  to={routes.currency}
                  className={styles.navLink}
                  activeClassName={styles.navLinkActive}
                >
                  <Currenc svg={styles.svgNav} />
                </NavLink>
              )}
            </>
          )}
        </Media>
      </nav>
    </div>
  );
}

export default Navigation;
