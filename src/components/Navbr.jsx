import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";

function Navbr() {
  const [show, setfirst] = useState(false);
  if (show === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <nav>
        <div className="container">
          <div className=" d-flex align-items-center justify-content-between pt-4">
            <img className=" cursor_pointer" src={logo} alt="logo" />

            <ul
              className={` ${
                show ? "end-0" : "right_100"
              } d-flex align-items-center  gap_40 ff-helve mobile-view fw-normal text-16  lh-20 `}
            >
              <li>
                <a
                  onClick={() => {
                    setfirst(!show);
                  }}
                  className=" text-white color_chng"
                  href=" #benfit"
                >
                  Benifits
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setfirst(!show);
                  }}
                  className=" text-white color_chng"
                  href="#testi"
                >
                  Testimonials
                </a>
              </li>
              <li>
                {" "}
                <button className=" text-capitalize ff-inter fw-medium text-16 lh-24  text-white nav_btn text-white">
                  Book consultation now
                </button>
              </li>
            </ul>
            <div
              onClick={() => {
                setfirst(!show);
              }}
              class="menu d-block d-lg-none z_9  "
            >
              <span></span>
              <span class="my-2"></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbr;
