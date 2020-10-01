import React, { Component } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Button } from "antd";

class CopyClipboard extends React.Component {
    state = {
      value: '',
      copied: false,
    };
   
    render() {
      return (
        <div>
          <input style = {{ height : "42px" , width : '300px'}}
          value={this.state.value} 
            onChange={({target: {value}}) => this.setState({value, copied: false})} />
   
          <CopyToClipboard text={this.state.value}
            onCopy={() => this.setState({copied: true})}>
            <Button className="primary-org-button btn-m">
                  Copy Link
                </Button>
          </CopyToClipboard>
        </div>
      );
    }
  }

  export default CopyClipboard;