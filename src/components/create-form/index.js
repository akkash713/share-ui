import React, { Component } from "react";
import Header from "../common/header";
import { Tabs, Tooltip } from "antd";
import BlockTab from "../layout/block-layout";

const { TabPane } = Tabs;

class CreateForm extends Component {
  render() {
    return (
      <div>
        <Header />
        <Tabs
          defaultActiveKey="1"
          tabPosition="left"
          className="custom-tab"
          style={{ height: "83vh" }}
        >
          <TabPane
            tab={
              <Tooltip
                placement="right"
                title="Block"
                className="block-icon mt-5"
              >
                <span className="icon"></span>
              </Tooltip>
            }
            key="Block"
          >
            <BlockTab />
          </TabPane>
          <TabPane
            tab={
              <Tooltip
                placement="right"
                title="Builder"
                className="builder-icon"
              >
                <span className="icon"></span>
              </Tooltip>
            }
            key="Builder"
          >
            Builder Content
          </TabPane>
          <TabPane
            tab={
              <Tooltip placement="right" title="Design" className="design-icon">
                <span className="icon"></span>
              </Tooltip>
            }
            key="design-icon"
          >
            Design Content
          </TabPane>
          <TabPane
            tab={
              <Tooltip placement="right" title="Login Jump">
                <span className="logic-icon icon"></span>
              </Tooltip>
            }
            key="logic-jump"
          >
            Logic jump
          </TabPane>
          <TabPane
            tab={
              <Tooltip
                placement="right"
                title="Calculator"
                className="calculator-icon"
              >
                <span className="icon"></span>
              </Tooltip>
            }
            key="calculator"
          >
            Calculator content comes here
          </TabPane>
          <TabPane
            tab={
              <Tooltip placement="right" title="Notification">
                <span className="bell-icon icon"></span>
              </Tooltip>
            }
            key="Notification"
          >
            Bell Icon
          </TabPane>
          <TabPane
            tab={
              <Tooltip placement="right" title="Settings">
                <span className="settings-icon icon"></span>
              </Tooltip>
            }
            key="respondent-acces"
          >
            Settings Icon
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default CreateForm;
