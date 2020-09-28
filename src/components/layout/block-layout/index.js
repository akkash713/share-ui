import React, { Component } from "react";
import Thankyou from "../../pages/form-editor/thankyou";
import Welcome from "../../pages/form-editor/welcome";
import ViewAll from "../../pages/form-editor/view-all";
import MultipleChoice from "../../pages/form-editor/multiple-choice";
import PhoneNumber from "../../pages/form-editor/phone-number";
import ShortText from "../../pages/form-editor/short-text";
import LongText from "../../pages/form-editor/long-text";
import Statement from "../../pages/form-editor/statement";
import YesNoCheck from "../../pages/form-editor/yesNo-check";

const blockList = [
  { id: "1", name: "Welcome screen", iconName: "welcome-icon" },
  { id: "2", name: "Thankyou screen", iconName: "thank-icon" },
  { id: "3", name: "Multiple choice", iconName: "tick-icon" },
  { id: "4", name: "Phone number", iconName: "call-icon" },
  { id: "5", name: "Short text", iconName: "shortText-icon" },
  { id: "6", name: "Long text", iconName: "longText-icon" },
  { id: "7", name: "Statement", iconName: "statement-icon" },
  { id: "8", name: "Picture choice", iconName: "picture-icon" },
  { id: "9", name: "Yes/no", iconName: "yesNo-icon" },
  { id: "10", name: "Email", iconName: "mail-icon" },
  { id: "11", name: "Opinion scale", iconName: "chart-icon" },
  { id: "12", name: "Rating", iconName: "star-icon" },
  { id: "13", name: "Date", iconName: "date-icon" },
  { id: "14", name: "Number", iconName: "number-icon" },
  { id: "15", name: "Dropdown", iconName: "arow-down-icon" },
  { id: "16", name: "Legal", iconName: "legal-icon" },
  { id: "17", name: "File upload", iconName: "upload-icon" },
  { id: "18", name: "Payment", iconName: "payment-icon" },
  { id: "19", name: "Website", iconName: "link-icon" },
  { id: "20", name: "Question Group", iconName: "qgroup-icon" },
  { id: "21", name: "Hidden fields", iconName: "noPreview-icon" },
];

class BlockLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "",
    };
  }

  setTab = (tab) => {
    this.setState({ selectedTab: tab });
  };
  switchView = () => {
    console.log(this.state.selectedTab);
    switch (this.state.selectedTab) {
      case "1":
        return <Welcome />;
      case "2":
        return <Thankyou />;
      case "3":
        return <MultipleChoice />;
      case "4":
        return <PhoneNumber />;
      case "5":
        return <ShortText />;
      case "6":
        return <LongText />;
      case "7":
        return <Statement />;
      case "9":
        return <YesNoCheck />;

      default:
        return <YesNoCheck />;
    }
  };

  render() {
    return (
      <div className="bg-light h-100">
        <div className="block-sidebar">
          <h3 className="fw-700 pt-4 py-3 font-m">Blocks</h3>
          <ul className="block-list">
            {blockList.map((option) => (
              <li onClick={(e) => this.setTab(option.id)} key={option.id}>
                <div className={`icon mr-2 ${option.iconName}`}></div>
                {option.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="block-right-content">{this.switchView()}</div>

        {/* <Tabs defaultActiveKey="1" tabPosition="left" className="option-tab">
          <TabPane
            tab={<span className="">Welcome screen</span>}
            key="Welcome screen"
          >
            kl
          </TabPane>
          <TabPane
            tab={<span className="">Thankyou screen</span>}
            key="Thankyou screen"
          >
            Block Content
          </TabPane>
        </Tabs> */}
      </div>
    );
  }
}

export default BlockLayout;
