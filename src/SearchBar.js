import React, { useState } from 'react';

const SearchBar = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      <h4> Product Name </h4>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h4> Category </h4>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;