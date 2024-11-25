'use client'
import { useState } from "react";
import Rating from "../global/Rating";
import { FaPlus, FaMinus } from 'react-icons/fa';

const ProductInfo = () => {
    const [quantity, setQuantity] = useState(0);
    const [size, setSize] = useState('S')

    /* ---------- HANDLE PRODUCT ADD QUANTITY START ---------- */
    const handleQuantity = (type) => {
        console.log(type)
        if (type === 'decrease') {
            if (quantity > 0) {
                setQuantity((prevQuan) => prevQuan - 1)
            }
        }
        if (type === 'increase') {
            setQuantity((prevQuan) => prevQuan + 1)
        }
    }
    /* ---------- HANDLE PRODUCT ADD QUANTITY END ---------- */

    return (
        <div>
            <h6 className='inline-block rounded bg-gray-600 px-8 py-0.5 text-white'>New Arrival</h6>
            <h1 className="font-bold text-2xl mt-3">White Hoodle</h1>
            <div className="mt-2 flex items-center gap-3">
                <Rating rating={4} review='4.0' />
                <span className="text-purple-400">121 Reviews</span>
            </div>
            <h4 className="mt-4 font-bold text-xl">BDT 2500</h4>

            <div className="flex flex-col sm:flex-row justify-between  gap-3 border-t border-b border-gray-300 py-10 mt-5 mb-5 px-2">
                <div>
                    <h3 className="font-bold">Available Size</h3>
                    <div className="flex gap-10 text-purple-400 mt-4">
                        <span className={`px-2 py-1 cursor-pointer ${size == 'S' && 'outline outline-purple-400 rounded'}`} onClick={() => setSize('S')}>S</span>
                        <span className={`px-2 py-1 cursor-pointer ${size == 'M' && 'outline outline-purple-400 rounded'}`} onClick={() => setSize('M')}>M</span>
                        <span className={`px-2 py-1 cursor-pointer ${size == 'L' && 'outline outline-purple-400 rounded'}`} onClick={() => setSize('L')}>L</span>
                        <span className={`px-2 py-1 cursor-pointer ${size == 'XL' && 'outline outline-purple-400 rounded'}`} onClick={() => setSize('XL')}>XL</span>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold">Available Color</h3>
                    <div className="flex gap-3 mt-4">
                        <div>
                            <input type="radio" onChange={() => { }} value="Off White" /> Off White
                        </div>
                        <div>
                            <input type="radio" onChange={() => { }} checked={true} value="Black" /> Black
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-bold">Quantity</h3>
                <div className="flex items-center gap-3 bg-purple-200 rounded-3xl w-24 justify-between px-4 py-1 mt-2">
                    <span className="text-[10px] cursor-pointer" onClick={() => handleQuantity('decrease')}><FaMinus /></span>
                    <span>{quantity}</span>
                    <span className="text-[10px] cursor-pointer" onClick={() => handleQuantity('increase')}><FaPlus /></span>
                </div>
            </div>

            <div className="flex items-center gap-5 mt-5 flex-col sm:flex-row">
                <button className="text-center w-full bg-purple-500 text-white sm:w-1/2 rounded p-1">Buy Now</button>
                <button className="text-center w-full text-purple-500 border border-purple-400 sm:w-1/2 rounded p-1">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductInfo;