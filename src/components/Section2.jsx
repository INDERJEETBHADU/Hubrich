import React from "react";
import faultellipse from "../assets/png/faltu_ellipse.png";

function Section2() {
  return (
    <div>
      <div className=" position-relative">
        <div className="container">
          {/* small_screeen */}
          <div className=" d-flex d-lg-none align-items-center">
            {" "}
            <p className="  mb-0 ff-helve fw-normal text-40 lh-51 text-black   ">
              01
            </p>
            <p className=" ff-helve fw-normal mb-0 text-24 lh-3091 text-black text-uppercase  mt-2">
              fault
            </p>
          </div>
          {/* small_screeen */}

          <div className=" position-absolute d-none d-lg-block text_pos">
            <div className=" position-relative">
              <div className="">
                {" "}
                <div className=" mt-5 pt-2 ">
                  <p className=" mb-0 ff-poppins fw-light position-absolute MJH_pos  text-20 lh-34 lts-45 text-black translate_skew">
                    MJH
                  </p>
                </div>
              </div>
              <div className=" d-flex  align-items-baseline">
                <div className="text_line"></div>
                <p className="  mb-0 ff-helve fw-normal text-40 lh-51 text-black   translate_skew ">
                  01
                </p>
                <p className=" ff-helve fw-normal mb-0 text-24 lh-3091 text-black text-uppercase  mt-2">
                  fault
                </p>
              </div>
            </div>
          </div>
          <div className="row fault_padding">
            <div className="col-md-7 col-12  d-flex justify-content-lg-end justify-content-center">
              <div className=" max_w_412 w-100 ">
                <h2 className=" mb-0 fw-normal text-60  lh-77">
                  IT'S NOT{" "}
                  <span className=" d-block text-end">
                    <span className=" color-brown">YOUR</span> FAULT!
                  </span>
                </h2>
              </div>
            </div>
            <div className="col-md-5 pt-4 pt-md-0 col-12   align-items-start d-flex justify-content-center">
              <div className=" d-flex align-items-center  gap-3 mt-2">
                <hr className=" fault_line" />
                <p className=" mb-0  ff-poppins fw-normal text-16 lh-25  text-black mx_w_288">
                  It's not your fault for not knowing how to let go of the
                  partner who no longer made you feel special.
                </p>
              </div>
            </div>
          </div>

          {/* text---here */}
          <div className="  mt-lg-2 mt-0 pt-lg-5 pt-4 mb-4 pb-1">
            <p className="  mb-0 ff-helve fw-normal text-20 lh-28 text-center  text-capitalize text-black">
              How would you know when you are busy with completely different
              things at the moment:
            </p>
          </div>
        </div>
        <div className="faultellipse_pos d-none d-xl-block position-absolute">
          <img src={faultellipse} alt="faultellipse" />
        </div>
      </div>
    </div>
  );
}

export default Section2;
