import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Spinner.scss';

const Spinner = () => (
  <Loader
    type="Grid"
    color="#C5BAFF"
    className="Loader"
    height={80}
    width={80}
    visible={true}
  />
);

export default Spinner;
