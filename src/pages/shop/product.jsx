// product.js

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/shop-context';

const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id] || 0;

  const handleAddToCart = () => {
    console.log("Adding to cart:", id);
    addToCart(id);
  };

  return (
    <div className='product' key={id}>
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={handleAddToCart}>
        Add To Cart ({cartItemAmount})
      </button>
      <Link to={`/product/${id}`}className="detailsLink">View Details</Link>
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired
  }).isRequired
};
 
export default Product;
