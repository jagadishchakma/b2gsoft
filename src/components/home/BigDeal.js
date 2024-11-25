'use client'
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';
import Rating from '../global/Rating';
import Deal from '../global/Deal';
import bigDeals from '@/data/bigDeals';
import LeftArrowBtn from '../global/LeftArrowBtn';
import RightArrowBtn from '../global/RightArrowBtn';

const BigDeal = () => {
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
        <div>
            <div className='max-w-[1280px] m-auto px-2 sm:px-0 py-3 mt-10'>
                <div style={{ position: 'relative' }}>
                    {/* Custom buttons positioned as desired */}
                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-purple-500 text-sm'>SUMMER</h3>
                            <h6 className='font-bold text-lg'>Big Deal</h6>
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

                    {/* Slider with custom navigation */}
                    <Slider ref={sliderRef} {...settings}>
                        {
                            bigDeals.map((bigdeal, index) => (
                                <div className="!flex flex-col gap-4 justify-between" key={Math.random()}>
                                    {
                                        bigdeal.map((deal, index) => (

                                            <div className="slick-product" key={deal.id}>
                                                <Link href={`/product/details/${deal.id}/`}>
                                                    <Deal deal={deal.deal} />
                                                    <Image
                                                        src={deal.img} // Use the imported image
                                                        alt="Company Logo"
                                                        placeholder="blur"  // Enable blur-up effect
                                                        height={200}
                                                        className='m-auto'
                                                    />
                                                    <Rating rating={deal.rating} review={deal.review} />
                                                    <div className="flex justify-between m-2">
                                                        <h6>{deal.title}</h6>
                                                        <h3>BDT {deal.price}</h3>
                                                    </div>
                                                </Link>
                                                <button className='w-full text-purple-500 border border-purple-300 p-2 rounded hover:bg-purple-800 hover:text-white transition-all duration-300'>Add to Cart</button>
                                            </div>

                                        ))
                                    }
                                </div>
                            ))
                        }
                    </Slider>
                    <Link href="/" className="text-center font-bold text-white p-2 bg-purple-800 rounded m-auto block w-32">See More</Link>
                </div>
            </div>
        </div>
    );
};

export default BigDeal;
