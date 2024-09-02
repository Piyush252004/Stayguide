// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

// const city = [
//     { name: 'Surat', image: '/img/surat.jpeg' },
//     { name: 'Rajkot', image: '/img/rajkot.png' },
//     { name: 'Gandhinagar', image: '/img/gandhinagar.jpg' },
//     { name: 'Vadodara', image: '/img/vadodara-removebg-preview.png' },
//     { name: 'Ahmedabad', image: '/img/ahmedabad.jpg' },
//   ];

// export const Home = () => {
//     const navigate = useNavigate()
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       const searchInput = document.getElementById('city');
//       const searchQuery = searchInput.value.trim();
//       if (searchQuery) {
//         window.location.href = `/pglist?city=${searchQuery}`;
//       }
//     };
//   return (
//     <div>
//     <div className="banner-container">
//         <h2 className="white pb-3">Discover your stay Where Comfort Meets Convenience</h2>

//         <form id="search-form" onSubmit={handleSubmit}>
//             <div className="input-group city-search">
//                 <input type="text" className="form-control input-city" id='city' name='city' placeholder="Enter your city to search for stay" />
//                 <div className="input-group-append">
//                     <button type="submit" className="btn btn-secondary" onClick={() => navigate('/order-summary')}>
//                         <i className="fa fa-search"></i>
//                     </button>
//                 </div>
//             </div>
//         </form>
//     </div>

//     <div className="page-container">
//         <h1 className="city-heading">
//             Major Cities
//         </h1>
//         <div className="row">
//             <div className="city-card-container col-md" key={city.name}>
//                 <Link to={`/order-summary/${city.Name}`}>
//                     <div className="city-card rounded-circle">
//                         <img src="/img/surat.jpeg" className="city-img" />
//                     </div>
//                 </Link>
//             </div>

//             <div className="city-card-container col-md" key={city.name}>
//                 <Link to={`order-summary/${city.name}`}>
//                     <div className="city-card rounded-circle">
//                         <img src="/img/rajkot.png" className="city-img" />
//                     </div>
//                 </Link>
//             </div>

//             <div className="city-card-container col-md" key={city.name}>
//                 <Link to={`order-summary/${city.name}`}>
//                     <div className="city-card rounded-circle">
//                         <img src="/img/gandhinagar.jpg" className="city-img" />
//                     </div>
//                 </Link>
//             </div>

//             <div className="city-card-container col-md" key={city.name}>
//                 <Link to={`order-summary/${city.name}`}>
//                     <div className="city-card rounded-circle">
//                         <img src="/img/vadodara-removebg-preview.png" className="city-img" />
//                     </div>
//                 </Link>
//             </div>

//             <div className="city-card-container col-md" key={city.name}>
//                 <Link to={`order-summary/${city.name}`}>
//                     <div className="city-card rounded-circle">
//                         <img src="/img/ahmedabad.jpg" className="city-img" />
//                     </div>
//                 </Link>
//             </div>
//         </div>
//     </div>
//     <div className="footer">
//         <div className="page-container footer-container">
//             <div className="footer-cities">
//                 <div className="footer-city" key={city.name}>
//                     <Link to={`order-summary/${city.name}`}>PG in Ahmedabad</Link>
//                 </div>
//                 <div className="footer-city" key={city.name}>
//                     <Link to={`order-summary/${city.name}`}>PG in Surat</Link>
//                 </div>
//                 <div className="footer-city" key={city.name}>
//                     <Link to={`order-summary/${city.name}`}>PG in Rajkot</Link>
//                 </div>
//                 <div className="footer-city" key={city.name}>
//                     <Link to={`order-summary/${city.name}`}>PG in Vadodara</Link>
//                 </div>
//                 <div className="footer-city" key={city.name}>
//                     <Link to={`order-summary/${city.name}`}>PG in Gandhinagar</Link>
//                 </div>
//             </div>
//             <div className="footer-copyright">© 2024 Copyright Stay Guide</div>
//         </div>
//     </div>
// </div>
//   )
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const cities = [
  { name: 'Surat', image: '/img/surat.jpeg' },
  { name: 'Rajkot', image: '/img/rajkot.png' },
  { name: 'Gandhinagar', image: '/img/gandhinagar.jpg' },
  { name: 'Vadodara', image: '/img/vadodara-removebg-preview.png' },
  { name: 'Ahmedabad', image: '/img/ahmedabad.jpg' },
];

export const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchInput = document.getElementById('city');
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
      navigate(`/order-summary/${searchQuery}`);
    }
  };

  return (
    <div>
      <div className="banner-container">
        <h2 className="white pb-3">Discover your stay Where Comfort Meets Convenience</h2>

        <form id="search-form" onSubmit={handleSubmit}>
          <div className="input-group city-search">
            <input type="text" className="form-control input-city" id='city' name='city' placeholder="Enter your city to search for stay" />
            <div className="input-group-append">
              <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="page-container">
        <h1 className="city-heading">
          Major Cities
        </h1>
        <div className="row">
          {cities.map((city) => (
            <div className="city-card-container col-md" key={city.name}>
              <Link to={`/order-summary/${city.name}`}>
                <div className="city-card rounded-circle">
                  <img src={city.image} className="city-img" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <div className="page-container footer-container">
          <div className="footer-cities">
            {cities.map((city) => (
              <div className="footer-city" key={city.name}>
                <Link to={`/order-summary/${city.name}`}>PG in {city.name}</Link>
              </div>
            ))}
          </div>
          <div className="footer-copyright">© 2024 Copyright Stay Guide</div>
        </div>
      </div>
    </div>
  );
};


