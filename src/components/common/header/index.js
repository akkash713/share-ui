import React, { Component } from "react";
import { Layout, Menu, Dropdown, Button } from "antd";
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
      <Layout className="base-layout-container">
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
              <div className="col-md-4 d-flex align-items-center">
                <div className="icon back-arrow-icon mr-2"></div>
                <h3 className="m-0">Geopgraphy</h3>
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <Menu mode="horizontal" defaultSelectedKeys={["create"]}>
                  <Menu.Item key="create">Create</Menu.Item>
                  <Menu.Item key="connect">Connect</Menu.Item>
                  <Menu.Item key="share">Share</Menu.Item>
                  <Menu.Item key="result">Result</Menu.Item>
                </Menu>
              </div>
              <div className="col-md-4 text-right">
                <Button
                  type="link"
                  className="button-transparant-grey btn-m mr-5"
                >
                  <span className="icon icon-preview"></span>Preview
                </Button>
                <Button className="primary-org-button btn-m">
                  <span className="icon icon-upload"></span>
                  Publish
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BaseHeader;
