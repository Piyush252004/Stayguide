import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

export const OrderSummary = ({ pgId: propPgId }) => {
  const { pgId } = useParams();
  const [pgDetails, setPgDetails] = useState(null);

  useEffect(() => {
    console.log('Fetching PG details...');
    const fetchPgDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/pgs/${pgId}`);
        // const d = await response.json();
        // console.log(d)
        console.log("response",response)
        if (!response) {
          console.log("1")
          throw new Error(`Error fetching PG details: ${response.statusText}`);
        }
        // const data = await response.json();
        console.log(response.data)
        setPgDetails(response.data);
      } catch (error) {
        console.log("2")
        console.error('Error fetching PG details: ', error);
        alert('Error fetching PG details: ' + error.message);
      }
    };

    fetchPgDetails();
  }, [pgId]);

  if (!pgDetails) {
    return <div>Pgs in {pgId}</div>;
  }

  return (
    <div className="pg-details-container" style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{pgDetails.name}</h2>
      <div className="pg-info" style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '18px', marginBottom: '10px' }}>{pgDetails.description}</p>
        <p style={{ fontSize: '16px', marginBottom: '10px' }}>{pgDetails.address}</p>
        <p style={{ fontSize: '16px', marginBottom: '10px' }}>{pgDetails.landmark}</p>
        <p style={{ fontSize: '16px', marginBottom: '10px' }}>{pgDetails.state}, {pgDetails.city}</p>
      </div>
      <div className="pg-rooms" style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Rooms</h3>
        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
          {pgDetails.rooms.map((room, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <span style={{ fontSize: '16px', marginRight: '10px' }}>{room.roomType}</span>
              <span style={{ fontSize: '16px', marginRight: '10px' }}>{room.monthlyRent}</span>
              <span style={{ fontSize: '16px', marginRight: '10px' }}>{room.depositAmount}</span>
              <span style={{ fontSize: '16px' }}>{room.acNonAc}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="pg-amenities" style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Amenities</h3>
        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
          {pgDetails.amenities.map((amenity, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>{amenity}</li>
          ))}
        </ul>
      </div>
      <div className="pg-rules" style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Rules</h3>
        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
          {pgDetails.rules.map((rule, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>{rule}</li>
          ))}
        </ul>
      </div>
      <div className="pg-image" style={{ marginBottom: '20px' }}>
        <img src={pgDetails.image} alt={pgDetails.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
      </div>
    </div>
  );
};

