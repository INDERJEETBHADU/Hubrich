import React from "react";
import Commnbtn from "../common/Commnbtn";
import btnsvg from "../assets/svg/btn_common_svg.svg";

function Section11() {
  return (
    <>
      <div className=" bg_target_color">
        <div className="container">
          <div className="row pt_47 pb_48 ">
            <div className="col-md-7 d-flex justify-content-center">
              <div className="">
                <h2 className=" mb-0 text-uppercase ff-helve fw-normal text-52 lh-66 text-black">
                  Request your{" "}
                  <span className=" d-md-block">
                    <span className=" color-brown">non-binding</span> strategy
                  </span>{" "}
                  meeting now!
                </h2>
              </div>
            </div>
            <div className="col-md-5 pt-4 pt-md-0 d-flex align-items-center ">
              <div className="  d-flex align-items-center gap-3">
                <hr className=" non_binding_line" />
                <p className=" mb-0 ff-poppins fw-normal text-16  max_w_398  lh-25 text-black">
                  Click on the button below, choose an appointment and answer
                  the questions truthfully. One of our strategy consultants will
                  then contact you and conduct your free consultation. We can
                  advise you on the following topics:{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="non_binding_bg_img d-flex flex-column">
          <div className="container  d-flex flex-column flex-grow-1 justify-content-center align-items-center">
            {/* binding_box */}
            <div className=" d-flex gap-2 gap-lg-0 flex-wrap flex-lg-nowrap  justify-content-center  ">
              <div className="non_binding_box">
                <p className=" mb-0 ff-poppins fw-normal text-16 lh-25 text-white">
                  How do I let go of my EX so I can finally leave him behind?
                </p>
              </div>
              <div className="non_binding_box">
                <p className=" mb-0 ff-poppins fw-normal text-16 lh-25 text-white">
                  How does the divorce process work?
                </p>
              </div>
              <div className="non_binding_box">
                <p className=" mb-0 ff-poppins fw-normal text-16 lh-25 text-white">
                  Do I need a lawyer?
                </p>
              </div>
            </div>
            {/* below_binding_box */}
            <div className=" d-flex gap-2 gap-lg-0 flex-wrap flex-lg-nowrap justify-content-center  mt_34  ">
              <div className="non_binding_box">
                <p className=" mb-0 ff-poppins fw-normal text-16 lh-25 text-white">
                  How much will the divorce cost?
                </p>
              </div>
              <div className="non_binding_box">
                <p className=" mb-0 ff-poppins fw-normal text-16 lh-25 text-white">
                  What will happen to my children?
                </p>
              </div>
              <div className="non_binding_box">
                <p className=" mb-0 ff-poppins fw-normal text-16 lh-25 text-white">
                  What does my future as a single person look like now?
                </p>
              </div>
              <div className="non_binding_box">
                <p className=" mb-0 ff-poppins fw-normal text-16 lh-25 text-white">
                  How do I rebuild my self-esteem?
                </p>
              </div>
            </div>
            <div className=" pt-md-5  mt-3">
              <button className=" binding_btn  d-flex align-items-center gap-1 ff-inter mb-0 fw-medium  text-16 lh-24  bg-white">
                <span>
                  <img src={btnsvg} alt="btnsvg" />
                </span>
                <span className=" text_gradient text-capitalize">
                  Book a non-binding initial consultation now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section11;
