import React, { useState } from 'react';
import all_products from '../Assets/all_product';
import './ProductList.css';

function ProductList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false); // State to toggle showing search results

  const filterProducts = () => {
    return all_products.filter(product => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };

  const handleSearch = () => {
    setSearchResults(filterProducts());
    setShowSearchResults(true); // Show search results when search is performed
  };

  return (
    <div>
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Search products" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {showSearchResults && (
        <div className="product-list">
          {searchResults.map(product => (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt="" />
              <h3>{product.name}</h3>
              <p>New Price: ${product.new_price}</p>
              <p>Old Price: ${product.old_price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
