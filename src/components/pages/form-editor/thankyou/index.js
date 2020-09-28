import React, { Component } from "react";
import { Button } from "antd";
import ViewAll from "../view-all";

const Thankyou = () => {
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
          <div className="text-center m-5">
            <div className="thanks-message-placeholder mx-auto mb-4"></div>
            <p>Type thankyou message here!</p>
            <Button className="primary-org-button btn-m">Start</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Thankyou;
