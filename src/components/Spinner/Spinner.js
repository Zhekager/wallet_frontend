import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Spinner.scss';

const Spinner = () => (
  <Loader

    type="BallTriangle"
    color="#24CCA7"
    className="Loader"
    height={100}
    width={100}
    visible={true}
  />
);

export default Spinner;
