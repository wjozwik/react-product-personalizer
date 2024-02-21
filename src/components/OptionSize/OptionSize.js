import styles from '../ProductForm/ProductForm.module.scss'
import PropTypes from 'prop-types';
import clsx from 'clsx';

const OptionSize = props => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
      {props.sizes.map(size =>
          <li key={size.name}><button type="button" className={clsx(size.name === props.currentSize && styles.active)} onClick={() => props.setCurrentSize(size.name)} >{size.name}</button></li>
          )}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
}

export default OptionSize;