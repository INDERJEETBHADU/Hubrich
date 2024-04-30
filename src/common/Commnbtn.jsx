import React from "react";
import btnsvg from "../assets/svg/btn_common_svg.svg";

function Commnbtn(props) {
  return (
    <button
      className={` ${props.spacing} mb-0 ff-inter text-capitalize  text_gradient fw-medium  text-16 lh-24 cmn-btn d-flex  align-items-center gap-1 `}
    >
      <img src={btnsvg} alt="btnsvg" />

      {props.text}
    </button>
  );
}

export default Commnbtn;
