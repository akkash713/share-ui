import React, { Component } from "react";
import { Button } from "antd";
import IconSet from "../../../common/icon-set";

const ViewAll = () => {
  return (
    <div className="h-100 overflowY-scroll">
      <div className="editor-block">
        <div className="media">
          <div className="icon welcome-icon mr-2">
            <span className="count"></span>
          </div>
          <div className="media-body">
            <p className="text-muted">Type welcome message here</p>
          </div>
        </div>
        <IconSet />
      </div>

      <div className="editor-block">
        <div className="media">
          <div className="icon thank-icon mr-2">
            <span className="count">A</span>
          </div>
          <div className="media-body">
            <p className="text-muted">Type thank you message here</p>
          </div>
        </div>
        <IconSet />
      </div>

      <div className="editor-block">
        <div className="media">
          <div className="icon tick-icon mr-2">
            <span className="count">1</span>
          </div>
          <div className="media-body">
            <p className="text-muted">Type question here</p>
            <p className="text-muted">- choice</p>
          </div>
        </div>
        <IconSet />
      </div>

      <div className="editor-block">
        <div className="media">
          <div className="icon call-icon mr-2">
            <span className="count">2</span>
          </div>
          <div className="media-body">
            <p className="text-muted">Type question here</p>
            <p className="text-muted">- choice</p>
          </div>
        </div>
        <IconSet />
      </div>

      <div className="editor-block">
        <div className="media">
          <div className="icon shortText-icon mr-2">
            <span className="count">3</span>
          </div>
          <div className="media-body">
            <p className="text-muted">Type question here</p>
          </div>
        </div>
        <IconSet />
      </div>

      <div className="editor-block">
        <div className="media">
          <div className="icon longText-icon mr-2">
            <span className="count">4</span>
          </div>
          <div className="media-body">
            <p className="text-muted">Type question here</p>
          </div>
        </div>
        <IconSet />
      </div>
    </div>
  );
};
export default ViewAll;
