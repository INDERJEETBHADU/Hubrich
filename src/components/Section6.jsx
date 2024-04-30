import React from "react";

function Section6() {
  return (
    <>
      <div className="bg_target_color">
        <div className="container pb-1">
          <div className="row pt-md-5 pt-4 pb-md-5 pb-4 ">
            <div className="col-sm-7 col-12 d-flex justify-content-sm-end justify-content-center align-items-center">
              <div className="">
                <h4 className=" mb-0  text-uppercase ff-helve fw-normal text-52 lh-66 text-black">
                  <span className=" color-brown">TARGET</span> group
                </h4>
              </div>
            </div>
            <div className="col-sm-5 pt-2 pt-sm-0 col-12 d-flex justify-content-center justify-content-sm-end">
              <div className=" d-flex align-items-center gap-3">
                <hr className=" header_line" />
                <p className=" mb-0 ff-poppins fw-normal text-16 lh-25 text-black">
                  The coaching is aimed at married women{" "}
                  <span className=" d-md-block">
                    who have already separated or are
                  </span>{" "}
                  thinking of separating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bangle__bg_part */}
      <div className="bangle_bg_img  position-relative d-flex flex-column">
        <div className="container d-flex flex-column  justify-content-center align-items-center   align-items-md-start flex-grow-1">
          <div className=" d-flex flex-column  gap_32">
            <div className=" target_box">
              <p className=" ff-helve text-capitalize mb-0 fw-normal text-16 lh-25 text-white max_w_312">
                You have separated and have the{" "}
                <span className=" d-block">
                  feeling that you can never be happy
                </span>{" "}
                again and that you will be alone{" "}
                <span className=" d-block">forever.</span>
              </p>
            </div>
            <div className=" target_box">
              <p className=" ff-helve text-capitalize mb-0 fw-normal text-16 lh-25 text-white max_w_312">
                You have separated and have the{" "}
                <span className=" d-block">
                  feeling that you can never be happy
                </span>{" "}
                again and that you will be alone{" "}
                <span className=" d-block">forever.</span>
              </p>
            </div>
            <div className=" target_box d-md-none">
              <p className=" ff-helve text-capitalize mb-0 fw-normal text-16 lh-25 text-white max_w_312">
                To understand how to let go of your partner, you need a detailed
                step-by-step action plan, which you will receive from me in a
                1:1 coaching session.
              </p>
            </div>
          </div>
          <div className="target_pos_box d-none d-md-block position-absolute">
            <p className=" mb-0  ff-poppins fw-normal text-16 lh-25 text-white">
              To understand how to let go of your partner, you need a detailed
              step-by-step action plan, which you will receive from me in a 1:1
              coaching session.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
