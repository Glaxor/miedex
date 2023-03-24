import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Hero from "../components/hero";
import Seo from "../components/seo";
import Content from "../components/content";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Hero />
      <Content />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
