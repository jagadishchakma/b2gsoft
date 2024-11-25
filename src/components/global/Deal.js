import React from 'react';

const Deal = ({deal}) => {
    return (
        <div className="absolute rounded-bl-3xl rounded-br-3xl bg-purple-800 flex flex-col items-center right-2 top-[-2px] p-2 text-gray-300">
            <span>Up</span>
            <span>To</span>
            <span>{deal}%</span>
        </div>
    );
};

export default Deal;