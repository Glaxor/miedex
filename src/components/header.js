import * as React from "react";
import { useState } from "react";
import classNames from "classnames";
import { Link } from "gatsby";

const MenuItem = ({ title, to, pageTitle }) => {
  console.log(pageTitle === title);
  return (
    <Link
      className={classNames(
        "block mt-4 lg:inline-block lg:mt-0 text-emerald-900 -200 hover:text-grey mr-4 transition ease-in-out delay-50 hover:border-emerald-900 border-b-2 ",
        {
          "border-b-2 border-emerald-900": pageTitle == title,
          "border-transparent": pageTitle != title,
        }
      )}
      to={to}
    >
      {title}
    </Link>
  );
};

const Header = ({ pageTitle }) => {
  const [isToggled, toggle] = useState(false);
  const callback = () => {
    console.log(isToggled);
    toggle(!isToggled);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap pt-4 pb-4">
      <Link to="/">
        <div className="flex items-center flex-shrink-0 text-red-600 mr-6">
          <svg
            className="fill-current h-8 w-8 mr-1"
            width="56"
            height="56"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="rotate(0 27 27)">
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </g>
          </svg>
          <span className="font-semibold text-2xl tracking-tight text-cyan-800">
            zephyr
          </span>
        </div>
      </Link>
      <div className="block lg:hidden">
        <button
          onClick={callback}
          className="flex items-center px-3 py-2 border rounded text-teal-00 border-teal-800 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
        <div
          className={classNames("text-sm lg:ml-auto lg:inline-block", {
            hidden: !isToggled,
            "lg:inline-block lg:ml-auto": isToggled,
          })}
        >
          <MenuItem title="BPO Services" to="/bpo" pageTitle={pageTitle} />
          <MenuItem
            title="Software Development"
            to="/development"
            pageTitle={pageTitle}
          />
          <MenuItem title="Graphic Design" to="/design" pageTitle={pageTitle} />
          <button className="inline-flex text-sm px-4 py-2 leading-none border bg-cyan-800 rounded text-white border-emerald-500 hover:border-transparent hover:text-white hover:opacity-60 mt-4 lg:mt-0">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              class="w-4 h-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
              />
            </svg>
            <span>Français</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
