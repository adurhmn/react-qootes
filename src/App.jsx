import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import People from "./pages/People";
import Sections from "./pages/Sections";
import QuoteFeed from "./pages/QuoteFeed";

const App = function () {
  return (
    <Fragment>
      <Switch>
        <Route path="/react-qootes" exact>
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/react-qootes/people" exact>
          <Header />
          <People />
          <Footer />
        </Route>
        <Route path="/react-qootes/sections" exact>
          <Header />
          <Sections />
          <Footer />
        </Route>
        <Route path="/react-qootes/:category/:subCategory" exact>
          <QuoteFeed />
          <Footer />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
