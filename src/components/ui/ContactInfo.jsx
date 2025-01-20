"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";

export default function ContactInfo() {
    return (
        <div className="bg-green-700 text-white flex justify-between items-center px-4 py-2">
            <div className="flex items-center space-x-6">
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
                <a href="#" className="hover:text-gray-300">
                    <FaFacebookF />
                </a>
                <a href="#" className="hover:text-gray-300">
                    <FaTwitter />
                </a>
                <a href="#" className="hover:text-gray-300">
                    <FaInstagram />
                </a>
            </div>
        </div>
    );
}
