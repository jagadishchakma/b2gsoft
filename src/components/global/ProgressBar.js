import React from 'react';

function ProgressBar({ current, total, rating }) {
  // Calculate percentage
  const percentage = (current / total) * 100;

  return (
    <div className='flex items-center gap-3'>
        <p>{rating}</p>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-yellow-400 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm">{current}</p>
    </div>
  );
}

export default ProgressBar
