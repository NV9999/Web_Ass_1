import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../../context/shop-context';
import './ProductDetail.css'; 


const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, cartItems, products } = useContext(ShopContext);
  const product = products.find(product => product.id === parseInt(id));

  const handleAddToCart = () => {
    console.log("Adding to cart:", product.id);
    addToCart(product.id);
  };

  return (
    <div className="product-detail">
      {product ? (
        <>
          <img src={product.productImage} alt={product.productName} />
          <h2>{product.productName}</h2>
          <p>${product.price}</p>
          <p>Description: {product.description}</p>
          <button onClick={handleAddToCart}>
            Add To Cart ({cartItems[product.id] || 0})
          </button>
          <Link to="/">Back</Link>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetail;

