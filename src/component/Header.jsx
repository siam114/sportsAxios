import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [open,setOpen] = useState(false);
  const links = (
    <>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">All Sports Equipment</a>
      </li>
      <li>
        <a href="">Add Equipment</a>
      </li>
      <li>
        <a href="">My Equipment List</a>
      </li>
      <li>
        <a href="/about">About Us</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#273248] text-white w-full mx-auto px-10 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} onClick={()=>setOpen(!open)} className="btn text-2xl lg:hidden">
          {
            open === true? <IoCloseSharp /> : <IoMdMenu />
          }
          </div>
          {
            open && <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content ${open?'top-12':'-top-60'} duration-1000 absolute bg-base-100 rounded-box  w-52 p-2 shadow `}
          >
            {links}
          </ul>
          }
        </div>
        <Link to='/' className="font-bold text-2xl">SportAxis</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn font-semibold">Login</a>
      </div>
    </div>
  );
};

export default Header;
