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
      <div className="col-md-6 overflowY-scroll bg-white">
        <div className="edit-view-block p-4">
          <div className="d-flex justify-content-end">
            <div className="btn-shadow d-flex align-items-center no-wrap mr-2 px-2">
              <div className="logic-icon icon icon-m"></div>Test logic
            </div>
            <div className="btn-shadow icon reload-icon d-flex icon-l"></div>
          </div>
          <div className="my-5">
            <h5 className="fw-700">3. What is your Phone number?</h5>

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
