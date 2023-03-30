import * as React from "react";
import Layout from "../components/layout";
import Feature from "../components/page_feature";
import PageHero from "../components/page_hero";
import PageSummary from "../components/page_summary";
import Seo from "../components/seo";
import { features } from "../data/bpo/features";

const BpoPage = () => {
  return (
    <Layout pageTitle="BPO Services">
      <PageHero
        title={"BPO Services"}
        description="From data entry and customer service to technical support and financial services, we have the expertise and resources to provide you with reliable and cost-effective outsourcing solutions."
      />

      <PageSummary
        text={
          "Welcome to our innovative BPO Services page, where we offer tailor-made outsourcing solutions that empower businesses of all sizes to achieve their objectives with greater ease and efficiency. Our team of experienced professionals is dedicated to providing exceptional support and service to our clients, ensuring that they enjoy a hassle-free outsourcing experience.We understand that every business is unique, and that's why we offer a range of flexible BPO services that can be customized to meet your specific requirements. outsourcing solutions."
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

export const Head = () => <Seo title="BPO Services" />;

export default BpoPage;
