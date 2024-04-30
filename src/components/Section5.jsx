import React from "react";
import Commnbtn from "../common/Commnbtn";
import btnsvg from "../assets/svg/btn_common_svg.svg";
import rightflower from "../assets/svg/right_flower.svg";
import leftflower from "../assets/svg/left_flower.svg";

function Section5() {
  return (
    <>
      <div className=" position-relative">
        <div className="container pb_goal_sec">
          <h2 className=" mb-0 ff-helve text-20 fw-normal lh-28 text-center text-black mt-5">
            In a 1:1 live coaching session, we will clarify the following
            questions in particular:
          </h2>
          <div className="  mt-4 pt-1  d-flex gap-1 gap-lg-0  justify-content-center flex-wrap flex-lg-nowrap">
            <div className="session_box d-flex justify-content-center align-items-center">
              <h5 className=" mb-0 text-capitalize ff-poppins fw-normal text-16 lh-25  color-grey">
                Why does your EX have to{" "}
                <span className=" d-block">
                  disappear from your life forever?
                </span>
              </h5>
            </div>
            <div className="session_box d-flex justify-content-center align-items-center">
              <h5 className=" mb-0 ff-poppins fw-normal  text-capitalize text-16 lh-25  color-grey">
                What should your everyday life as{" "}
                <span className=" d-block">
                  a single person look like now and
                </span>{" "}
                how can you cope with the new{" "}
                <span className=" d-block">challenges?</span>
              </h5>
            </div>
            <div className="session_box d-flex justify-content-center align-items-center">
              <h5 className=" mb-0 ff-poppins fw-normal  text-capitalize text-16 lh-25  color-grey">
                How can you handle the divorce the
                <span className=" d-block">
                  quickly and without complications,
                </span>{" "}
                without worrying about finances or
                <span className=" d-block">well-being of the children?</span>
              </h5>
            </div>
          </div>
          <div className="   d-flex flex-wrap gap-1 gap-lg-0 mt-lg-0  mt-2 justify-content-center flex-lg-nowrap align-items-center ">
            <div className="session_box d-flex justify-content-center align-items-center">
              <h5 className=" mb-0 text-capitalize ff-poppins fw-normal text-16 lh-25  color-grey">
                Who are you without your EX?
              </h5>
            </div>
            <div className="session_box d-flex justify-content-center align-items-center">
              <h5 className=" mb-0 ff-poppins fw-normal  text-capitalize text-16 lh-25   color-grey">
                What new dreams and hopes do
                <span className=" d-block"> you want to live?</span>
              </h5>
            </div>
            <div className=" max_w_380 d-flex justify-content-center">
              <button className=" mb-0 ff-inter text_gradient fw-medium  text-16 lh-24 max_w_292 session-btn  d-flex align-items-center text-capitalize  ">
                <img src={btnsvg} alt="btnsvg" />
                <span className="">
                  Book a  non-binding initial consultation now
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* text_gaol */}
        <div className="goal_text_line_pos d-xxl-block d-none position-absolute">
          <div className=" d-flex  align-items-baseline">
            <div className="goal_bordr_box"></div>
            <p className="  mb-0 ff-helve fw-normal text-40 lh-51 text-black   translate_skew ">
              03
            </p>
            <p className=" ff-helve fw-normal mb-0 text-24 lh-3091 text-black text-uppercase  mt-2">
              Goal
            </p>
          </div>
        </div>
        {/* right_flower */}
        <div className="rightflower_pos d-none d-xl-block position-absolute">
          <img src={rightflower} alt="leftflower" />
        </div>
        {/* left_flower */}
        <div className="leftflower_pos d-none d-xl-block position-absolute">
          <img src={leftflower} alt="leftflower" />
        </div>
      </div>
    </>
  );
}

export default Section5;
