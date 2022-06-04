import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const LayoutWrapper = (props) => {
  return (
    <Fragment>
      <Route
        path={[
          "/react-qootes/",
          "/react-qootes/people",
          "/react-qootes/sections",
        ]}
        exact
      >
        <Header />
      </Route>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default LayoutWrapper;
