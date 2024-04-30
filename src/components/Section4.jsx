import React from "react";
import Commnbtn from "../common/Commnbtn";
import flower from "../assets/png/flower.png";

function Section4() {
  return (
    <>
      <div className=" position-relative" id="benfit">
        <div className="container">
          <h2 className=" mb-0 ff-helve text-20 fw-normal lh-28 text-center text-black mt-md-5 mt-4">
            You are not alone! Numerous women before you stood exactly at this
            point, where you are now.
          </h2>
          <div className=" d-flex justify-content-center mt-3 pt-2">
            <Commnbtn text="Book a non-binding initial consultation now" />
          </div>
          <div className="row pt_48">
            <div className="col-md-6 d-flex flex-column flex-sm-row  align-items-center justify-content-md-end justify-content-center gap-0 gap-md-3">
              <div className="">
                <h2 className=" mb-0 ff-helve fw-normal text-uppercase text-52  lh-66 text-black">
                  what you{" "}
                </h2>
                <h2 className=" mb-0 ff-helve fw-normal text-uppercase text-60 lh-78 text-black">
                  will <span className=" color-brown">get</span>
                </h2>
              </div>
              <img src={flower} alt="flower" />
            </div>
            <div className="col-md-5 pt-4 pt-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
              <div className=" d-flex align-items-center gap-3">
                <hr className=" header_line" />
                <p className=" mb-0  ff-poppins fw-normal text-16 lh-25  text-black mx_w_419">
                  I will show you which steps are necessary for you to finally
                  successfully let go of your EX. And I will support you to look
                  confidently into your new future.
                </p>
              </div>
            </div>
          </div>
          {/* MJH__text */}.{" "}
          <div className=" position-absolute text_line_pos_2 d-none d-xxl-block">
            <div className=" position-relative">
              <div className="  ">
                <p className=" mb-0 ff-poppins fw-light position-absolute MJH_pos2  text-20 lh-34 lts-45 text-black translate_skew">
                  MJH
                </p>
              </div>
              <div className=" d-flex  align-items-baseline">
                <span className="  mb-0 ff-helve fw-normal text-40 lh-51 text-black   translate_rotate_180 ">
                  02
                </span>
                <div className="number_2_text_line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
