import React from 'react';
import './TradeHistory.css';

const TradeHistory = () => {
  const trades = [
    { id: 1, symbol: 'AAPL', price: 150.45, quantity: 10 },
    { id: 2, symbol: 'GOOGL', price: 2750.0, quantity: 5 },
    { id: 3, symbol: 'AMZN', price: 3500.0, quantity: 2 },
  ];

  return (
    <div className="trade-history">
      <h2>Trade History</h2>
      <table>
        <thead>
          <tr>
            <th>Trade ID</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => (
            <tr key={trade.id}>
              <td>{trade.id}</td>
              <td>{trade.symbol}</td>
              <td>${trade.price.toFixed(2)}</td>
              <td>{trade.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistory;
