import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';

const ProductForm = props => {
  const addToCart = (e) => {
    e.preventDefault();
    console.log(`Summary`);
    console.log(`==========`);
    console.log(`Name: ${props.title}`);
    console.log(`Price: ${props.price()}`);
    console.log(`Size: ${props.currentSize}`);
    console.log(`Color: ${props.currentColor}`);
  };

  return (
  <form>
    <OptionSize 
    sizes={props.sizes}
    setCurrentSize={props.setCurrentSize}
    currentSize={props.currentSize}
    />
    <OptionColor 
    colors={props.colors}
    setCurrentColor={props.setCurrentColor}
    currentColor={props.currentColor}
    />
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
  sizes: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductForm;