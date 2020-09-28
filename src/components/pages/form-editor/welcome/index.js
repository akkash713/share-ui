import React, { Component } from "react";
import { Button } from "antd";

const Welcome = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="editor-block">
          <div className="media">
            <div className="icon welcome-icon mr-2">
              <span className="count">1</span>
            </div>
            <div className="media-body">
              <p className="text-muted">Type welcome message here</p>
            </div>
          </div>
        </div>
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
            <p>Type welcome message here!</p>
            <Button className="primary-org-button btn-m">Start</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
