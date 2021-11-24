import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from './redux/auth/auth-selectors';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Container from './components/Container';
import Spinner from './components/Spinner';
// import TransactionForm from './components/TransactionForm/TransactionForm';
//import DiagramTab from './components/DiagramTab';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Chart from './components/Chart';

// import GoogleAuth from './components/GoogleAuth';

// import routes from './routes';
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
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const isRegistered = useSelector(authSelectors.getIsRegistered);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isLoading && (
      <>
        <Container>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <PublicRoute path="/" exact redirectTo="/dashboard" restricted>
                <LoginPage />
              </PublicRoute>

              <PublicRoute path="/signup" redirectTo="/login" restricted>
                <RegistrationPage />
              </PublicRoute>

              <PrivateRoute path="/google-user" redirectTo="/dashboard">
                <DashboardPage />
              </PrivateRoute>

              {/* <Route
                path={routes.google}
                restricted
                render={props =>
                  isLoggedIn ? (
                    <Redirect to={routes.dashboard} />
                  ) : isRegistered ? (
                    <Redirect to={routes.login} />
                  ) : (
                    <GoogleAuth />
                  )
                }
              /> */}

              <PublicRoute path="/login" redirectTo="/dashboard" restricted>
                <LoginPage />
              </PublicRoute>

              <PrivateRoute path="/dashboard" redirectTo="/login">
                <DashboardPage />
              </PrivateRoute>

              <PrivateRoute path="/currency" redirectTo="/login">
                <DashboardPage />
              </PrivateRoute>

              <PrivateRoute path="/statistics" redirectTo="/login">
                <DashboardPage />
              </PrivateRoute>

              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </Suspense>
          {/*   <DiagramTab />  */}
          {/*  <Chart/>  */}
          <ToastContainer autoClose={3000} position="top-center" />
        </Container>
      </>
    )
  );
}

export default App;
