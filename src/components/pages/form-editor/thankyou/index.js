import React from "react";
import { Button } from "antd";
import ViewAll from "../view-all";

const Thankyou = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <ViewAll />
      </div>
      <div className="col-md-6 overflowY-scroll bg-white">
        <div className="edit-view-block p-4">
          <div className="d-flex justify-content-end">
            <div className="btn-shadow d-flex align-items-center no-wrap mr-2 px-2">
              <div className="logic-icon icon icon-m"></div>Test logic
            </div>
            <div className="btn-shadow icon reload-icon d-flex icon-l"></div>
          </div>
          <div className="text-center m-5">
            <img
              className="thanks-message-banner mb-4 "
              src={require("../../../../assets/images/thank-you-banner.png")}
            />
            <h5 className="fw-700">Amazing work,____!</h5>
            <p className="fw-700">
              You got all the questions right, which makes you a master
              geographer. (Or a cheater...we can’t be too sure.)
            </p>
            <div className="d-flex justify-content-center mb-5">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="34"
                  viewBox="0 0 33 34"
                  fill="none"
                >
                  <rect width="33" height="34" rx="2" fill="#39579A" />
                  <path
                    d="M26.445 10.6492H29.0012V6.19717C28.5602 6.1365 27.0435 6 25.2772 6C21.5917 6 19.067 8.31817 19.067 12.5788V16.5H15V21.477H19.067V34H24.0533V21.4782H27.9558L28.5753 16.5012H24.0522V13.0723C24.0533 11.6338 24.4407 10.6492 26.445 10.6492V10.6492Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="" className="mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="34"
                  viewBox="0 0 33 34"
                  fill="none"
                >
                  <rect width="33" height="34" rx="2" fill="#48ADEB" />
                  <path
                    d="M28.8621 9.40798C28.7025 9.2335 28.4457 9.18816 28.236 9.29738C28.0205 9.39531 27.7975 9.47592 27.5692 9.53843C27.9253 9.08275 28.1942 8.56519 28.3623 8.01178C28.4363 7.73331 28.2705 7.44756 27.992 7.37355C27.8433 7.33403 27.6848 7.36216 27.5588 7.4504C26.7655 7.87971 25.9222 8.20954 25.0481 8.43234C23.2488 6.73396 20.5078 6.52226 18.4689 7.92418C16.8983 8.98609 16.0337 10.8214 16.215 12.7086C12.8104 12.4185 9.67801 10.7314 7.56229 8.04832C7.45361 7.91684 7.28916 7.84445 7.11879 7.8532C6.94603 7.86357 6.7897 7.95895 6.70141 8.1078C5.98336 9.28158 5.77532 10.6975 6.1254 12.0282C6.30491 12.7119 6.61263 13.3553 7.03221 13.9242C6.84321 13.8317 6.66536 13.7179 6.50214 13.5851C6.27835 13.4036 5.9498 13.4378 5.76823 13.6616C5.69291 13.7545 5.65172 13.8704 5.65167 13.99C5.68268 15.9205 6.74274 17.6873 8.43154 18.6231C8.2037 18.5952 7.97879 18.547 7.75951 18.4791C7.48359 18.3961 7.1926 18.5525 7.1096 18.8284C7.0734 18.9488 7.08186 19.0782 7.13342 19.1929C7.86639 20.8348 9.33175 22.034 11.0862 22.4277C9.41466 23.3708 7.4899 23.767 5.58177 23.5609C5.33437 23.5293 5.09997 23.6798 5.02557 23.9178C4.94888 24.154 5.04925 24.4115 5.26559 24.5335C7.60196 25.9217 10.2598 26.6769 12.977 26.7248C15.5838 26.7153 18.1298 25.9367 20.2961 24.4865C24.4314 21.7421 27.0089 16.8147 26.6499 12.406C27.5341 11.7515 28.3012 10.952 28.9185 10.0415C29.0454 9.84189 29.0222 9.58196 28.8621 9.40798Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="34"
                  viewBox="0 0 33 34"
                  fill="none"
                >
                  <rect width="33" height="34" rx="2" fill="#0085AD" />
                  <path
                    d="M28.9927 28.9991V28.9981H28.9987V20.1965C28.9987 15.8907 28.0718 12.5738 23.038 12.5738C20.6181 12.5738 18.9941 13.9018 18.3312 15.1607H18.2612V12.9758H13.4884V28.9981H18.4582V21.0645C18.4582 18.9755 18.8542 16.9556 21.441 16.9556C23.9899 16.9556 24.0279 19.3395 24.0279 21.1985V28.9991H28.9927Z"
                    fill="white"
                  />
                  <path
                    d="M5.3964 12.9779H10.3722V29.0002H5.3964V12.9779Z"
                    fill="white"
                  />
                  <path
                    d="M7.88188 5C6.29095 5 5 6.29095 5 7.88188C5 9.47281 6.29095 10.7908 7.88188 10.7908C9.47281 10.7908 10.7638 9.47281 10.7638 7.88188C10.7628 6.29095 9.47181 5 7.88188 5V5Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <Button className="primary-org-button btn-m">Again</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Thankyou;
