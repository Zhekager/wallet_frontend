import styles from './styles.module.scss';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { mediaBreakpoints } from '../../../assets/constants';

const NoStatsPlaceholder = () => {
  const desktop = useMediaQuery(mediaBreakpoints.minDesktop);
  return (
    <>
      <p className={styles.notification}>
        Нет данных для отображения статистики
      </p>
      {desktop && (
        <div className={styles.wrapper}>
          <div className={styles.leftWall}></div>
          <div className={styles.ball}></div>
          <div className={styles.rightWall}></div>
          <div className={styles.clear}></div>
        </div>
      )}
    </>
  );
};

export default NoStatsPlaceholder;
