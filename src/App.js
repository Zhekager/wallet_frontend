import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { authOperations, authSelectors } from 'redux/auth';
import { authOperations } from './redux/auth';
import { authSelectors } from './redux/auth';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Container from './components/Container';
import Spinner from './components/Spinner';
// import TransactionForm from './components/TransactionForm/TransactionForm';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.module.scss';

const RegistrationPage = lazy(() =>
  import(
    './pages/RegistrationPage' /* webpackChunkName: "registration-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const DashboardPage = lazy(() =>
  import('./pages/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isLoading && (
      <>
        <Container>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <PublicRoute path="/" exact redirectTo="/login" restricted>
                <RegistrationPage />
              </PublicRoute>

              <PublicRoute path="/signup" redirectTo="/login" restricted>
                <RegistrationPage />
              </PublicRoute>

              <PublicRoute path="/login" redirectTo="/dashboard" restricted>
                <LoginPage />
              </PublicRoute>

              <Route path="/dashboard" redirectTo="/login">
                <DashboardPage />
              </Route>

              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </Suspense>

          <ToastContainer autoClose={3000} position="top-center" />
        </Container>
      </>
    )
  );
}

export default App;
