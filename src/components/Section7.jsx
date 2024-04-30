import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Commnbtn from "../common/Commnbtn";
import ellipse_slider from "../assets/svg/slider_ellipse.svg";
import left_ellipse from "../assets/svg/slider_left_ellipse.jpg";
import "swiper/css/pagination";
import "swiper/css/navigation";
import left_arrow from "../assets/svg/left_arrow_slider.svg";
import right_arrow from "../assets/svg/right_arrow.svg";
import {
  Autoplay,
  EffectCreative,
  Pagination,
  Navigation,
} from "swiper/modules";

function Section7() {
  return (
    <>
      <div className=" position-relative overflow-hidden">
        <div className="container slider_sec_padding">
          <div className=" left_ellipse_slider_pos d-none d-xxl-block position-absolute">
            <img src={left_ellipse} alt="left_ellipse" />
          </div>
          {/* MJH__text */}.{" "}
          <div className=" d-flex mb-4 justify-content-end">
            <div className="  d-none  d-lg-block pt_65">
              <div className=" position-relative">
                <div className="   ">
                  <p className=" mb-0 ff-poppins fw-light position-absolute    text-20 lh-34 lts-45  analyst_pos text-black">
                    MJH
                  </p>
                </div>
                <div className=" d-flex  align-items-baseline">
                  <p className=" ff-helve fw-normal mb-0 text-24 lh-3091 text-black text-uppercase  mt-2">
                    analysis
                  </p>
                  <span className="  mb-0 ff-helve fw-normal text-40 lh-51 text-black   translate_rotate_180 ">
                    04
                  </span>
                  <div className="number_4_text_line"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row     pt-4">
            <div className="col-md-6 col-12 d-flex align-items-center">
              <div className="">
                <h6 className=" mb-0 ff-helve fw-normal  text-29 lh-37 text-black">
                  THE FOUR PHASES OF
                </h6>
                <h2 className=" mb-0 ff-helve fw-normal text-52   lh-62 ">
                  SEPARATION{" "}
                  <span className=" color-brown d-lg-block">MINDSET</span>
                </h2>
                <p className=" mb-0 color-grey  ff-poppins fw-normal mt-0 mt-lg-3 text-16 lh-25  ">
                  There are 4 typical separation phases. The 4 phases are not{" "}
                  <span className=" d-lg-block">
                    always clearly separated from each other and can overlap.
                  </span>
                </p>
                <div className=" pt-0 pt-lg-3">
                  <Commnbtn
                    spacing=" mt-4"
                    text="Book a non-binding initial consultation now"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-4 pt-lg-0 col-12 position-relative">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  nextEl: ".swiper-btn-next",
                  prevEl: ".swiper-btn-prev",
                }}
                modules={[Autoplay, EffectCreative, Pagination, Navigation]}
                grabCursor={true}
                effect={"creative"}
                speed={500}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: ["-120%", 0, -500],
                  },
                  next: {
                    shadow: true,
                    translate: ["120%", 0, -500],
                  },
                }}
              >
                <SwiperSlide>
                  <div className="slider_card position-relative">
                    <p className=" mb-0 text-capitalize  ff-poppins fw-medium text-20 lh-32 text-center text-white">
                      <span className=" d-block ">1st phase</span>{" "}
                      <span className=" text-xl-nowrap">
                        "The not-wanting-to-be-true"
                      </span>
                    </p>
                    <div className=" mt-3 pt-1">
                      <p className=" text-center mb-0 text-white  ff-poppins fw-normal text-16 lh-25 ">
                        <span className=" d-md-block">
                          This phase is characterized by denial and ignoring the
                          final separation.
                        </span>
                      </p>
                    </div>
                    <div className="ellipse_slider_pos position-absolute">
                      <img src={ellipse_slider} alt="ellipse_slider" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider_card position-relative">
                    <p className=" mb-0 text-capitalize  ff-poppins fw-medium text-20 lh-32 text-center text-white">
                      <span className=" d-block ">2st phase</span>{" "}
                      <span className=" text-xl-nowrap">
                        "The not-wanting-to-be-true"
                      </span>
                    </p>
                    <div className=" mt-3 pt-1">
                      <p className=" text-center mb-0 text-white  ff-poppins fw-normal text-16 lh-25 ">
                        <span className=" d-block">
                          This phase is characterized by denial and ignoring the
                          final separation.
                        </span>
                      </p>
                    </div>
                    <div className="ellipse_slider_pos position-absolute">
                      <img src={ellipse_slider} alt="ellipse_slider" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider_card position-relative">
                    <p className=" mb-0 text-capitalize  ff-poppins fw-medium text-20 lh-32 text-center text-white">
                      <span className=" d-block ">3st phase</span>{" "}
                      <span className=" text-xl-nowrap">
                        "The not-wanting-to-be-true"
                      </span>
                    </p>
                    <div className=" mt-3 pt-1">
                      <p className=" text-center mb-0 text-white  ff-poppins fw-normal text-16 lh-25 ">
                        <span className=" d-block">
                          This phase is characterized by denial and ignoring the
                          final separation.
                        </span>
                      </p>
                    </div>
                    <div className="ellipse_slider_pos position-absolute">
                      <img src={ellipse_slider} alt="ellipse_slider" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider_card position-relative">
                    <p className=" mb-0 text-capitalize  ff-poppins fw-medium text-20 lh-32 text-center text-white">
                      <span className=" d-block ">4st phase</span>{" "}
                      <span className="text-xl-nowrap">
                        "The not-wanting-to-be-true"
                      </span>
                    </p>
                    <div className=" mt-3 pt-1">
                      <p className=" text-center mb-0 text-white  ff-poppins fw-normal text-16 lh-25 ">
                        <span className=" d-block">
                          This phase is characterized by denial and ignoring the
                          final separation.
                        </span>
                      </p>
                    </div>
                    <div className="ellipse_slider_pos position-absolute">
                      <img src={ellipse_slider} alt="ellipse_slider" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className=" d-none  d-lg-block position-absolute swiper-btn-prev arrow_pos_slide_left">
                <img src={left_arrow} alt="left_arrow" />
              </div>
              <div className=" d-none  d-lg-block  position-absolute swiper-btn-next arrow_pos_slide_right">
                <img src={right_arrow} alt="left_arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section7;
