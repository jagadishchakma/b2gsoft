import Image from "next/image";
import logo from '@/assets/images/logo_white.png';
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white mt-20">
            <div className="max-w-[1280px] m-auto px-2 py-3">
                <div className="flex justify-between flex-col sm:flex-row gap-7">
                    <div>
                        <Image
                            src={logo}
                            alt="logo"
                        />
                        <p className="max-w-[500px]">
                            Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est consectetur maxime quos fugit velit assumenda est.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-xl">Sign Up For Our Newsletter!</h4>
                        <p className="max-w-[500px]">Get notified about updates and be the first to get early access to new Podcast episodes.</p>
                        <div className="grid grid-cols-2">
                            <input type="email" placeholder="Your email address" className="rounded-tl rounded-bl p-2 focus:outline-none text-black" />
                            <button className="bg-purple-700 text-white p-2 rounded">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between flex-col md:flex-row gap-4 mt-2 sm:mt-20">
                    <div>
                        <h6>Contact Us</h6>
                        <p>support@we5ive.com</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href="/" className="text-white">About Us</Link>
                        <Link href="/" className="text-white">Contuct Us</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href="/" className="text-white">Privacy Policy</Link>
                        <Link href="/" className="text-white">Terms & Condition</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h6>Social Link</h6>
                        <div className="flex gap-4 items-cetner">
                            <Link href="/" className="text-white"><FaFacebook /></Link>
                            <Link href="/" className="text-blue-300"><FaTwitter /></Link>
                            <Link href="/" className="text-blue-500"><FaLinkedin /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-purple-900 p-4 mt-20">
                <p className="text-center text-gray-300">© 2024 | We5ive</p>
            </div>
        </footer>
    );
};

export default Footer;