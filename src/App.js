
import './App.css';
import React from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import ShoppingCart from './ShoppingCart';
import data from './data';

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };


  return (
    <div className="app">
      <div className="searchBar">
        <h1>Products Available</h1>
        <SearchBar items={data} />
      </div>
      <div className="products">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
