'use client'
import React, { useRef } from 'react';
import Slider from 'react-slick';
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

const FeaturesProduct = () => {
    const sliderRef = useRef(null);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <div className='max-w-[1280px] m-auto px-2 py-3 mt-10'>
                <div style={{ position: 'relative' }} >
                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-purple-500 text-sm'>FEATURED PRODUCT</h3>
                            <h6 className='font-bold text-lg'>New Arrivals</h6>
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
                                <LeftArrowBtn />
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
                                <RightArrowBtn />
                            </button>
                        </div>

                    </div>


                    <Slider ref={sliderRef} {...settings}>
                        <div className='slick-product'>
                            <Link href="/product/details/23/">
                                <Image
                                    src={one}
                                    alt="Company Logo"
                                    width={250}
                                    height={650}
                                    placeholder="blur"

                                />
                                <div className="flex justify-between m-2">
                                    <h6>Indian Sharee</h6>
                                    <h3>BDT 2,300</h3>
                                </div>
                                <button className='w-full text-purple-500 border border-purple-300 p-2 rounded hover:bg-purple-800 hover:text-white transition-all duration-300'>Add to Cart</button>
                            </Link>
                        </div>
                        <div className="slick-product">
                            <Link href="/product/details/23/">
                                <Image
                                    src={two}
                                    alt="Company Logo"
                                    width={250}
                                    height={650}
                                    placeholder="blur"

                                />
                                <div className="flex justify-between m-2">
                                    <h6>Hoodie</h6>
                                    <h3>BDT 2,300</h3>
                                </div>
                                <button className='w-full text-purple-500 border border-purple-300 p-2 rounded hover:bg-purple-800 hover:text-white transition-all duration-300'>Add to Cart</button>
                            </Link>
                        </div>
                        <div className="slick-product">
                            <Link href="/product/details/23/">
                                <Image
                                    src={three}
                                    alt="Company Logo"
                                    width={250}
                                    height={650}
                                    placeholder="blur"

                                />
                                <div className="flex justify-between m-2">
                                    <h6>Plazu</h6>
                                    <h3>BDT 2,300</h3>
                                </div>
                                <button className='w-full text-purple-500 border border-purple-300 p-2 rounded hover:bg-purple-800 hover:text-white transition-all duration-300'>Add to Cart</button>
                            </Link>
                        </div>
                        <div className="slick-product">
                            <Link href="/product/details/23/">
                                <Image
                                    src={four}
                                    alt="Company Logo"
                                    width={250}
                                    height={650}
                                    placeholder="blur"

                                />
                                <div className="flex justify-between m-2">
                                    <h6>Jacket</h6>
                                    <h3>BDT 2,300</h3>
                                </div>
                                <button className='w-full text-purple-500 border border-purple-300 p-2 rounded hover:bg-purple-800 hover:text-white transition-all duration-300'>Add to Cart</button>
                            </Link>
                        </div>
                    </Slider>
                    <Link href="/" className="text-center font-bold text-white p-2 bg-purple-800 rounded mt-4 m-auto block w-32">See More</Link>
                </div>
            </div>
        </div>

    );
};

export default FeaturesProduct;
