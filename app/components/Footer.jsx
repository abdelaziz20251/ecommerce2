// app/components/Footer.jsx
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhoneIphone } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-[#1f1f1f] text-white py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Contact Info */}
                <div>
                    <h3 className="font-bold mb-4">Contact Info</h3>
                    <p className="flex items-center gap-2"><MdLocationOn /> 15 El Maadi, Cairo</p>
                    <p className="flex items-center gap-2 mt-2"><MdEmail /> Sales@amit.com</p>
                    <p className="flex items-center gap-2 mt-2"><MdPhoneIphone />+2001158300617</p>

                    <div className="flex gap-3 mt-4 text-lg">
                        <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
                        <a href="#"><FaTwitter className="hover:text-sky-400" /></a>
                        <a href="#"><FaGooglePlusG className="hover:text-red-500" /></a>
                        <a href="#"><FaYoutube className="hover:text-red-600" /></a>
                        <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
                    </div>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="font-bold mb-4">Useful Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* My Account */}
                <div>
                    <h3 className="font-bold mb-4">OUR BRANCHES</h3>
                    <ul className="space-y-2">
                        <li><a href="#">Awel Makram</a></li>
                        <li><a href="#">El-Maadi</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-bold mb-4">Subscribe Our Newsletter</h3>
                    <p className="mb-4">
                        If you want to get an email from us every time we have a new special offer,
                        then sign up here!
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            className="p-2 rounded-l-lg text-black w-full"
                        />
                        <button className="bg-red-500 p-3 rounded-r-lg">
                            <MdEmail size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
