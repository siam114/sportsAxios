import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [open,setOpen] = useState(false);
  const links = (
    <div className="flex flex-col md:flex-row gap-2 md:gap-5">
      <NavLink to='/'>Home</NavLink>
      <NavLink to="/allSports">All Sports Equipment</NavLink>
      <NavLink to='/addEquipment'>Add Equipment</NavLink>
      <NavLink to='/allList'>My Equipment List</NavLink>
    </div>
  );
  return (
    <div className="navbar bg-[#273248] text-white w-full mx-auto md:px-10 py-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} onClick={()=>setOpen(!open)} className="btn btn-sm !px-1.5 text-xl lg:hidden">
          {
            open === true? <IoCloseSharp /> : <IoMdMenu />
          }
          </div>
          {
            open && <ul
            tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 font-semibold text-black rounded-box z-[50] mt-3 w-52 p-5 shadow"
          >
            {links}
          </ul>
          }
        </div>
        <Link to='/' className="font-bold ml-2 text-2xl">SportAxis</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to='/auth/login' className="btn btn-sm font-semibold">Login</Link>
      </div>
    </div>
  );
};

export default Header;
