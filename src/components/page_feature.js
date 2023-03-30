import * as React from "react";

const EvenFeature = ({ title, description, icon }) => {
  return (
    <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100  flex-shrink-0 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-yellow-50 via-cyan-100 to-red-100 text-cyan-500 ">
        {icon}
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-cyan-800 text-lg title-font font-bold mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{description}</p>
      </div>
    </div>
  );
};
const OddFeature = ({ title, description, icon }) => {
  return (
    <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-cyan-800 text-lg font-bold title-font  mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{description}</p>
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100  flex-shrink-0 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-yellow-50 via-cyan-100 to-red-100 text-cyan-500">
        {icon}
      </div>
    </div>
  );
};

const Feature = ({ title, description, index, icon }) => {
  return index % 2 === 0 ? (
    <EvenFeature title={title} description={description} icon={icon} />
  ) : (
    <OddFeature title={title} description={description} icon={icon} />
  );
};

export default Feature;
