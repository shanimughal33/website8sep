import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../header';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="absolute top-0 left-0 z-10 w-full p-4 text-white bg-transparent">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-2xl font-bold transition-all duration-800 hover:scale-105 hover:shadow-2xl hover:shadow-white">
          <NavLink to="/" exact>
            MyApp
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden space-x-4 md:flex">
          <NavLink
            to="/"
            exact
            className="px-6 py-3 text-lg font-bold text-transparent transition-all duration-300 ease-in-out transform bg-white border border-transparent rounded-sm bg-clip-text hover:scale-105 hover:shadow-lg hover:shadow-white hover:border-blue-500"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="px-6 py-3 text-lg font-bold text-transparent transition-all duration-300 ease-in-out transform bg-white border border-transparent rounded-sm bg-clip-text hover:scale-105 hover:shadow-lg hover:shadow-white hover:border-blue-500"
            activeClassName="bg-blue-700"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="px-6 py-3 text-lg font-bold text-transparent transition-all duration-300 ease-in-out transform bg-white border border-transparent rounded-sm bg-clip-text hover:scale-105 hover:shadow-lg hover:shadow-white hover:border-blue-500"
            activeClassName="bg-blue-700"
          >
            Contact
          </NavLink>
          <Header />
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleSidebar}>
          <div className="w-6 h-6 ">
            {isSidebarOpen ? '✕' : '☰'}
          </div>
        </button>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-transform transform ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="absolute right-0 w-64 h-full p-4 bg-black/80">
            <button className="mt-1 ml-48 text-white " onClick={toggleSidebar}>
              ✕
            </button>
            <NavLink
              to="/"
              exact
              className="block px-3 py-2 text-white rounded hover:scale-105 hover:shadow-lg hover:shadow-white hover:border-blue-500"
              activeClassName="bg-blue-700"
              onClick={toggleSidebar}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block px-3 py-2 text-white rounded hover:scale-105 hover:shadow-lg hover:shadow-white hover:border-blue-500"
              activeClassName="bg-blue-700"
              onClick={toggleSidebar}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="block px-3 py-2 text-white rounded hover:scale-105 hover:shadow-lg hover:shadow-white hover:border-blue-500"
              activeClassName="bg-blue-700"
              onClick={toggleSidebar}
            >
              Contact
            </NavLink>
            <Header/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
