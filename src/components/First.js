// import React from 'react';
// import backgroundVideo from './background.mp4';

// export const First = () => {
//   return (
//     <div className="background" style={{
//       position: 'relative',
//       width: '100%',
//       height: '100vh', // set the height to 100% of the viewport
//       overflow: 'hidden',
//     }}>
//       <video
//         autoPlay
//         loop
//         muted
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//         }}
//       >
//         <source src={backgroundVideo} type="video/mp4" />
//       </video>
//       <div
//         style={{
//           position: 'absolute',
//           top: 250,
//           left: 0,
//           width: '100%',
//           height: '30%',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: 'rgba(0, 0, 0, 0.5)', // black background with 50% opacity
//         }}
//       >
//         <h1 style={{
//           color: 'white',
//           fontSize: '36px',
//           fontWeight: 'bold',
//           textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // add a subtle text shadow
//           fontFamily: 'Times New Roman'
//         }}>
//           Stay guide for you
//         </h1>
//       </div>
//     </div>
//   );
// };

import React, { useState } from 'react';
import backgroundVideo from './background.mp4';

export const First = () => {
  const [turning, setTurning] = useState(false);

  const handleClick = () => {
    setTurning(true);
    setTimeout(() => {
      window.location.href = '/Roleselector';
    }, 500); // wait for the animation to finish
  };

  return (
    <div
      className={`background ${turning ? 'page-transition turn' : ''}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh', // set the height to 100% of the viewport
        overflow: 'hidden',
        cursor: 'pointer', // add a pointer cursor to indicate clickability
      }}
      onClick={handleClick} // add an onClick event handler
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div
        style={{
          position: 'absolute',
          top: 250,
          left: 0,
          width: '100%',
          height: '30%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // black background with 50% opacity
        }}
      >
        <h1 style={{
          color: 'white',
          fontSize: '36px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // add a subtle text shadow
          fontFamily: 'Times New Roman'
        }}>
          Stay guide for you
        </h1>
      </div>
      <style>
        {`
          .page-transition {
            transition: transform 0.5s ease-in-out;
          }

          .page-transition.turn {
            transform: translateY(-100vh);
          }
        `}
      </style>
    </div>
  );
};