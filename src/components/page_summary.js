import * as React from "react";
const PageSummary = ({ text }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex py-4 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-4 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Services
          </h1>
          <p className=" leading-relaxed">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default PageSummary;
