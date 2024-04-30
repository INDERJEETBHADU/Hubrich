import React from "react";
import Navbr from "./Navbr";
import Commnbtn from "../common/Commnbtn";
import liningellipse from "../assets/svg/lining_ellipse.svg";

function Header() {
  return (
    <>
      <header className=" hero_bg min-vh-100 d-flex flex-column position-relative">
        <Navbr />
        <div className="container d-flex flex-column justify-content-center flex-grow-1">
          <div className=" row">
            <div className="    col-12   col-md-6 ">
              <p className=" mb-0 text-capitalize ff-helve fw-normal text-18  lh-2422  color-brown">
                Marc joachim hubrich
              </p>
              <h1 className=" mb-0   ff-helve fw-normal text-60   lh-77 text-black">
                NOW I LET YOU <span className=" d-xl-block">GO!</span>
              </h1>
              <p className=" mb-0 ff-poppins mt-2 fw-normal text-16 lh-25 color-grey">
                For women who do not want to be completely dragged down by{" "}
                <span className=" d-xl-block">a SEPARATION.</span> How to let go
                of your EX so you can leave him behind without{" "}
                <span className=" d-xl-block">
                  having to run to a therapist right away.
                </span>
              </p>
              <div className=" d-flex align-items-center gap-lg-3 gap-2 mt-4 pt-2">
                <Commnbtn text="Book a non-binding initial consultation now" />
                <svg
                  width="43"
                  height="44"
                  viewBox="0 0 43 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.2861 20.2288H38.8145C38.8145 11.1785 31.9817 4.35278 22.919 4.35278V7.88119C30.0852 7.88119 35.2861 13.0732 35.2861 20.2288Z"
                    fill="url(#paint0_linear_1_325)"
                  />
                  <path
                    d="M22.9374 14.9382C26.6475 14.9382 28.23 16.5207 28.23 20.2308H31.7584C31.7584 14.5412 28.6269 11.4098 22.9374 11.4098V14.9382ZM28.9745 24.5407C28.6355 24.2326 28.19 24.0683 27.7321 24.0825C27.2742 24.0966 26.8398 24.2881 26.5205 24.6166L22.2987 28.9583C21.2825 28.7642 19.2396 28.1274 17.1367 26.0297C15.0337 23.925 14.3969 21.8768 14.2081 20.8677L18.5463 16.6442C18.8751 16.3251 19.0669 15.8905 19.0811 15.4325C19.0953 14.9745 18.9307 14.529 18.6221 14.1902L12.1034 7.02221C11.7947 6.68235 11.3657 6.47619 10.9075 6.44754C10.4493 6.41888 9.99798 6.56997 9.64938 6.86872L5.82106 10.1519C5.51605 10.458 5.334 10.8654 5.30944 11.2969C5.28298 11.7379 4.77842 22.1855 12.8796 30.2903C19.947 37.3559 28.7998 37.8728 31.2379 37.8728C31.5943 37.8728 31.8131 37.8622 31.8713 37.8587C32.3027 37.8346 32.7099 37.6517 33.0145 37.3453L36.2959 33.5153C36.5949 33.1669 36.7463 32.7157 36.7179 32.2575C36.6896 31.7993 36.4838 31.3701 36.1442 31.0612L28.9745 24.5407Z"
                    fill="url(#paint1_linear_1_325)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_325"
                      x1="21.2072"
                      y1="10.459"
                      x2="38.8104"
                      y2="16.1503"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0C5FD1" />
                      <stop offset="1" stop-color="#8703C5" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_325"
                      x1="1.91044"
                      y1="18.5321"
                      x2="36.7218"
                      y2="29.7724"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0C5FD1" />
                      <stop offset="1" stop-color="#8703C5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            {/* tranform-text */}
            <div className=" col-12 col-md-6 pt-4 pt-md-0  position-relative">
              <div className=" d-flex  max_w_365 justify-content-between  w-100  physci_pos  ">
                <div className=" d-flex  gap-3 align-items-center">
                  <hr className=" header_line" />
                  <p className="  text-uppercase color_changer    mb-0 ff-helve  fw-normal text-16 lh-27  max_w203">
                    Die wichtigsten
                    <span className=" d-block"> Aspekte einer</span> Trennung:
                  </p>
                </div>
                <div className="">
                  <ul>
                    <li className=" listdisc color_changer mb-0 text-capitalize  ff-poppins fw-medium text-16 lh-25">
                      physische Trennung
                    </li>
                    <li className=" listdisc mb-0 text-capitalize  color_changer ff-poppins fw-medium text-16 lh-25">
                      mentale Trennung
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lining_ellpse_pos position-absolute">
          <img
            className=" d-none d-sm-block"
            src={liningellipse}
            alt="lining_ellipse"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
