import React, { useState, useEffect} from 'react';
import { useLocalStorage } from 'usehooks-ts';


const ProductCard = ({ product, addToCart, removeFromCart }) => {
  const { image, name, price, category } = product;
  const [quantity, setQuantity] = React.useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [savedCartItems, setSavedCartItems] = useLocalStorage('cartItems', []);


  const handleAddToCart = () => {
    addToCart({ ...product, quantity: quantity + 1 });
    setQuantity(quantity + 1);
  };

  const handleRemoveFromCart = () => {
    if(quantity !== -1) {
    setQuantity(quantity - 1);
    removeFromCart(product.id);
    } else {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setSavedCartItems(cartItems);
  }, [cartItems, setSavedCartItems]);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} style={{ height: '200px', width: '300px' }}/>
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p>{category}</p>
        <p>${price}</p>
        <div className="quantity">
          <button onClick={handleRemoveFromCart}>-</button>
          <span>{quantity}</span>
          <button onClick={handleAddToCart}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

