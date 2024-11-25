import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className={`h-[300px] sm:min-h-[500px] bg-[url('/images/hero.jpg')] bg-cover bg-center w-full flex justify-center items-center`}>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-[15px] sm:text-3xl text-center'>Elevate Your Everyday Style</h1>
                <h3 className='text-gray-300 text-[10px] sm:text-xl text-center'>Discover the Latest Trends in Sustainable Fashion</h3>
                <div className='flex items-center mt-5'>
                    <Link href="/" className='rounded-2xl bg-[#8e70e0] px-5 py-1 text-white'>Shop Now</Link>
                    <span className='rounded-full bg-[#8e70e0] p-2 text-white'><FaLongArrowAltLeft className='transform [rotate:120deg]' /></span>
                </div>
            </div>
        </div>
    );
};

export default Hero;