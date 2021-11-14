import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Spinner.scss';

const Spinner = () => (
  <Loader
    type="BallTriangle"
    color="#00BFFF"
    className="Loader"
    height={70}
    width={70}
    visible={true}
  />
);

export default Spinner;
