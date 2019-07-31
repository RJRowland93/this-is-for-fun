import React from "react";
import Head from "next/head";

import Header from "../components/header";
import Navigation from "../components/navigation";

function Layout({ children, title = "This is for Fun!" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Navigation />
      <div className="center">{children}</div>
      <style jsx>{`
        .center {
          height: 600px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}

export default Layout;
