import { lazy, Suspense } from 'react';
import {
  NavLink,
  useRouteMatch,
  Route,
  useLocation,
  Switch,
} from 'react-router-dom';
import useSizeScreen from '../../hooks/useSizeScreen';
import { Home } from '../IconBtn/Home';
import { Statistic } from '../IconBtn/Statistic';
import { Currenc } from '../IconBtn/Currenc';
import Spinner from '../Spinner';
// import Currency from '../Sidebar/Currency/Currency.jsx'; // delete
// import DashboardPage from '../../pages/DashboardPage'; // delete

import styles from './Navigation.module.scss';

// const DashboardPage = lazy(() =>
//   import('../pages/DashboardPage.js' /* webpackChunkName: "dashboard-page" */),
// );

// const Statistics = lazy(() =>
//   import('../pages/Statistics' /* webpackChunkName: "statistics-page" */),
// );

// const Currency = lazy(() =>
//   import(
//     '../Sidebar/Currency/Currency.jsx' /* webpackChunkName: "currency-page" */
//   ),
// );

function Navigation() {
  const sizeScreen = useSizeScreen();
  const { url, path } = useRouteMatch();
  // const location = useLocation();

  return (
    <div>
      <nav className={styles.navigation}>
        <NavLink
          // exact
          to={{
            pathname: `${url}`,
            // state: {
            //   from: location.state ? location.state.from : '/',
            // },
          }}
          // to="/dashboard"
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          {sizeScreen <= 767 ? (
            <Home svg={styles.svgNav} />
          ) : (
            <div className={styles.boxNav}>
              <Home svg={styles.svgNav} />
              <span className={styles.textNav}>Home</span>
            </div>
          )}
        </NavLink>
        <NavLink
          // exact
          to={{
            pathname: '/statistics',
            // state: {
            //   from: location.state ? location.state.from : '/',
            // },
          }}
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          {sizeScreen <= 767 ? (
            <Statistic svg={styles.svgNav} />
          ) : (
            <div className={styles.boxNav}>
              <Statistic svg={styles.svgNav} />
              <span className={styles.textNav}>Statistics</span>
            </div>
          )}
        </NavLink>
        {sizeScreen <= 767 && (
          <NavLink
            // exact
            to={{
              pathname: '/currency',
              // state: {
              //   from: location.state ? location.state.from : '/',
              // },
            }}
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
          >
            <Currenc svg={styles.svgNav} />
          </NavLink>
        )}
      </nav>

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={`${path}`}>{/* <DashboardPage /> */}</Route>

          <Route path="/statistics">{/* <Statistics /> */}</Route>

          <Route path="/currency">{/* <Currency /> */}</Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default Navigation;
