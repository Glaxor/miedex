import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-yellow-50 via-cyan-100 to-red-100  rounded-xl">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-2/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4  font-semibold text-cyan-900">
            Before they sold out
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="justify-center space-x-2">
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border bg-cyan-800 rounded text-white border-emerald-500 hover:border-transparent hover:text-emerald-900 hover:bg-white mt-4 lg:mt-0"
            >
              Contact us
            </a>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border bg-red-600 rounded text-white border-red-500 hover:border-transparent hover:text-red-900 hover:bg-white mt-4 lg:mt-0"
            >
              Contact us
            </a>
          </div>
        </div>
        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
          <StaticImage
            imgClassName="object-cover object-center rounded"
            alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
            src="../images/January_life_style_working_63.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
