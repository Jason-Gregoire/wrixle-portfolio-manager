import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = () => {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order form submission
    console.log(`Symbol: ${symbol}, Quantity: ${quantity}`);
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <label htmlFor="symbol">Symbol:</label>
      <input
        type="text"
        id="symbol"
        value={symbol}
        onChange={handleSymbolChange}
        required
      />

      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={handleQuantityChange}
        required
      />

      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;
