import React, { Component } from "react";

class Avatar extends Component {
  render() {
    return (
      <div
        className="avatar avatar-sm mr-2"
        style={{
          backgroundImage:
            "url(https://randomuser.me/api/portraits/women/39.jpg)",
        }}
      ></div>
    );
  }
}

export default Avatar;
