import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ContentCard = ({ title, description, icon }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4 max-w-xs w-full transition duration-300 ease-in-out hover:scale-110 ">
      <div className="relative border-0 border-gray-200 p-6 rounded-lg">
        <div className=" w-10 h-10 inline-flex items-center justify-center rounded-full  bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-yellow-50 via-cyan-100 to-red-100 text-emerald-900 mb-4">
          {icon}
        </div>
        <h2 className="text-lg text-emerald-900 font-medium title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed  text-sm">{description}</p>
        <div
          className="absolute rounded-lg top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden
    
    bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-yellow-50 via-cyan-100 to-red-100
    opacity-0 transition duration-300 ease-in-out hover:opacity-50"
        ></div>
      </div>
      <a
        className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
        href="https://headlessui.dev"
      >
        Learn more
        <span className="sr-only">
          , Completely unstyled, fully accessible UI components
        </span>
        <svg
          className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
          width="3"
          height="6"
          viewBox="0 0 3 6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M0 0L3 3L0 6"></path>
        </svg>
      </a>
    </div>
  );
};

const Content = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col ">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2 text-gray-900">
            Our Services
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed min-h-min text-gray-500">
            We understand that every business is unique, and that's why we offer
            a range of flexible services that can be customized to meet your
            specific requirements.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <ContentCard
            title={"BPO Services"}
            description="From data entry and customer service to technical support and financial services, we have the expertise and resources to provide you with reliable and cost-effective outsourcing solutions."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            }
          />
          <ContentCard
            title={"Software Development"}
            description="Our software development process is agile, collaborative, and efficient, ensuring that we deliver high-quality software solutions that meet your unique requirements on time and within budget."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
                />
              </svg>
            }
          />
          <ContentCard
            title={"Graphic Design"}
            description="From logo design and brand identity to marketing collateral and web design, we have the expertise and resources to deliver creative and impactful designs that help your business achieve its goals."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
