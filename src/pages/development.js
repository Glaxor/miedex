import * as React from "react";
import Layout from "../components/layout";
import Feature from "../components/page_feature";
import PageHero from "../components/page_hero";
import PageSummary from "../components/page_summary";
import Seo from "../components/seo";
import { features } from "../data/development/features";

const DevelopmentPage = () => {
  return (
    <Layout pageTitle="Software Development">
      <PageHero
        title={"Software Development"}
        description="Our software development process is agile, collaborative, and efficient, ensuring that we deliver high-quality software solutions that meet your unique requirements on time and within budget."
      />

      <PageSummary
        text={
          "Welcome to our software development page, where we provide customized software solutions to meet the unique needs of businesses across various industries. Our team of expert developers has years of experience in developing scalable and robust software solutions that help businesses improve their productivity, efficiency, and profitability. We specialize in developing software applications for businesses of all sizes, including startups, small and medium-sized enterprises, and large corporations. Our software development process is agile and collaborative, ensuring that we deliver high-quality software solutions that meet your requirements on time and within budget."
        }
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {features.map((feature, index) => (
            <Feature {...feature} index={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Software Development" />;

export default DevelopmentPage;
