"use client"
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export default function ContactInfo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-green-700 text-white">
            <button 
                className="md:hidden w-full py-2 px-4 flex items-center justify-between"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-black"><DensityMediumIcon/> Top Menu</span>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center px-4 py-2 space-y-2 md:space-y-0">
                    <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6 space-y-2 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <FaPhoneAlt />
                            <span>+254 723025577</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaEnvelope />
                            <a href="mailto:ujamaafoundation6@gmail.com" className="hover:underline">
                                ujamaafoundation6@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaMapMarkerAlt />
                            <span>Wajir, Kenya</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="https://www.facebook.com/profile.php?id=100069361610849&mibextid=ZbWKwL" className="hover:text-gray-300" target="_blank">
                            <FaFacebookF />
                        </Link>
                        <Link href="https://x.com/UjamaaFoundtion?t=Tip1_p69pLxAkDSnW7kGqA&s=09" target="_blank" className="hover:text-gray-300">
                            <FaTwitter />
                        </Link>
                        <Link href="https://www.instagram.com/ujamaa_foundation06" target="_blank" className="hover:text-gray-300">
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}