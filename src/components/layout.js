import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import { container } from "./layout.module.css";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <Header pageTitle={pageTitle} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
