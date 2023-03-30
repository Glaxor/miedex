import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import TextTransition, { presets } from "react-text-transition";
import CustomButton from "./custom_button";

const TEXTS = [
  "reduce costs",
  "improve efficiency",
  "achieve their business objectives",
];

const App = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TextTransition
      springConfig={presets.wobbly}
      inline={true}
      breakLines={false}
      className={"text-md font-semibold text-gray-800"}
    >
      {TEXTS[index % TEXTS.length]}
    </TextTransition>
  );
};

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-yellow-50 via-cyan-100 to-red-100  rounded-xl">
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow  w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-3xl text-2xl mb-4  font-semibold  text-gray-800">
            Tailor-made outsourcing solutions
          </h1>
          <p className="mb-0 leading-relaxed text-md">
            Our team of expert professionals has years of experience in
            providing outsourcing services that
          </p>
          <p className="mb-8 leading-relaxed text-md">
            help businesses <App />
          </p>
          <div className="justify-center space-x-2">
            <CustomButton title={"Contact us"} to="/contact" type={"primary"} />
          </div>
        </div>

        <div className="relative lg:h-48 lg:max-w-lg justify-center items-center ">
          <div class="flex flex-1">
            <StaticImage
              imgClassName="object-cover object-center rounded "
              alt="Outscourcing"
              src="../images/January_life_style_working.png"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
