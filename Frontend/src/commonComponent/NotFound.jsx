import React from 'react';
import notFoundImage from '../assets/images/noDataFound.png'; // Import your image

const NotFound = () => {
  return (
    <div className="bg-white transaction-list d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
      <div className="bd-white transaction-item px-2 py-3 text-center">
        <img src={notFoundImage} alt="Not Found" style={{ maxWidth: '40%', marginBottom: '90px', }} />
        {/* <p>No transaction found.</p> */}
      </div>
    </div>
  );
};

export default NotFound;
