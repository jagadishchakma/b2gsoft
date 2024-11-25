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
import { FaLongArrowAltLeft } from 'react-icons/fa';

const Collection = ({ collections, speed }) => {
    // Reference to the slider
    const sliderRef = useRef(null);

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: speed,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Disable default arrows to use custom buttons
    };

    return (
        <div>
            <div className='max-w-[1280px] m-auto px-2 py-3 mt-10'>
                <div style={{ position: 'relative' }} >
                    <Slider ref={sliderRef} {...settings}>
                        {
                            collections.map((collection) => (
                                <div className={`!flex ${collection.direction} gap-5 sm:gap-10 items-center`} key={collection.id}>
                                    <div className='bg-[#edebfa] relative h-[400px]'>
                                        <div>
                                            <Image
                                                src={collection.image}
                                                alt="offer"
                                                height={400}
                                                crossOrigin="anonymous"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className='text-2xl sm:text-3xl font-bold'>{collection.name}</h2>

                                        <div className='flex items-center mg-2 sm:mt-5 mb-5'>
                                            <Link href="/" className='rounded-2xl bg-[#8e70e0] px-5 py-1 text-white'>Shop Now</Link>
                                            <span className='rounded-full bg-[#8e70e0] p-2 text-white'><FaLongArrowAltLeft className='transform [rotate:120deg]' /></span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>

    );
};

export default Collection;
