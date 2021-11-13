import Container from './components/Container/Container';
import './App.scss';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';

import Balance from './components/Balance'; //to delete later
import Currency from './components/Sidebar/Currency'; //to delete later

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Container>
      <div className="App">
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
        <RegistrationPage />
        <LoginPage />
      </div>
      <ToastContainer autoClose={3000} position="top-center" />
      <Balance />
      <Currency />
    </Container>
  );
}

export default App;
