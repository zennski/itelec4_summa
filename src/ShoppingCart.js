import React from 'react';


const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const handleRemoveFromCart = (productId) => {
   
    removeFromCart(productId);
  };

  return (
    <div className="shopping-cart" style={{ marginTop: "-850px", marginLeft: "1300px" }}>
      <h1>Checkout</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name} ({item.quantity})</span>
            <button onClick={() => handleRemoveFromCart(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
