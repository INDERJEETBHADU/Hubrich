import React from "react";
import client from "../assets/svg/client_svg.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Autoplay,
  EffectCreative,
  Pagination,
  Navigation,
} from "swiper/modules";
import blue_ellipse from "../assets/svg/blue_ellipse_client.svg";

function Section10() {
  return (
    <>
      <div className="position-relative" id="testi">
        <div className="container pb_client_part  ">
          <h2 className=" mb-0 text-center  ff-helve fw-normal text-52 lh-66 text-uppercase ">
            What our <span className=" color-brown">clients</span> say
          </h2>
          <div className=" position-absolute d-none d-xxl-block blue_eelipse_pos">
            <img src={blue_ellipse} alt="blue_ellipse" />
          </div>
          {/* Mjh */}
          <div className="  d-none  position-absolute client_top_numb d-lg-block">
            <div className=" position-relative">
              <div className="   ">
                <p className=" mb-0 ff-poppins fw-light position-absolute    text-20 lh-34 lts-45  client_pos_mjh_top text-black">
                  MJH
                </p>
              </div>
              <div className=" d-flex  align-items-baseline">
                <span className="  mb-0 ff-helve fw-normal text-40 lh-51 text-black   translate_rotate_180 ">
                  06
                </span>
                <div className="number_4_text_line"></div>
              </div>
            </div>
          </div>
          {/* left--mjh */}
          <div className=" position-absolute d-none d-lg-block text_pos_7">
            <div className=" position-relative">
              {" "}
              <div className=" mt-5 pt-2 ">
                <p className=" mb-0 ff-poppins fw-light  MJH_pos_7  position-absolute text-20 lh-34 lts-45 text-black translate_skew">
                  MJH
                </p>
              </div>
              <div className=" d-flex  align-items-baseline">
                <div className="text_line"></div>
                <p className="  mb-0 ff-helve fw-normal text-40 lh-51 text-black   translate_skew ">
                  07
                </p>
                <p className=" ff-helve fw-normal mb-0 text-24 lh-3091 text-black text-uppercase  mt-2">
                  take step
                </p>
              </div>
            </div>
          </div>

          {/* slider_client_box */}
          <Swiper
            modules={[Pagination, Autoplay]}
            direction="vertical"
            spaceBetween={60}
            loop={true}
            pagination={{
              clickable: true,
            }}
            className=" swiper-height"
          >
            <SwiperSlide>
              <div className=" d-flex   flex-column  align-items-sm-center">
                <div className=" client_box mt_40 position-relative">
                  <p className=" mb-0  ff-poppins fw-normal text-16 lh-25 text-center color-grey">
                    Nec pellentesque aliquet diam eget sed mi ornare vulputate
                    duis. Posuere id habitasse quis ac ac. Pellentesque eget sed
                    ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan
                    amet commodo montes, aenean velit gravida tristique montes.
                    Porttitor velit cras venenatis, amet curabitur ultricies ac
                    dictum.{" "}
                  </p>
                  <div className=" pt-1">
                    <h4 className=" mb-0 ff-poppins fw-medium text-16 lh-25 text-center text-black mt-3">
                      Marrie James-CEO
                    </h4>
                    <p className=" mb-0 ff-poppins text-16 fw-normal lh-25   text-center  color-grey">
                      Limana Enterprises, CA
                    </p>
                  </div>
                  <div className="client_pos position-absolute">
                    <img src={client} alt="client" />
                  </div>
                </div>
                <div className="   d-flex flex-column flex-sm-row   mt-3 pt-2 gap_20">
                  <div className="small_client_box">
                    <p className=" mb-0 ff-poppins   fw-normal text-16 lh-25 text-center  color-grey">
                      Elementum risus cursus vehicula{" "}
                      <span className=" d-block">
                        consectetur sapien ut tempor, venenatis
                      </span>{" "}
                      turpis. Sed mauris enim.
                    </p>
                    <div className=" pt-2">
                      <h2 className=" mb-0 ff-poppins  fw-medium mt-3 text-16 text-center text-black lh-25">
                        Ralph Edwards-CEO
                      </h2>
                      <p className=" mb-0 ff-poppins fw-normal text-16 lh-25 text-center  color-grey">
                        Limana Enterprises, CA
                      </p>
                    </div>
                  </div>
                  <div className="small_client_box">
                    <p className=" mb-0 ff-poppins   fw-normal text-16 lh-25 text-center  color-grey">
                      Elementum risus cursus vehicula{" "}
                      <span className=" d-block">
                        consectetur sapien ut tempor, venenatis
                      </span>{" "}
                      turpis. Sed mauris enim.
                    </p>
                    <div className=" pt-2">
                      <h2 className=" mb-0 ff-poppins  fw-medium mt-3 text-16 text-center text-black lh-25">
                        Ralph Edwards-CEO
                      </h2>
                      <p className=" mb-0 ff-poppins fw-normal text-16 lh-25 text-center  color-grey">
                        Limana Enterprises, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" d-flex   flex-column align-items-sm-center">
                <div className=" client_box mt_40 position-relative">
                  <p className=" mb-0  ff-poppins fw-normal text-16 lh-25 text-center color-grey">
                    Nec pellentesque aliquet diam eget sed mi ornare vulputate
                    duis. Posuere id habitasse quis ac ac. Pellentesque eget sed
                    ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan
                    amet commodo montes, aenean velit gravida tristique montes.
                    Porttitor velit cras venenatis, amet curabitur ultricies ac
                    dictum.{" "}
                  </p>
                  <div className=" pt-1">
                    <h4 className=" mb-0 ff-poppins fw-medium text-16 lh-25 text-center text-black mt-3">
                      Marrie James-CEO
                    </h4>
                    <p className=" mb-0 ff-poppins text-16 fw-normal lh-25   text-center  color-grey">
                      Limana Enterprises, CA
                    </p>
                  </div>
                  <div className="client_pos position-absolute">
                    <img src={client} alt="client" />
                  </div>
                </div>
                <div className=" d-flex  flex-column flex-sm-row  mt-3 pt-2 gap_20">
                  <div className="small_client_box">
                    <p className=" mb-0 ff-poppins   fw-normal text-16 lh-25 text-center  color-grey">
                      Elementum risus cursus vehicula{" "}
                      <span className=" d-block">
                        consectetur sapien ut tempor, venenatis
                      </span>{" "}
                      turpis. Sed mauris enim.
                    </p>
                    <div className=" pt-2">
                      <h2 className=" mb-0 ff-poppins  fw-medium mt-3 text-16 text-center text-black lh-25">
                        Ralph Edwards-CEO
                      </h2>
                      <p className=" mb-0 ff-poppins fw-normal text-16 lh-25 text-center  color-grey">
                        Limana Enterprises, CA
                      </p>
                    </div>
                  </div>
                  <div className="small_client_box">
                    <p className=" mb-0 ff-poppins   fw-normal text-16 lh-25 text-center  color-grey">
                      Elementum risus cursus vehicula{" "}
                      <span className=" d-block">
                        consectetur sapien ut tempor, venenatis
                      </span>{" "}
                      turpis. Sed mauris enim.
                    </p>
                    <div className=" pt-2">
                      <h2 className=" mb-0 ff-poppins  fw-medium mt-3 text-16 text-center text-black lh-25">
                        Ralph Edwards-CEO
                      </h2>
                      <p className=" mb-0 ff-poppins fw-normal text-16 lh-25 text-center  color-grey">
                        Limana Enterprises, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" d-flex   flex-column align-items-sm-center">
                <div className=" client_box mt_40 position-relative">
                  <p className=" mb-0  ff-poppins fw-normal text-16 lh-25 text-center color-grey">
                    Nec pellentesque aliquet diam eget sed mi ornare vulputate
                    duis. Posuere id habitasse quis ac ac. Pellentesque eget sed
                    ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan
                    amet commodo montes, aenean velit gravida tristique montes.
                    Porttitor velit cras venenatis, amet curabitur ultricies ac
                    dictum.{" "}
                  </p>
                  <div className=" pt-1">
                    <h4 className=" mb-0 ff-poppins fw-medium text-16 lh-25 text-center text-black mt-3">
                      Marrie James-CEO
                    </h4>
                    <p className=" mb-0 ff-poppins text-16 fw-normal lh-25   text-center  color-grey">
                      Limana Enterprises, CA
                    </p>
                  </div>
                  <div className="client_pos position-absolute">
                    <img src={client} alt="client" />
                  </div>
                </div>
                <div className=" d-flex flex-column flex-sm-row  mt-3 pt-2 gap_20">
                  <div className="small_client_box">
                    <p className=" mb-0 ff-poppins   fw-normal text-16 lh-25 text-center  color-grey">
                      Elementum risus cursus vehicula{" "}
                      <span className=" d-block">
                        consectetur sapien ut tempor, venenatis
                      </span>{" "}
                      turpis. Sed mauris enim.
                    </p>
                    <div className=" pt-2">
                      <h2 className=" mb-0 ff-poppins  fw-medium mt-3 text-16 text-center text-black lh-25">
                        Ralph Edwards-CEO
                      </h2>
                      <p className=" mb-0 ff-poppins fw-normal text-16 lh-25 text-center  color-grey">
                        Limana Enterprises, CA
                      </p>
                    </div>
                  </div>
                  <div className="small_client_box">
                    <p className=" mb-0 ff-poppins   fw-normal text-16 lh-25 text-center  color-grey">
                      Elementum risus cursus vehicula{" "}
                      <span className=" d-block">
                        consectetur sapien ut tempor, venenatis
                      </span>{" "}
                      turpis. Sed mauris enim.
                    </p>
                    <div className=" pt-2">
                      <h2 className=" mb-0 ff-poppins  fw-medium mt-3 text-16 text-center text-black lh-25">
                        Ralph Edwards-CEO
                      </h2>
                      <p className=" mb-0 ff-poppins fw-normal text-16 lh-25 text-center  color-grey">
                        Limana Enterprises, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* mjh--text */}
        </div>
      </div>
    </>
  );
}

export default Section10;
