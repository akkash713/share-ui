import React, { Component } from "react";
import Header from "../common/header";
import { Tabs, Tooltip, Button } from "antd";

const { TabPane } = Tabs;

class CreateForm extends Component {
  render() {
    return (
      <div>
        <Header />
        <Tabs
          defaultActiveKey="1"
          tabPosition="left"
          style={{ height: "80vh" }}
        >
          <TabPane
            tab={
              <Tooltip placement="right" title="Builder">
                <span className="builder-icon icon">TR</span>
              </Tooltip>
            }
            key="Builder"
          >
            ff
          </TabPane>
          <TabPane
            tab={
              <Tooltip placement="right" title="Design">
                <span className="design-icon icon">ee</span>
              </Tooltip>
            }
            key="design"
          >
            ff
          </TabPane>
          <TabPane
            tab={
              <Tooltip placement="right" title="Logic jump">
                <span className="logic-icon icon">s</span>
              </Tooltip>
            }
            key="logic-jump"
          >
            Logic jump
          </TabPane>
          <TabPane
            tab={
              <Tooltip placement="right" title="Calculator">
                <span className="calculator-icon icon">e</span>
              </Tooltip>
            }
            key="Calculator"
          >
            Logic jump
          </TabPane>
          <TabPane
            tab={
              <Tooltip placement="right" title="Email notification">
                <span className="email-icon icon">d</span>
              </Tooltip>
            }
            key="email-notification"
          >
            Logic jump
          </TabPane>
          <TabPane
            tab={
              <Tooltip placement="right" title="RespondentAccess">
                <span className="respond-access-icon icon">d</span>
              </Tooltip>
            }
            key="respondent-acces"
          >
            Logic jump
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default CreateForm;
