import React, { Component } from "react";
import { Tooltip, Dropdown, Menu } from "antd";

const IconSet = () => {
  const menu = (
    <Menu>
      <Menu.Item className="px-3 fw-700">
        <a target="_blank">Duplicate</a>
      </Menu.Item>
      <Menu.Item className="px-3 fw-700" danger>
        Delete
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="d-flex mt-5 icon-sets justify-content-end">
      <div className="">
        <Tooltip placement="bottom" title="Question Settings">
          <span className="icon icon-setting"></span>
        </Tooltip>
      </div>
      <div className="">
        <Tooltip placement="bottom" title="Image or Video">
          <span className="icon icon-image"></span>
        </Tooltip>
      </div>
      <div className="">
        <Tooltip placement="bottom" title="Logic Jump">
          <span className="icon logic-icon"></span>
        </Tooltip>
      </div>
      <div className="">
        <Tooltip placement="bottom" title="Calculator">
          <span className="icon calculator-icon"></span>
        </Tooltip>
      </div>
      <Dropdown overlay={menu}>
        <a className="icon dot-icon"></a>
      </Dropdown>
    </div>
  );
};
export default IconSet;
