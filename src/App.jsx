import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import People from "./pages/People";
import Sections from "./pages/Sections";
import QuoteFeed from "./pages/QuoteFeed";
import LayoutWrapper from "./components/wrapper/LayoutWrapper";

const App = function () {
  return (
    <LayoutWrapper>
      <Switch>
        <Route path="/react-qootes" exact>
          <Home />
        </Route>
        <Route path="/react-qootes/people" exact>
          <People />
        </Route>
        <Route path="/react-qootes/sections" exact>
          <Sections />
        </Route>
        <Route path="/react-qootes/:category/:subCategory" exact>
          <QuoteFeed />
        </Route>
      </Switch>
    </LayoutWrapper>
  );
};

export default App;
