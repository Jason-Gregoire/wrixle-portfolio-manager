import React from 'react';

const List = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default List;
