import * as React from "react";
import { useState } from "react";
import classNames from "classnames";

const Header = () => {
  const [isToggled, toggle] = useState(false);
  const callback = () => {
    console.log(isToggled);
    toggle(!isToggled);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap pt-4 pb-4">
      <div className="flex items-center flex-shrink-0 text-red-600 mr-6">
        <svg
          className="fill-current h-8 w-8 mr-1"
          width="56"
          height="56"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="rotate(ö 27 27)">
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </g>
        </svg>
        <span className="font-semibold text-xl tracking-tight text-cyan-800">
          yæx
        </span>
      </div>
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
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-emerald-900 -200 hover:text-grey mr-4"
          >
            Bpo Services
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-800 hover:text-grey mr-4"
          >
            Software Development
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-800 hover:text-grey mr-4"
          >
            Graphic Design
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border bg-cyan-800 rounded text-white border-emerald-500 hover:border-transparent hover:text-emerald-900 hover:bg-white mt-4 lg:mt-0"
          >
            Contact us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
