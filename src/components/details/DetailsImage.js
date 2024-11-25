'use client'
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import one from '@/assets/images/details/one.png';
import two from '@/assets/images/details/two.png';
import three from '@/assets/images/details/three.png';
import four from '@/assets/images/details/four.png';
import five from '@/assets/images/details/five.png';
import Image from 'next/image';
import Link from 'next/link';
import LeftArrowBtn from '../global/LeftArrowBtn';
import RightArrowBtn from '../global/RightArrowBtn';


const DetailsImage = () => {
    const [images, setImages] = useState([one, two, three, four, five])
    // Reference to the slider
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    // Function to change the active slide
    const goToSlide = (index) => {
        setActiveSlide(index);
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };
    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
        <>
            <div style={{ position: 'relative' }}>

                <button
                    onClick={() => sliderRef.current.slickPrev()}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '24px',
                        color: 'black',
                        margin: '10px',
                        position: 'absolute',
                        left: '25px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: '1000'
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
                        position: 'absolute',
                        right: '25px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: '1000'
                    }}
                >
                    <RightArrowBtn />
                </button>

                {/* Slider with custom navigation */}
                <Slider ref={sliderRef} {...settings}>

                    {
                        images.map((image, index) => (
                            <div key={index} >
                                <Image
                                    src={image} // Use the imported image
                                    alt="Company Logo"
                                    height={400}
                                    placeholder="blur"  // Enable blur-up effect
                                    className='m-auto'
                                />
                            </div>
                        ))
                    }

                </Slider>
            </div>
            <div className="flex flex-row">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`thumbnail-box cursor-pointer m-2 bg-indigo-200 p-2 rounded ${activeSlide === index ? 'outline outline-2 outline-blue-500' : ''
                            }`}
                        onClick={() => goToSlide(index)}
                    >
                        <Image src={image} height={100} alt={`Thumbnail ${index + 1}`} className="thumbnail-image" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default DetailsImage;
