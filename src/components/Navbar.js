'use client'
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';
import logo from '@/assets/images/logo_black.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const pathname = usePathname()

    // Close search box when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-[#f4f2ff] sticky top-0 w-full z-10">
            <div className="max-w-[1280px] m-auto px-2 py-3">
                <div className="flex items-center justify-between">

                    {/* Left Section - Logo and Mobile Menu Toggle */}
                    <div className="flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="md:hidden inline-flex items-center justify-center pr-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-200 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                                />
                            </svg>
                        </button>
                        <Link href="/" passHref className="text-black text-lg font-semibold cursor-pointer">
                            <Image
                                src={logo} // Use the imported image
                                alt="Company Logo"
                                height={25}  // Set the height as needed
                                placeholder="blur"  // Enable blur-up effect
                            />
                        </Link>
                    </div>

                    {/* Center Section - Menu Links */}
                    <div className="hidden md:flex justify-center flex-1">
                        <div className="flex items-baseline space-x-4">
                            <Link
                                href="/"
                                passHref
                                className={`text-gray-800 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${pathname=='/' && 'text-purple-600'}`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                passHref
                                className={`text-gray-800 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${pathname=='/about' && 'text-purple-600'}`}
                            >
                                About
                            </Link>
                            <Link
                                href="/services"
                                passHref
                                className={`text-gray-800 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${pathname=='/service' && 'text-purple-600'}`}
                            >
                                Services
                            </Link>
                            <Link
                                href="/contact"
                                passHref
                                className={`text-gray-800 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${pathname=='/conatct' && 'text-purple-600'}`}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Right Section - Search Box, Search Icon, and Cart Icon */}
                    <div className="flex items-center space-x-4">
                        {/* Search Box for Desktop View */}
                        <div className="hidden md:flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-3 py-1 rounded-md bg-white text-black focus:outline-none focus:bg-white"
                            />
                            <FaSearch className="text-gray-600" />
                        </div>

                        {/* Expanding Search Icon and Input for Mobile View */}
                        <div className="relative md:hidden flex items-center" ref={searchRef}>
                            <button
                                onClick={toggleSearch}
                                className="text-gray-600 hover:text-black focus:outline-none"
                            >
                                <FaSearch className="h-5 w-5" />
                            </button>
                            <input
                                type="text"
                                placeholder="Search..."
                                className={`absolute right-0 -top-[5px] px-3 py-1 rounded-md bg-white text-black focus:outline-none transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-40 opacity-100' : 'w-0 opacity-0'
                                    }`}
                                style={{
                                    visibility: isSearchOpen ? 'visible' : 'hidden',
                                }}
                            />
                        </div>

                        {/* Cart Icon */}
                        <button className="text-gray-600 hover:text-black relative">
                            <span className='absolute bg-black text-white text-[10px] flex items-center justify-center w-4 h-4 rounded-full top-[-10px] right-[-10px]'>0</span>
                            <FaShoppingCart className="h-5 w-5" />
                        </button>
                        <Link href="/registration"><FaUser/></Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            passHref
                            className={`text-gray-800 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${pathname=='/' && 'text-purple-600'}`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            passHref
                            className={`text-gray-800 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${pathname=='/about' && 'text-purple-600'}`}
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            passHref
                            className={`text-gray-800 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${pathname=='/service' && 'text-purple-600'}`}
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            passHref
                            className={`text-gray-800 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${pathname=='/contact' && 'text-purple-600'}`}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
