import PropTypes from 'prop-types';
import styles from './Switch.module.scss';

export default function Switch({ isChecked, onSwitch, value }) {
  return (
    <div className={styles.box}>
      <span className={`${styles.income} ${isChecked && styles.checked}`}>
        Income
      </span>

      <div>
        <label htmlFor="type" className={styles.switch_for}>
          <input
            // name={name}
            value={value}
            type="checkbox"
            id="type"
            checked={isChecked}
            onChange={onSwitch}
            readOnly
          />
          <span className={styles.switch}></span>
        </label>
      </div>

      <span className={`${styles.costs} ${!isChecked && styles.checked}`}>
        Costs
      </span>
    </div>
  );
}

Switch.propTypes = {
  onchange: PropTypes.func,
  isChecked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};
