import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useMemo } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const price = useMemo(() => {
    const finalPrice = props.sizes.find((element) => element.name === currentSize);

    return props.basePrice + finalPrice.additionalPrice;
  }, [currentSize, props.basePrice, props.sizes]);

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
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
        name={props.name}
        title={props.title}
        colors={props.colors}
        sizes={props.sizes}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        price={price}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
}

export default Product;