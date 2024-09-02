import React, {useEffect, useState} from 'react';


export const AdminPannel = () => {
    const [propertyName, setPropertyName] = useState('');

    const handlePropertyNameChange = (event) => {
        setPropertyName(event.target.value);
    }
    const [citiesByState, setCitiesByState] = useState({
        'GJ': [
          'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar'
          // Add more cities as needed
        ]
      });

      const [numRooms, setNumRooms] = useState(0);
      const [setupRooms, setSetupRooms] = useState([]);
      const [amenities, setAmenities] = useState({
        houseKeeping: false,
        gym: false,
        // Add more amenities as needed
      });
      const [rules, setRules] = useState({
        noDrinking: false,
        noSmoking: false
        // Add more rules as needed
      });
    
      useEffect(() => {
        const stateSelect = document.getElementById('state');
        stateSelect.addEventListener('change', handleStateChange);
    
        const roomsInput = document.getElementById('rooms');
        roomsInput.addEventListener('input', handleRoomsInput);
    
        const addPropertyForm = document.getElementById('add-property-form');
        addPropertyForm.addEventListener('submit', handleFormSubmit);
    
        return () => {
          stateSelect.removeEventListener('change', handleStateChange);
          roomsInput.removeEventListener('input', handleRoomsInput);
          addPropertyForm.removeEventListener('submit', handleFormSubmit);
        };
      }, []);
    
      const handleStateChange = (event) => {
        const state = event.target.value;
        const citySelect = document.getElementById('city');
        citySelect.innerHTML = '<option value="">--- Select City ---</option>'; // Reset city dropdown
        if (state && citiesByState[state]) {
          citiesByState[state].forEach((city) => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
          });
        }
      };
    
      const handleRoomsInput = (event) => {
        const numRooms = parseInt(event.target.value, 10);
        setNumRooms(numRooms);
        const tableBody = document.getElementById('rooms-table-body');
        tableBody.innerHTML = ''; // Clear existing rows
    
        if (!isNaN(numRooms) && numRooms > 0) {
          for (let i = 1; i <= numRooms; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${i}</td>
              <td><select class="form-control" name="room-type-${i}">
                <option value="">--- Select ---</option>
                <option value="Single Sharing">Single Sharing</option>
                <option value="Double Sharing">Double Sharing</option>
                <option value="Three Sharing">Three Sharing</option>
                <!-- Add more room types as needed -->
              </select></td>
              <td><input type="text" name="monthly-rent-${i}" class="form-control" placeholder="Monthly Rent"></td>
              <td><input type="text" name="deposit-amount-${i}" class="form-control" placeholder="Deposit Amount"></td>
              <td><select class="form-control" name="ac-non-ac-${i}">
                <option value="">--- Select ---</option>
                <option value="AC">AC</option>
                <option value="No AC">No AC</option>
              </select></td>
            `;
            tableBody.appendChild(row);
          }

          // Update setupRooms array
            const setupRooms = Array.from(document.querySelectorAll('#rooms-table-body tr')).map((row) => ({
                roomType: row.querySelector('select[name^="room-type"]').value,
                monthlyRent: row.querySelector('input[name^="monthly-rent"]').value,
                depositAmount: row.querySelector('input[name^="deposit-amount"]').value,
                acNonAc: row.querySelector('select[name^="ac-non-ac"]').value
            }));
            setSetupRooms(setupRooms);
        }
      };
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append('name', document.getElementById('name').value);
        formData.append('gender', document.getElementById('gender').value);
        formData.append('contactPersonName', document.getElementById('contactPersonName').value);
        formData.append('email', document.getElementById('email').value);
        formData.append('mobile', document.getElementById('mobile').value);
        formData.append('pgRegNo', document.getElementById('pgRegNo').value);
        formData.append('propertyAddress', document.getElementById('propertyAddress').value);
        formData.append('description', document.getElementById('description').value);
        formData.append('landmark', document.getElementById('landmark').value);
        formData.append('state', document.getElementById('state').value);
        formData.append('city', document.getElementById('city').value);
        formData.append('gateCloseTime', document.getElementById('gateCloseTime').value);
        formData.append('foodAvailability', document.getElementById('foodAvailability').value);
        formData.append('rooms', numRooms);

        const setupRooms = Array.from(document.querySelectorAll('#rooms-table-body tr')).map((row) => ({
          roomType: row.querySelector('select[name^="room-type"]').value,
          monthlyRent: row.querySelector('input[name^="monthly-rent"]').value,
          depositAmount: row.querySelector('input[name^="deposit-amount"]').value,
          acNonAc: row.querySelector('select[name^="ac-non-ac"]').value
        }));
        formData.append('setupRooms', JSON.stringify(setupRooms));
    
        formData.append('amenities', JSON.stringify(amenities));
    
        formData.append('rules', JSON.stringify(rules));

        // const imageInput = document.getElementById('image');
        // if (imageInput.files.length > 0) {
        //   formData.append('image', imageInput.files[0]);
        // }
    
        fetch('http://localhost:5000/properties', {
          method: 'POST',
          body: formData
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            alert('Property added successfully');
            window.location.href = 'property_details.html'; 
          })
          .catch((error) => {
            console.error('Error:', error);
            alert('Error adding property. Please check the console for details.');
          });
      };
  return (
    <div>
      <div className="container" style={{width: '50%', border:'1px solid black', borderRadius: '20px', boxShadow: '1px 6px 20px black'}}>
        <h1 className="mt-4">Add Property</h1>
        <form id="add-property-form">
          <div className="form-group">
            <label htmlFor="name">Property Name</label>
            <input type="text" id="name" className="form-control" value={propertyName} onChange={handlePropertyNameChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" className="form-control" required>
              <option value="">--- Select ---</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="contactPersonName">Contact Person Name</label>
            <input type="text" id="contactPersonName" className="form-control" placeholder="Enter owner name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input type="tel" id="mobile" className="form-control" placeholder="Enter your phone number" pattern="[0-9]{10}" required />
          </div>
          <div className="form-group">
            <label htmlFor="pgRegNo">PG Reg No.</label>
            <input type="text" id="pgRegNo" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="propertyAddress">Property Address</label>
            <input type="text" id="propertyAddress" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="landmark">Landmark</label>
            <input type="text" id="landmark" className="form-control" placeholder="Enter nearest building" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <select id="state" className="form-control" required>
              <option value="">--- Select State ---</option>
              <option value="GJ">Gujarat</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <select id="city" className="form-control" required>
              <option value="">--- Select City ---</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gateCloseTime">Gate close time</label>
            <input type="time" id="gateCloseTime" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="foodAvailability">Food Availability</label>
            <select id="foodAvailability" className="form-control">
              <option value="">--- Select ---</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="rooms">Total No. of Rooms</label>
            <input type="number" id="rooms" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="setupRooms">Setup Rooms</label>
            <table className="table">
              <thead>
                <tr>
                  <th id="roomNumber">Room Number</th>
                  <th id="roomType">Room Type</th>
                  <th id="monthlyRent">Monthly Rent</th>
                  <th id="depositAmount">Deposit Amount</th>
                  <th id="acNonAC">AC/Non AC</th>
                </tr>
              </thead>
              <tbody id="rooms-table-body">
                {/* Dynamic rows will be inserted here */}
              </tbody>
            </table>
          </div>
          <div className="form-group">
            <label htmlFor="amenities">Select Amenities</label>
            <div id="amenities">
                <label>House Keeping <input type="checkbox" id="house-keeping" /></label>
                <label>Gym <input type="checkbox" id="gym" /></label>
                <label>Sofa <input type="checkbox" id="sofa" /></label>
                <label>Dining Table <input type="checkbox" id="dining-table" /></label>
                <label>BED COT PILLOW <input type="checkbox" id="bed-cot-pillow" /></label>
                <label>Hot water <input type="checkbox" id="hot-water" /></label>
                <label>Reading room <input type="checkbox" id="reading-room" /></label>
                <label>Wardrobes <input type="checkbox" id="wardrobes" /></label>
                <label>News Paper <input type="checkbox" id="news-paper" /></label>
                <label>Toilets Attached <input type="checkbox" id="toilets-attached" /></label>
                <label>Safety Lockers <input type="checkbox" id="safety-lockers" /></label>
                <label>CCTV <input type="checkbox" id="cctv" /></label>
                <label>Lift <input type="checkbox" id="lift" /></label>
                <label>Kitchen <input type="checkbox" id="kitchen" /></label>
                <label>Separate EB meter <input type="checkbox" id="separate-eb-meter" /></label>
                <label>Mineral/RO Water <input type="checkbox" id="mineral/ro-water" /></label>
                <label>Microwave Oven <input type="checkbox" id="microwave-oven" /></label>
                <label>Geyser <input type="checkbox" id="geyser" /></label>
                <label>Refrigerator <input type="checkbox" id="refrigerator" /></label>
                <label>Wi-Fi <input type="checkbox" id="wifi" /></label>
                <label>Television <input type="checkbox" id="television" /></label>
                <label>Security <input type="checkbox" id="security" /></label>
                <label>Laundry <input type="checkbox" id="laundry" /></label>
                <label>Washing machine <input type="checkbox" id="washing-machine" /></label>
                <label>AC <input type="checkbox" id="ac" /></label>
                <label>Parking <input type="checkbox" id="parking" /></label>
                <label>Power backup <input type="checkbox" id="power-backup" /></label>
            </div>
            </div>
            <div className="form-group">
            <label htmlFor="image">Enter image</label>
            <input type="file" id="image" className="form-control" accept="image/*" required />
          </div>
          <button type="submit" className="btn btn-primary">Add Property</button>
        </form>
      </div>
    </div>
  );
};