import React from "react";
import { Button } from "antd";
import ViewAll from "../view-all";

const OpinionScale = () => {
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
            <h5 className="fw-700">15. Well, How did you find this quiz?</h5>
            <div className="w-50">
              <div className="d-flex justify-content-around w-100">
                <div className="border bg-light p-3 rounded text-muted fw-700 mr-2">
                  1
                </div>
                <div className="border bg-light p-3 rounded text-muted fw-700 mr-2">
                  2
                </div>
                <div className="border bg-light p-3 rounded text-muted fw-700 mr-2">
                  3
                </div>
                <div className="border bg-light p-3 rounded text-muted fw-700 mr-2">
                  4
                </div>
                <div className="border bg-light p-3 rounded text-muted fw-700">
                  5
                </div>
              </div>
              <div className="d-flex justify-content-between mt-3 mb-5">
                <p className="text-orange m-0">Really easy</p>
                <p className="text-orange m-0">Really hard</p>
              </div>
              <div className="d-block">
                <Button className="primary-org-button btn-m">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OpinionScale;
