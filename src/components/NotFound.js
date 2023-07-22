import React from 'react';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container"> {/* Add the missing class */}
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
