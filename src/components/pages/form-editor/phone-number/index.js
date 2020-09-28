import React, { useState } from "react";
import { Button } from "antd";
import ViewAll from "../view-all";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const PhoneNumber = () => {
  const [value, setValue] = useState();
  return (
    <div className="row">
      <div className="col-md-6">
        <ViewAll />
      </div>
      <div className="col-md-6 h-100 bg-white">
        <div className="edit-view-block p-4">
          <div className="d-flex justify-content-end">
            <div className="btn-shadow d-flex align-items-center no-wrap mr-2 px-2">
              <div className="logic-icon icon icon-m"></div>Test logic
            </div>
            <div className="btn-shadow icon reload-icon d-flex icon-l"></div>
          </div>
          <div className="my-5">
            <p>
              <span className="text-orange">3.</span>What is your Phone number?
            </p>
            <PhoneInput
              defaultCountry="IN"
              value={value}
              onChange={setValue}
              className="custom-phone-number"
            />
            <div className="text-center"></div>
          </div>
          <div className="d-block">
            <Button className="primary-org-button btn-m">Start</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PhoneNumber;
