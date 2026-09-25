import Image from "next/image";
import Logo from "@/assets/logo.png";
import React from "react";
import Link from "next/link";
import BadgeCounter from "../Nav/BadgeCounter";
import NavLinks from "../Nav/NavLinks";

const Nav = () => {
  return (
    <div className="bg-black border-cyan-200/10 border">
      <nav className="container mx-auto">
        <div className="navbar">
          {/* Logo and Mobile Menu */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden text-white"
              >
                <svg
                  aria-label="Menu"
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
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-[#15171e] rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2 border border-gray-800"
              >
                <NavLinks />
              </ul>
            </div>

            <Image src={Logo} width={28} height={28} alt="Logo" />
            <Link
              href="/"
              className="ml-4 text-2xl font-bold font-oswald text-white"
            >
              FITLOG
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-2 gap-2">
              <NavLinks />
            </ul>
          </div>

          <div className="navbar-end flex gap-10">
            <BadgeCounter />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
