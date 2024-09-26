import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

export const OrderSummary = () => {
  const { city } = useParams();
  const [pgDetails, setPgDetails] = useState([]); 
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching PG details...');
    const fetchPgDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/pgs/${city}`);
        if (response.data) {
          setPgDetails(response.data); 
        } else {
          throw new Error("No data received from the server");
        }
      } catch (error) {
        console.error('Error fetching PG details: ', error);
        alert('Error fetching PG details: ' + error.message);
        setError(error);
      }
    };

    fetchPgDetails();
  }, [city]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!pgDetails.length) { 
    return <div>Loading...</div>;
  }

  return (
    <div>
      {pgDetails.map((pg, index) => (
        <div key={index} className="pg-details-container" style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{pg.name}</h2>
          <div className="pg-info" style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>{pg.description}</p>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>{pg.propertyAddress}</p>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>{pg.landmark}</p>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>{pg.state}, {pg.city}</p>
          </div>
          <div className="pg-rooms">
            <h3>Rooms</h3>
            <ul>
              {pg.setupRooms.length > 0 ? (
                pg.setupRooms.map((room, index) => (
                  <li key={room._id}>
                    <span>Room Type: {room.roomType || 'Unknown'}</span><br/>
                    <span>Monthly Rent: {room.monthlyRent || 'N/A'}</span><br/>
                    <span>Deposit Amount: {room.depositAmount || 'N/A'}</span><br/>
                    <span>AC/Non-AC: {room.acNonAc || 'Unknown'}</span>
                  </li>
                ))
              ) : (
                <li>No rooms available</li>
              )}
            </ul>
          </div>

          <div className="pg-amenities">
            <h3>Amenities</h3>
            <ul>
              {pg.amenities && Object.keys(pg.amenities).length > 0 ? (
                Object.keys(pg.amenities).map((key, index) => (
                  pg.amenities[key] && (
                    <li key={index}>{key.replace(/([A-Z])/g, '$1').trim()}:{pg.amenities[key]}</li>
                  )
                ))
              ) : (
                <li>No amenities available</li>
              )}
            </ul>
          </div>

          <div className="pg-rules">
            <h3>Rules</h3>
            <ul>
              {pg.rules && Object.keys(pg.rules).length > 0 ? (
                Object.keys(pg.rules).map((key, index) => (
                  <li key={index}>{`${key}: ${pg.rules[key] ? 'Yes' : 'No'}`}</li>
                ))
              ) : (
                <li>No rules specified</li>
              )}
            </ul>
          </div>
          <div className="pg-image" style={{ marginBottom: '20px' }}>
            <img src={pg.image} alt={pg.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
          </div>
          <button style={{borderRadius: '15px'}}>View Pg details</button>
        </div>
      ))}
    </div>
  );
};
