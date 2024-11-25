import React from 'react';
import { FaShippingFast, FaRecycle, FaCreditCard } from 'react-icons/fa';


const Features = () => {
    return (
        <div className="bg-purple-950">
            <div className="max-w-[1280px] m-auto px-2 py-3">
                <div className='flex-col flex justify-between items-start gap-2 sm:flex-row text-white'>
                    <div className="flex justify-start items-start gap-2">
                        <div>
                            <FaShippingFast className="h-5 w-5" />
                        </div>
                        <div>
                            <h4>FREE SHIPPING</h4>
                            <h6 className='text-gray-300 text-xs'>BUY BDT 3000+ & GET FREE DELIVERY</h6>

                        </div>
                    </div>
                    <div className="flex justify-start items-start gap-2">
                        <div>
                            <FaRecycle className="h-5 w-5" />
                        </div>
                        <div>
                            <h4>7 DAYS EXCHANGE</h4>
                            <h6 className='text-gray-300 text-xs'>EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS</h6>

                        </div>
                    </div>

                    <div className="flex justify-start items-start gap-2">
                        <div>
                            <FaCreditCard className="h-5 w-5" />
                        </div>
                        <div>
                            <h4>100% PAYMENT SECURE</h4>
                            <h6 className='text-gray-300 text-xs'>CASH ON DELIVERY AND SECURED ONLINE PAYMENT</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;