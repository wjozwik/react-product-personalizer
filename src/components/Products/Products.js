import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
{/*       {productsData.map(product => 
        <Product
        key={product.id}
        name={product.name}
        title={product.title}
        colors={product.colors}
        sizes={product.sizes}
        basePrice={product.basePrice} />
        )} */}

        {products.map(product => 
          <Product 
          {...product}
          key={product.id} />
          )}
    </section>
  );
};

export default Products;