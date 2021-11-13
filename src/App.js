import { lazy, Suspense } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { authOperations, authSelectors } from 'redux/auth';
import { Switch, Route } from 'react-router-dom';
// import PrivateRoute from './routes/PrivateRoute';
// import PublicRoute from './routes/PublicRoute';
import Container from './components/Container';
// import LoaderSpinner from './components/LoaderSpinner';

// import Navigation from './components/Navigation'; //to delete later
// import Balance from './components/Balance'; //to delete later
// import Currency from './components/Sidebar/Currency'; //to delete later
import DashboardPage from './pages/DashboardPage/DasboardPage'; //to delete later

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
// const DashboardPage = lazy(() =>
//   import('./pages/DashboardPage' /* webpackChunkName: "dashboard-page" */),
// );

////////////////////////////  
  
// import Balance from './components/Balance'; //to delete later
// import Currency from './components/Sidebar/Currency';
// import Table from './components/Table'; //to delete later
  
//////////////////////////////////////////  


function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(authSelectors.getLoading);

  return (

    // !isLoading && (
    <>
      <Container>
        <Suspense fallback={'<LoaderSpinner />'}>
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
    // )

          
     //////////////////////////////     
          
//     <Container>
//       <div className="App">
        {/* <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

//         <Navigation />
       

        {/* <RegistrationPage />
        <LoginPage /> */}

//       </div>
//       <ToastContainer autoClose={3000} position="top-center" />
//       <Balance />
//       <Currency />
//       <Table />
//     </Container>


//////////////////////////////////////////

  );

  //   return (
  //     // !isLoading && (
  //     <>
  //       <Container>
  //         <Suspense fallback={'<LoaderSpinner />'}>
  //           <Switch>
  //             <PublicRoute path="/" exact redirectTo="/dashboard" restricted>
  //             <RegistrationPage />
  //             </PublicRoute>

  //             <PublicRoute path="/register" redirectTo="/dashboard" restricted>
  //             <RegistrationPage />
  //             </PublicRoute>

  //             <PublicRoute path="/login" redirectTo="/dashboard" restricted>
  //             <LoginPage />
  //             </PublicRoute>

  //             <PrivateRoute path="/dashboard" redirectTo="/login">
  //               <DashboardPage />
  //             </PrivateRoute>

  //             <Route>
  //               <NotFoundPage />
  //             </Route>
  //           </Switch>
  //         </Suspense>

  //         <ToastContainer autoClose={3000} position="top-center" />
  //       </Container>
  //     </>
  //     // )
  //   );
  // }
}

export default App;
