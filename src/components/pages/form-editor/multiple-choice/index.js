import React from "react";
import { Button } from "antd";
import ViewAll from "../view-all";

const MultipleChoice = () => {
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
            <h5 className="fw-700">Where would you find the Mariana Trench?</h5>
            <div className="text-center">
              <ul className="choice-list list-unstyled float-left mb-5 p-0">
                <li>
                  <span>A</span>Pacific Ocean
                </li>
                <li>
                  <span>B</span>Pacific Ocean
                </li>
                <li>
                  <span>C</span>Pacific Ocean
                </li>
                <li>
                  <span>D</span>Pacific Ocean
                </li>
                <li>
                  <span>E</span>Pacific Ocean
                </li>
                <li>
                  <span>F</span>Pacific Ocean
                </li>
              </ul>
            </div>
          </div>
          <div className="d-block">
            <Button className="primary-org-button btn-m">Start</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MultipleChoice;
