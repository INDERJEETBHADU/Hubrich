import React from "react";
import lawyer from "../assets/png/lawyer_main.png";
import lawyer_ellipse from "../assets/svg/lawyer_ellipse.svg";

function Section9() {
  return (
    <>
      <div className=" position-relative">
        <div className="container ">
          <div className=" d-none  d-lg-block">
            <div className=" d-flex  align-items-baseline mt-3">
              <div className="about_bordr_box"></div>
              <p className="  mb-0 ff-helve fw-normal text-40 lh-51 text-black   translate_skew ">
                05
              </p>
              <p className=" ff-helve fw-normal mb-0 text-24 lh-3091 text-black text-uppercase  mt-2">
                about
              </p>
            </div>
          </div>
          <div className="row pt-5 mt-md-1 mt-0">
            <div className="col-md-6 col-12 d-flex justify-content-center justify-content-md-start">
              <img className=" max_w_559 w-100" src={lawyer} alt="lawyer" />
            </div>
            <div className="col-md-6 pt-4 pt-lg-0  col-12 d-flex justify-content-center">
              <div className=" max_w_500">
                <h2 className=" mb-0 ff-helve fw-light  text-52 lh-66  text-black">
                  LAWYER <span className=" color-brown">&</span> DIVORCE COACH
                </h2>
                <h6 className=" mb-0 text-uppercase ff-helve fw-normal text-36 lh-47 text-black">
                  <span className=" color-brown">M</span>arc{" "}
                  <span className=" color-brown">J</span>oachim{" "}
                  <span className=" color-brown">H</span>ubrich
                </h6>
                <div className=" mt-lg-4 mt-2 pt-2">
                  <p className="  ff-helve mb-0 fw-light text-20 lh-28 text-black text-capitalize">
                    About the mindset agency coach
                  </p>
                </div>
                <p className=" mb-0 color-grey fw-normal ff-poppins text-16 mt-2 lh-25">
                  Marc J. Hubrich is the founder of the mindset agency
                  <span className=" d-lg-block ">
                    specializing in consulting services.
                  </span>
                </p>
                <div className="  pt-0 pt-md-3">
                  <button className=" agency_btn d-flex align-items-center mt-4 gap-3 ff-inter fw-medium text-16 lh-24 text-capitalize  text_gradient">
                    Learn more about the agency
                    <span>
                      <svg
                        width="41"
                        height="14"
                        viewBox="0 0 41 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M40.101 7.60104C40.433 7.2691 40.433 6.73091 40.101 6.39896L34.6917 0.989595C34.3597 0.65765 33.8215 0.65765 33.4896 0.989595C33.1576 1.32154 33.1576 1.85973 33.4896 2.19168L38.2979 7L33.4896 11.8083C33.1576 12.1403 33.1576 12.6785 33.4896 13.0104C33.8215 13.3424 34.3597 13.3424 34.6917 13.0104L40.101 7.60104ZM0.5 7.85L39.5 7.85L39.5 6.15L0.5 6.15L0.5 7.85Z"
                          fill="url(#paint0_linear_1102_7)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1102_7"
                            x1="-3.7"
                            y1="7.38462"
                            x2="-3.4011"
                            y2="11.1488"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#0C5FD1" />
                            <stop offset="1" stop-color="#8703C5" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lawyer_ellipse_pos d-none d-xl-block position-absolute">
          <img src={lawyer_ellipse} alt="lawyer_ellipse" />
        </div>
      </div>
    </>
  );
}

export default Section9;
