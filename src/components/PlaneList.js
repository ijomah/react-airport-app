import React from 'react';
import PlaneCard from './PlaneCard';

const PlaneList = ({ flights }) => {
  console.log(flights);
  
  return (
    <div className='container' style={{width: 1300}}>
      {
        flights.map((onePlane) => {
          return (
            <PlaneCard
              key={onePlane[0]}
              flight={onePlane}
              />
          );
        })
      }
    </div>
  );
}

export default PlaneList;