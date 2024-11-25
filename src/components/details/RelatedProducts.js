'use client'
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import one from '@/assets/images/features/one.png';
import two from '@/assets/images/features/two.png';
import three from '@/assets/images/features/three.png';
import four from '@/assets/images/features/four.png';
import Image from 'next/image';
import Link from 'next/link';
import LeftArrowBtn from '../global/LeftArrowBtn';
import RightArrowBtn from '../global/RightArrowBtn';

const RelatedProducts = () => {
    // Reference to the slider
    const sliderRef = useRef(null);

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false, // Disable default arrows to use custom buttons
        responsive: [
            {
              breakpoint: 768, // When screen width is less than 768px
              settings: {
                slidesToShow: 1, // Show only 1 slide
                slidesToScroll: 1,
              },
            },
          ],
    };

    return (
        <div style={{ position: 'relative' }}>
            {/* Custom buttons positioned as desired */}
            <div className='flex justify-between'>
                <div>
                    <h6 className='font-bold text-lg'>Related Products</h6>
                </div>
                <div className='flex justify-between'>
                    <button
                        onClick={() => sliderRef.current.slickPrev()}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '24px',
                            color: 'black',
                            margin: '10px',
                        }}
                    >
                        <LeftArrowBtn/>
                    </button>

                    <button
                        onClick={() => sliderRef.current.slickNext()}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '24px',
                            color: 'black',
                            margin: '10px',
                        }}
                    >
                        <RightArrowBtn/>
                    </button>
                </div>

            </div>

            {/* Slider with custom navigation */}
            <Slider ref={sliderRef} {...settings}>
                <div className='slick-product'>
                    <Image
                        src={one} // Use the imported image
                        alt="Company Logo"
                        width={250}   // Set the width as needed
                        height={650}  // Set the height as needed
                        placeholder="blur"  // Enable blur-up effect
                        layout="responsive"
                    />
                    <div className="flex justify-between m-2">
                        <h6>Indian Sharee</h6>
                        <h3>BDT 2,300</h3>
                    </div>
                    <button className='w-full text-purple-500 border border-purple-300 p-2 rounded hover:bg-purple-800 hover:text-white transition-all duration-300'>Add to Cart</button>
                </div>
                <div className="slick-product">
                    <Image
                        src={two} // Use the imported image
                        alt="Company Logo"
                        width={250}   // Set the width as needed
                        height={650}  // Set the height as needed
                        placeholder="blur"  // Enable blur-up effect
                        layout="responsive"
                    />
                    <div className="flex justify-between m-2">
                        <h6>Hoodie</h6>
                        <h3>BDT 2,300</h3>
                    </div>
                    <button className='w-full text-purple-500 border border-purple-300 p-2 rounded hover:bg-purple-800 hover:text-white transition-all duration-300'>Add to Cart</button>
                </div>
                <div className="slick-product">
                    <Image
                        src={three} // Use the imported image
                        alt="Company Logo"
                        width={250}   // Set the width as needed
                        height={650}  // Set the height as needed
                        placeholder="blur"  // Enable blur-up effect
                        layout="responsive"
                    />
                    <div className="flex justify-between m-2">
                        <h6>Plazu</h6>
                        <h3>BDT 2,300</h3>
                    </div>
                    <button className='w-full text-purple-500 border border-purple-300 p-2 rounded hover:bg-purple-800 hover:text-white transition-all duration-300'>Add to Cart</button>
                </div>
                <div className="slick-product">
                    <Image
                        src={four} // Use the imported image
                        alt="Company Logo"
                        width={250}   // Set the width as needed
                        height={650}  // Set the height as needed
                        placeholder="blur"  // Enable blur-up effect
                        layout="responsive"
                    />
                    <div className="flex justify-between m-2">
                        <h6>Jacket</h6>
                        <h3>BDT 2,300</h3>
                    </div>
                    <button className='w-full text-purple-500 border border-purple-300 p-2 rounded hover:bg-purple-800 hover:text-white transition-all duration-300'>Add to Cart</button>
                </div>
            </Slider>
            <Link href="/" className="text-center font-bold text-white p-2 bg-purple-800 rounded m-auto block w-32">See More</Link>
        </div>
    );
};

export default RelatedProducts;
