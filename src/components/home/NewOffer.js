import Image from 'next/image';
import offer from '@/assets/images/collection/offer.png';
import Link from 'next/link';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const NewOffer = () => {
    return (
        <div className='max-w-[1280px] m-auto py-3 mt-10'>
            <div className='bg-[#edebfa] px-10 sm:px-6 lg:px-8'>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className='flex flex-col justify-center sm:justify-start items-center sm:items-start mt-10 sm:m-0 mb-10'>
                        <p className='dancing-script-deal text-2xl font-bold text-purple-600'>Big Deal</p>
                        <h2 className='text-3xl mt-5 text-center'><span className='text-purple-500'>30%</span> Off for New Customers</h2>
                        <div className='flex items-center mt-5'>
                            <Link href="/" className='rounded-2xl bg-[#8e70e0] px-5 py-1 text-white'>Shop Now</Link>
                            <span className='rounded-full bg-[#8e70e0] p-2 text-white'><FaLongArrowAltLeft className='transform [rotate:120deg]' /></span>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={offer}
                            alt="offer"
                            height={438}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewOffer;