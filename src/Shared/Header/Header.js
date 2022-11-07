import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

const Header = () => {
  return (
    <div className="navbar bg-base-200 shadow-2xl shadow-slate-500/50">
      <div className="navbar-start lg:ml-28">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="home">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="services" className="justify-between">
                Services
              </Link>
            </li>
            <li>
              <Link to="blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="flex text-sm lg:text-3xl uppercase font-bold lg:font-bold items-center">
            <img
              className="lg:h-12 lg:w-12 h-8 w-8 mr-1 lg:mr-5 rounded-full"
              src={logo}
              alt=""
            />
            <h1>Sweet Health</h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-xl font-semibold gap-10 p-0">
          <li>
            <Link to="home">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="services">Services</Link>
          </li>
          <li>
            <Link to="blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end lg:mr-28">
        <div>
          <Link to="/signin">
            <button className="btn btn-ghost text-xl font-semibold">
              Sign In
            </button>
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
