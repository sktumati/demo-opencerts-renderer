import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

const borderStyle = {
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#d5effc"
};

const KeyValueComponent = (key, value) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  return (
    <div key={key} style={borderStyle}>
      <div
        className="p-4"
        style={{ backgroundColor: "#d5effc" }}
        onClick={toggleShow}
      >
        {key}
      </div>
      <div className={`p-4 text-truncate ${show ? "" : "d-none"}`}>
        {NestedComponent({ children: value })}
      </div>
    </div>
  );
};

export const NestedComponent = ({ children }) => {
  if (typeof children !== "object") {
    return children.toString();
  } else {
    const grandchildren = Object.keys(children).map(key =>
      KeyValueComponent(key, children[key])
    );
    return <div style={borderStyle}>{grandchildren}</div>;
  }
};

const Template = ({ document }) => (
  <div className="container">
    <NestedComponent>{document}</NestedComponent>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};

export default Template;
