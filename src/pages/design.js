import * as React from "react";
import Layout from "../components/layout";
import Feature from "../components/page_feature";
import PageHero from "../components/page_hero";
import PageSummary from "../components/page_summary";
import Seo from "../components/seo";
import { features } from "../data/design/features";

const DesignPage = () => {
  return (
    <Layout pageTitle="Graphic Design">
      <PageHero
        title={"Graphic Design"}
        description="From logo design and brand identity to marketing collateral and web design, we have the expertise and resources to deliver creative and impactful designs that help your business achieve its goals."
      />

      <PageSummary
        text={
          "Welcome to our Graphic Design page, where we provide creative and professional graphic design solutions that help businesses stand out in today's competitive market. Our team of expert graphic designers has years of experience in creating high-quality designs that communicate the brand message effectively and leave a lasting impression on the target audience. We specialize in providing a range of graphic design services that can be customized to meet the specific needs of your business. From logo design and brand identity to marketing collateral and web design, we have the expertise and resources to deliver creative and impactful designs that help your business achieve its goals."
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

export const Head = () => <Seo title="Graphic Design" />;

export default DesignPage;
