import React, { useState } from 'react';
import user from '@/assets/images/user.png';
import Image from 'next/image';
import Rating from '../global/Rating';
import { FaThumbsUp } from 'react-icons/fa';
import ProgressBar from '../global/ProgressBar';

const ReviewInfo = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const like = false

    // Handler for select box change
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);

    };
    return (
        <div className='flex justify-between flex-col-reverse sm:flex-row gap-10'>
            <div>
                <div>
                    <select
                        id="options"
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className='border border-purple-600 p-2 rounded-lg focus:ring-purple-300 focus:outline outline-purple-800'
                    >
                        <option value="" disabled>Select an option</option>
                        <option value="option1">Newest</option>
                        <option value="option2">Oldest</option>
                        <option value="option3">Most React</option>
                    </select>
                </div>
                <div className='mt-5'>
                    <div className='flex flex-col gap-2'>
                        <div className="flex gap-3">
                            <Image
                                src={user}
                                height={40}
                                alt='user'
                                width={40}
                            />
                            <div>
                                <div className="flex gap-1">
                                    <p className="text-sm text-black">Cameron Williamson</p>
                                    <p className="text-sm text-gray-600">3 days</p>
                                </div>
                                <Rating rating={4} />
                            </div>
                        </div>
                        <div>
                            <p>Very Nice!!</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaThumbsUp
                                style={{
                                    color: like ? 'black' : 'transparent', // Fill color only if rated
                                    stroke: 'black', // Border color (stroke) for both rated and unrated
                                    strokeWidth: 20, // Adjust the border thickness
                                    marginRight: '5px',
                                }}
                            />
                            <span>10</span>
                        </div>
                    </div>
                    <hr className='my-5' />
                    <div className='flex flex-col gap-2'>
                        <div className="flex gap-3">
                            <Image
                                src={user}
                                height={40}
                                alt='user'
                                width={40}
                            />
                            <div>
                                <div className="flex gap-1">
                                    <p className="text-sm text-black">Cameron Williamson</p>
                                    <p className="text-sm text-gray-600">3 days</p>
                                </div>
                                <Rating rating={4} />
                            </div>
                        </div>
                        <div>
                            <p>Very Nice!!</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaThumbsUp
                                style={{
                                    color: like ? 'black' : 'transparent', // Fill color only if rated
                                    stroke: 'black', // Border color (stroke) for both rated and unrated
                                    strokeWidth: 20, // Adjust the border thickness
                                    marginRight: '5px',
                                }}
                            />
                            <span>10</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h6>Product Review <span className='text-purple-600'>121 reviews</span></h6>
                <div className="flex justify-between gap-14">
                    <Rating rating={4} size={25} />
                    <p>(4.0)</p>
                </div>
                <hr />
                <ProgressBar current={50} total={121} rating={5}/>
                <ProgressBar current={5} total={121} rating={4}/>
                <ProgressBar current={10} total={121} rating={3}/>
                <ProgressBar current={30} total={121} rating={2}/>
                <ProgressBar current={2} total={121} rating={1}/>
            </div>
        </div>
    );
};

export default ReviewInfo;