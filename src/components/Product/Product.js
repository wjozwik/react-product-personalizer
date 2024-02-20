import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {
  const [currentColor, setCurrectColor] = useState(props.colors[0]);
  const [currentSize, setCurrectSize] = useState(props.sizes[0].name);

  // console.log(currentColor, currentSize);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
  };

  const getPrice = () => {
    const finalPrice = props.sizes.find((element) => element.name === currentSize);

    return props.basePrice + finalPrice.additionalPrice;
  };

  const addToCart = (e) => {
    e.preventDefault();
    console.log(`Summary`);
    console.log(`==========`);
    console.log(`Name: ${props.title}`);
    console.log(`Price: ${getPrice()}`);
    console.log(`Size: ${currentSize}`);
    console.log(`Color: ${currentColor}`);
  };

  return (
    <article className={styles.product}>

      <ProductImage 
      title={props.title}
      name={props.name}
      color={currentColor}
      />
      
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
            {props.sizes.map(size =>
                <li><button type="button" className={size.name === currentSize && styles.active} onClick={() => setCurrectSize(size.name)}>{size.name}</button></li>
                )}

            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color =>
                <li><button type="button" className={clsx([prepareColorClassName(color)], color === currentColor && styles.active)} onClick={() => setCurrectColor(color)}/></li>
                )}
            </ul>
          </div>
          <Button className={styles.button} onClick={addToCart}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
}

export default Product;