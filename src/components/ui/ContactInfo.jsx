"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";
import Link from "next/link";

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
                <Link href="https://www.facebook.com/profile.php?id=100069361610849&mibextid=ZbWKwL" className="hover:text-gray-300" target="_blank">
                    <FaFacebookF />
                </Link>
                <Link href="https://x.com/UjamaaFoundtion?t=Tip1_p69pLxAkDSnW7kGqA&s=09" target="_black" className="hover:text-gray-300">
                    <FaTwitter />
                </Link>
                <Link href="https://www.instagram.com/ujamaa_foundation06" target="_blank" className="hover:text-gray-300">
                    <FaInstagram />
                </Link>
            </div>
        </div>
    );
}
