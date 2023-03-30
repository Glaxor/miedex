import classNames from "classnames";
import { Link } from "gatsby";
import * as React from "react";

const CustomButton = ({ title, to, type }) => {
  return (
    <Link
      to={to}
      className={classNames(
        "inline-block text-sm px-4 py-2 leading-none border rounded text-white hover:border-transparent font-bold hover:bg-opacity-70 mt-4 lg:mt-0",
        {
          "border-red-500 bg-red-600 hover:text-gray-100": type == "primary",
          "bg-transparent border-emerald-800": type == "secondary",
        }
      )}
    >
      {title}
    </Link>
  );
};

export default CustomButton;
