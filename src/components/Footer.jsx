import React from "react";
import footer_logo from "../assets/svg/footer_logo.svg";
import{Facebook, Twitter, Email, Insta} from "../common/Icon";

function Footer() {
  return (
    <>
      <footer className=" footer_bg_img d-flex  align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 d-flex col-12 align-items-center justify-content-sm-end justify-content-center">
              <div className="">
                <img className=" cursor_pointer" src={footer_logo} alt="footer_logo" />
                <div className=" pt-2">
                  <p className=" mb-0 ff-poppins fw-normal text-16 mt-2 lh-25 text-white text-center ">
                    (c){new Date().getFullYear()} MARC JOACHIM HUBRICH
                    <span className=" d-block">All Rights Reserved</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-12 d-flex justify-content-sm-end justify-content-center">
              <div className=" d-flex flex-sm-column mt-4  gap-3">
                <a
                  className=" trnfrm_icon"
                  href="https://www.facebook.com/"
                  target="_blank  "
                >
                  <Facebook />
                </a>
                <a
                  className="trnfrm_icon"
                  href="https://twiiter.com/"
                  target="_blank  "
                >
                  <Twitter />
                </a>
                <a
                  className="trnfrm_icon"
                  href="https://mail.google.com/mail/u/0/"
                  target="_blank  "
                >
                  <Email />
                </a>
                <a
                  className="trnfrm_icon"
                  href="https://www.instagram.com/"
                  target="_blank  "
                >
                  <Insta />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
