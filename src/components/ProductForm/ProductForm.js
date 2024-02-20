import Button from '../Button/Button';
import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ProductForm = props => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
  };

  const addToCart = (e) => {
    e.preventDefault();
    console.log(`Summary`);
    console.log(`==========`);
    console.log(`Name: ${props.title}`);
    console.log(`Price: ${props.getPrice()}`);
    console.log(`Size: ${props.currentSize}`);
    console.log(`Color: ${props.currentColor}`);
  };

  return (
  <form>
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
      {props.sizes.map(size =>
          <li><button type="button" className={size.name === props.currentSize && styles.active} onClick={() => props.setCurrentSize(size.name)}>{size.name}</button></li>
          )}

      </ul>
    </div>
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map(color =>
          <li><button type="button" className={clsx([prepareColorClassName(color)], color === props.currentColor && styles.active)} onClick={() => props.setCurrentColor(color)}/></li>
          )}
      </ul>
    </div>

    <Button className={styles.button} onClick={addToCart}>
      <span className="fa fa-shopping-cart" />
    </Button>
  </form>
  )
};

ProductForm.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
}

export default ProductForm;