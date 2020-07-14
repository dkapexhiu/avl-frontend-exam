import React from "react";

const style = {
  display: "inline-block",
  textAlign: 'center',
  color: "#808080",
  fontSize: "10px", 
  height: "0px"
};

const rotateStyles = {
  transform: "rotate(-90deg)",
  transformOrigin: "center",
  marginTop: 20,
  marginRight: -25

}

const Label = ({text, rotate}) => (
  <div>
    <p style={{...style, ...(rotate ? rotateStyles : {})}}>{text}</p>
  </div>
);

export default Label;