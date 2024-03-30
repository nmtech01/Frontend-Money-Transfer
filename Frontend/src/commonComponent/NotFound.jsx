import React from 'react';

const NotFound = () => {
  return (
    <div className="transaction-list d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="transaction-item px-4 py-3 text-center">
        <p>No transaction found.</p>
      </div>
    </div>
  );
};

export default NotFound;
