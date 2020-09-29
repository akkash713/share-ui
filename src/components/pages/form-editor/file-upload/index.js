import React, { Component } from "react";
import { Upload, Button, message } from "antd";
import ViewAll from "../view-all";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class FileUpload extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <ViewAll />
        </div>
        <div className="col-md-6 overflowY-scroll bg-white">
          <div className="edit-view-block p-4">
            <div className="d-flex justify-content-end">
              <div className="btn-shadow d-flex align-items-center no-wrap mr-2 px-2">
                <div className="logic-icon icon icon-m"></div>Test logic
              </div>
              <div className="btn-shadow icon reload-icon d-flex icon-l"></div>
            </div>
            <div className="my-5">
              <h5 className="fw-700">
                12. Can you upload an image of your city?
              </h5>
              <Dragger {...props} className="file-upload-custom">
                <p className="ant-upload-drag-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="40"
                    viewBox="0 0 60 40"
                    fill="none"
                  >
                    <path
                      d="M48.375 15.1C46.675 6.475 39.1 0 30 0C22.775 0 16.5 4.1 13.375 10.1C5.85 10.9 0 17.275 0 25C0 33.275 6.725 40 15 40H47.5C54.4 40 60 34.4 60 27.5C60 20.9 54.875 15.55 48.375 15.1ZM47.5 35H15C9.475 35 5 30.525 5 25C5 19.875 8.825 15.6 13.9 15.075L16.575 14.8L17.825 12.425C20.2 7.85 24.85 5 30 5C36.55 5 42.2 9.65 43.475 16.075L44.225 19.825L48.05 20.1C51.95 20.35 55 23.625 55 27.5C55 31.625 51.625 35 47.5 35ZM20 22.5H26.375V30H33.625V22.5H40L30 12.5L20 22.5Z"
                      fill="#F15A29"
                      fill-opacity="0.6"
                    />
                  </svg>
                </p>
                <p className="ant-upload-text">
                  <span className="text-orange">Choose file</span> or drag here
                </p>
                <p className="ant-upload-hint">Size limit 10MB</p>
              </Dragger>
            </div>

            <div className="d-block">
              <Button className="primary-org-button btn-m">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FileUpload;
