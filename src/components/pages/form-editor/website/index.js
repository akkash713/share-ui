import React from "react";
import { Button, Input } from "antd";
import ViewAll from "../view-all";

const Webiste = () => {
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
              13. Can we get the link of your new project?
            </h5>
            <Input
              className="input-area-custom"
              value="http://onlinebookclub.org"
            />
            <div className="text-center"></div>
          </div>
          <div className="d-block">
            <Button className="primary-org-button btn-m">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Webiste;
