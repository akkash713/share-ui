import React, { Component } from "react";
import { Layout, Menu, Dropdown, Input } from "antd";
import Avatar from "../avatar";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/" className="p-2">
        Settings
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" className="p-2">
      Logout
    </Menu.Item>
  </Menu>
);

class BaseHeader extends Component {
  render() {
    return (
      <Layout className="base-layout-container" style={{ height: "100vh" }}>
        <header className="header" className="base-layout-header">
          <div className="d-flex logo-holder">
            <img
              src={require("../../../assets/images/logo.svg")}
              className="logo d-block"
              alt="Askia Logo"
            />
          </div>
          <div className="ml-auto">
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Avatar />
                Mamata Shetty
              </a>
            </Dropdown>
          </div>
        </header>
        <div className="subheader">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BaseHeader;
