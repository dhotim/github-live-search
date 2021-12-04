import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Layout } from "./components/Layout";

ReactDOM.render(
  <Layout>
    <App />
  </Layout>,
  document.getElementById("root")
);
