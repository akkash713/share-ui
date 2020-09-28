import React, { Component } from "react";
import { Button, Radio } from "antd";
import ViewAll from "../view-all";

const yesNoCheck = () => {
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
            <h5 className="fw-700">Nope, it’s not in the.</h5>
            <p></p>
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
            </Radio.Group>
          </div>
          <div className="d-block">
            <Button className="primary-org-button btn-m">Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default yesNoCheck;
