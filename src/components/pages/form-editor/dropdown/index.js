import React from "react";
import { Select, Button } from "antd";
import ViewAll from "../view-all";

const DropDown = () => {
  const { Option } = Select;

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
              10. Select a city/state of india from the following option?
            </h5>
            <Select
              defaultValue="lucy"
              style={{ width: "60%" }}
              className="select-custom-style"
            >
              <Option value="jack">Option 1</Option>
              <Option value="Option2">Option 2</Option>
              <Option value="Option3">Option 3</Option>
              <Option value="Option4">Option 4</Option>
              <Option value="Option5">Option 5</Option>
            </Select>
          </div>

          <div className="d-block">
            <Button className="primary-org-button btn-m">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DropDown;
