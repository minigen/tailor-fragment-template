import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PrimarySearchAppBar from "./Header";

const Routes = () => (
  <BrowserRouter>
    <Route path="*" component={PrimarySearchAppBar} />
  </BrowserRouter>
);

export default Routes;
