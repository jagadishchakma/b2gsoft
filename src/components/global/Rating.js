import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating,review=false, size=14 }) => {
  // This array represents the maximum number of stars (e.g., 5)
  const totalStars = 5;

  return (
    <div className='flex gap-1 items-center'>
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index}
          size={size} // You can adjust the size of the star here
          color={index < rating ? '#ffd012' : '#ccc'} // Orange if rated, grey if not
          style={{
            color: index < rating ? '#ffd012' : 'transparent', // Fill color only if rated
            stroke: '#ffd012', // Border color (stroke) for both rated and unrated
            strokeWidth: 20, // Adjust the border thickness
            marginRight: '5px',
          }}
        />
      ))}
      <h5>{review && `(${review})`}</h5>
    </div>
  );
};

export default Rating;
