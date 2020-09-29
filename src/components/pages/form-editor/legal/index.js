import React from "react";
import { Radio, Button } from "antd";
import ViewAll from "../view-all";

const Legal = () => {
  const plainOptions = ["I accept", "I don't accept"];
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
            <h5 className="fw-700">
              11. Do you accept all the terms and conditions?
            </h5>
            <Radio.Group
              options={plainOptions}
              className="radio-custom-style"
            />
          </div>

          <div className="d-block">
            <Button className="primary-org-button btn-m">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Legal;
