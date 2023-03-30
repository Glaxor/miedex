import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CustomButton from "./custom_button";

const PageHero = ({ title, description, action = true }) => {
  return (
    <section className="rounded-xl text-gray-600 body-font bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-yellow-50 via-cyan-100 to-red-100">
      <div className="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {title}
          </h1>
          <p className="mb-8 leading-relaxed">{description}</p>
          {action && (
            <div className="flex justify-center">
              <CustomButton
                title={"Contact us"}
                to="/contact"
                type={"primary"}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
