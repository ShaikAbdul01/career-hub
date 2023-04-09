import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3BottomRightIcon,
  BeakerIcon,
  BoltIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Job Hunter
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              className="btn-primary"
            >
              Star Applying
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <div classNameName="lg:hidden">
                {/* Dropdown Open Button */}
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <Bars3BottomRightIcon classNameName="w-5 text-gray-600" />
                </button>
                {isMenuOpen && (
                  <div classNameName="absolute top-0 left-0 w-full z-10">
                    <div classNameName="p-5 bg-white border rounded shadow-sm">
                      {/* Logo & Button section */}
                      <div classNameName="flex items-center justify-between mb-4">
                        <div>
                          <Link to="/" classNameName="inline-flex items-center">
                            <BoltIcon classNameName="h-6 w-6 text-blue-500" />
                            <span classNameName="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                              nextPage
                            </span>
                          </Link>
                        </div>
                        {/* Dropdown menu close button */}
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <XMarkIcon classNameName="w-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      {/* Mobile Nav Items Section */}
                      <nav>
                        <ul classNameName="space-y-4">
                          <li>
                            <Link to="/" classNameName="default">
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/statistics"
                              classNameName="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                            >
                              Statistics
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/jobs"
                              classNameName="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                            >
                              Applied Jobs
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/blog"
                              classNameName="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                            >
                              Blog
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/statistics"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Statistics
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Applied Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
