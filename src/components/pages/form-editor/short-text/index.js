import React from "react";
import { Button, Input } from "antd";
import ViewAll from "../view-all";

const ShortText = () => {
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
              4. In your opinion, what is the meaning of life?
            </h5>
            <Input
              className="input-area-custom"
              placeholder="The actual meaning of life is to fulfill your purpose in life and accomplish your goals. What I mean by this is, everyone has a purpose, of why they are...."
            />
            <div className="text-center"></div>
          </div>
          <div className="d-block">
            <Button className="primary-org-button btn-m d-flex align-items-center">
              Ok <span className="icon right-icon icon-m"></span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShortText;
