import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DocumentViewer from "./components/documentViewer";
import templateRegistry from "./templates"; // why this dependency

ReactDOM.render(
  <DocumentViewer templateRegistry={templateRegistry} />,
  document.getElementById("root")
);
