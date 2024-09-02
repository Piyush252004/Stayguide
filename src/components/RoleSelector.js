import React, {useState, useEffect } from 'react';

export const RoleSelector = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f5f5f5',
        }}
      >
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          Loading...
        </div>
      </div>
    );
  }
  const handleAdminClick = () => {
    window.location.href = '/login'; // redirect to login page
  };

  const handleUserClick = () => {
    window.location.href = '/home'; // redirect to home page
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '600px',
        height: '400px',
        marginLeft: '500px',
        // justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        gap: '30px',
        marginTop: '150px',
        boxShadow: '1px 6px 20px silver',
        borderRadius: '15px'
      }}
    >
      <div
        style={{
          backgroundColor: '#972bfd',
          color: '#fff',
          padding: '20px',
          width: '60%',
          borderRadius: '10px',
          border: '1px solid #ddd',
          cursor: 'pointer',
          paddingTop: '35px',
          marginTop: '50px'
        }}
        onClick={handleAdminClick}
      >
        <h2 style={{ textAlign: 'center' }}>I want to add my Pg</h2>
        <button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
        </button>
      </div>
      <div
        style={{
          backgroundColor: '#fc9603',
          color: '#fff',
          padding: '20px',
          width: '60%',
          borderRadius: '10px',
          border: '1px solid #ddd',
          paddingTop: '35px',
          cursor: 'pointer',
        }}
        onClick={handleUserClick}
      >
        <h2 style={{ textAlign: 'center' }}>I want to find the PG</h2>
        <button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
        </button>
      </div>
    </div>
  );
};