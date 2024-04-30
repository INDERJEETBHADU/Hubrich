import React from "react";
import { Oponion } from "../common/Helper";
import { Oponin } from "../common/Helper";

function Section3() {
  return (
    <>
      <div className="bg_img_sec3 overflow-hidden  ">
        <div className="container">
          <div className=" max_w_1000">
            <div className=" d-flex flex-wrap flex-md-nowrap mt-md-0 gap-2 gap-md-0 mt-2  justify-content-center justify-content-md-end ">
              {Oponion.map((data, index) => (
                <>
                  <div
                    key={index}
                    className="opnion_box d-flex align-items-center justify-content-center"
                  >
                    {" "}
                    <h2 className=" mb-0 max_w_197 ff-poppins fw-normal text-16 lh-25 text-white">
                      {data.heading}
                    </h2>
                  </div>
                </>
              ))}
            </div>
            <div className=" d-flex flex-wrap flex-md-nowrap align-items-end justify-content-center justify-content-md-start gap-md-0  gap-2 mb-2 mb-md-0  h_200   mt-2">
              {Oponin.map((data, index) => (
                <>
                  <div
                    key={index}
                    className="opnion_box d-flex align-items-center justify-content-center"
                  >
                    {" "}
                    <h2 className=" mb-0 max_w_197 ff-poppins fw-normal text-16 lh-25 text-white">
                      {data.heading}
                    </h2>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
