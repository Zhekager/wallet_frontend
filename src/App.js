import { lazy, Suspense } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { authOperations, authSelectors } from 'redux/auth';
import { Switch, Route } from 'react-router-dom';
// import PrivateRoute from './routes/PrivateRoute';
// import PublicRoute from './routes/PublicRoute';
import Container from './components/Container';
import Spinner from './components/Spinner';
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
  // const dispatch = useDispatch();
  // const isLoading = useSelector(authSelectors.getLoading);

  return (
    // !isLoading && (
    <>
      <Container>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" exact redirectTo="/dashboard" restricted>
              <RegistrationPage />
            </Route>

            <Route path="/register" redirectTo="/dashboard" restricted>
              <RegistrationPage />
            </Route>

            <Route path="/login" redirectTo="/dashboard" restricted>
              <LoginPage />
            </Route>

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
  );
}

export default App;
