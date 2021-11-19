import style from './Error.module.scss';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

const NotFound = () => (
  <div className={style.container_error}>
    <div className={style.box}>
      <div className={style.error}>
        <h1 className={style.notFound}>404 - Page Not Found!</h1>
        <img className={style.image} src="https://i.imgur.com/qIufhof.png" />
        <p className={style.text}>
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
          <Link className={style.link} to="/">
            <AiOutlineLeft /> Back to our site
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default NotFound;
