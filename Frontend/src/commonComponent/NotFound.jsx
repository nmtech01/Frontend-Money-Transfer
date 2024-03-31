import React from 'react';
import notFoundImage from '../assets/images/noDataFound.png'; // Import your image

const NotFound = () => {
  return (
    <div className="transaction-list d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="transaction-item px-4 py-3 text-center">
        <img src={notFoundImage} alt="Not Found" style={{ maxWidth: '80%', marginBottom: '20px', }} />
        {/* <p>No transaction found.</p> */}
      </div>
    </div>
  );
};

export default NotFound;
