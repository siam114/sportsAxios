import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#273248] text-white rounded p-10">
        <div>
            <h2 className="text-3xl font-bold">SportAxis</h2>
            <p className="w-[500px]">SportAxis is your go-to store for high-quality sports equipment, offering a wide range of products to elevate your game and fuel your passion for sports.</p>
        </div>
      <nav className="grid grid-flow-col gap-4">
        <Link to='/' className="link link-hover">Home</Link>
        <Link to='/about' className="link link-hover">About us</Link>
        <Link to='#' className="link link-hover">Contact</Link>
        <Link to='/' className="link link-hover">All Sports Equipment</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col text-2xl gap-4">
         <a href="#" className="text-blue-500"><FaFacebook /> </a>
         <a href="#" className="text-green-500"><FaWhatsapp /> </a>
         <a href="#" className="text-blue-400"><FaTwitter /> </a>
         <a href="#" className="text-red-500"><FaYoutube /></a>
         <a href="#"><FcGoogle /></a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
