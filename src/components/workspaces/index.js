import React, { Component } from "react";
import { Layout, Menu, Dropdown, Input } from "antd";
import Avatar from "../common/avatar";
const { Header, Sider, Content } = Layout;
const { Search } = Input;

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

class Workspaces extends Component {
  render() {
    return (
      <div>
        <Layout className="base-layout-container" style={{ height: "100vh" }}>
          <Header className="header" className="base-layout-header">
            <div className="d-flex logo-holder">
              <img
                src={require("../../assets/images/logo.svg")}
                className="logo d-block"
                alt="Askia Logo"
              />
              <div className="icon icon-quest icon-square">?</div>
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
          </Header>
          <Layout>
            <Sider className="base-layout-sider" width={280}>
              <div>
                <div className="searchinput mb-4">
                  <Search placeholder="input search text" size="large" />
                </div>

                <div className="d-flex justify-content-between align-items-center px-2 mb-4">
                  <h6 className="m-0 fw-700">Workspace</h6>
                  <div className="icon icon-plus icon-square">+</div>
                </div>
                <Menu className="sider-menu-container">
                  <Menu.Item className="contacts-menu-item d-flex align-items-center justify-content-between">
                    Geography
                    <span className="count">4</span>
                  </Menu.Item>
                  <Menu.Item className="contacts-menu-item d-flex align-items-center justify-content-between">
                    Maths<span className="count">1</span>
                  </Menu.Item>
                  <Menu.Item className="contacts-menu-item d-flex align-items-center justify-content-between">
                    Science<span className="count">2</span>
                  </Menu.Item>
                  <Menu.Item className="contacts-menu-item d-flex align-items-center justify-content-between">
                    Social<span className="count">0</span>
                  </Menu.Item>
                </Menu>
              </div>
            </Sider>
            <Layout className="content-layout">
              <Content>
                <div className="d-flex align-items-center justify-content-between mb-5">
                  <h3 className="page-title m-0">Geography</h3>
                  <div className="d-flex avatar-stacked">
                    <Avatar />
                    <Avatar />
                  </div>
                </div>
                <div className="card-layouts">
                  <div className="card">
                    <div className="icon icon-plus icon-square icon-l mt-3 mb-4">
                      +
                    </div>
                    <h1 className="mb-2 mt-3">Create new askia</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Workspaces;
