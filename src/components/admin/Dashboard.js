import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/admin-pannel', { replace: true });
  }

  return (
    <>
      <div>This is dashboard for admin</div>
      <div>
        <button onClick={handleClick}
          style={{
            width: '100%',
            padding: 10,
            fontSize: 16,
            backgroundColor: '#337ab7',
            color: '#fff',
            border: 'none',
            borderRadius: 5,
            cursor: 'pointer',
          }}>click to add details</button>
      </div>
    </>
  )
}