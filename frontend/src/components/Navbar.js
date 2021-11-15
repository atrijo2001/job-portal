import React, { useState, useContext } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const authContext = useContext(AuthContext);
  const { token, logout } = authContext;
  return (
    <>
      <nav className="bg-blueviolet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 "
                  src="https://imgur.com/VEQh5dj.png"
                  alt="Job Saviour"
                />
              </div>
              <div className="absolute hidden md:block right-10">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/"
                    className="text-darkblue px-3 py-2 rounded-md text-sm font-medium font-sans"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/about"
                    className="text-darkblue px-3 py-2 rounded-md text-sm font-medium font-sans"
                  >
                    About
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className="text-darkblue px-3 py-2 rounded-md text-sm font-medium font-sans"
                  >
                    Contact Us
                  </NavLink>

                  <NavLink
                    to="/login"
                    className="text-darkblue px-3 py-2 rounded-md text-sm font-medium font-sans"
                  >
                    Login
                  </NavLink>

                  <NavLink
                    to="/register"
                    className="text-darkblue px-3 py-2 rounded-md text-sm font-medium font-sans"
                  >
                    Register
                  </NavLink>
                  <button
                    type="button"
                    className="bg-darkblue p-1 rounded-full text-blueviolet hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-darkblue focus:ring-white"
                  >
                    <span className="sr-only">Profile</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {token && (
                    <button
                      className="cursor-pointer p-3 bg-red-700 text-white font-bold "
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-darkblue inline-flex items-center justify-center p-2 rounded-md text-blueviolet hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a className="text-darkblue block px-3 py-2 rounded-md text-base font-medium font-sans">
                  Home
                </a>

                <a
                  href="#"
                  className="text-darkblue block px-3 py-2 rounded-md text-base font-medium font-sans"
                >
                  About
                </a>

                <a
                  href="#"
                  className="text-darkblue block px-3 py-2 rounded-md text-base font-medium font-sans"
                >
                  Contact Us
                </a>

                <a
                  href="#"
                  className="text-darkblue block px-3 py-2 rounded-md text-base font-medium font-sans"
                >
                  Login
                </a>

                <a
                  href="#"
                  className="text-darkblue block px-3 py-2 rounded-md text-base font-medium font-sans"
                >
                  Register
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}

export default Navbar;
