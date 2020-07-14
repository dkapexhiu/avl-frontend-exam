import React from "react";
import PropTypes from "prop-types";

const ChartTitle = ({ text1, text2 }) => (
  <div>
  <p style={{ textAlign: "center", marginBottom: "-2em", color: "#fff", fontSize: "10px" }}>
    {text1}
  </p><br />
  <p style={{ textAlign: "center", marginBottom: "-2em", color: "#fff", fontSize: "10px" }}>
    {text2}
  </p>
  </div>
);

ChartTitle.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired
};

export default ChartTitle;
