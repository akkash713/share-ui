import React from "react";
import { Button, DatePicker } from "antd";
import ViewAll from "../view-all";
import "react-datepicker/dist/react-datepicker.css";

const Date = () => {
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
            <h5 className="fw-700">8. So, When is your ideal date?</h5>
          </div>
          <DatePicker
            className="date-picker-custom w-100 mb-5"
            format="dd/mm/yyyy"
            placeholder="05/05/1990"
          />
          <div className="d-block">
            <Button className="primary-org-button btn-m">Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Date;
