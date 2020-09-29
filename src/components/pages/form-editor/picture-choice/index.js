import React from "react";
import ViewAll from "../view-all";

const PictureChoice = () => {
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
            <h5 className="fw-700">b. What is the capital of Australia?</h5>
            <div className="row img-option mx-n1">
              <div className="col-md-6 p-1">
                <div className="img-card">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
                    className="img-fluid"
                  />
                  <div className="text-orange text-center">Lorumex</div>
                </div>
              </div>
              <div className="col-md-6 selected p-1">
                <div className="img-card">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
                    className="img-fluid"
                  />
                  <div className="text-orange text-center">Lorumex</div>
                </div>
              </div>
              <div className="col-md-6 p-1">
                <div className="img-card">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
                    className="img-fluid"
                  />
                  <div className="text-orange text-center">Lorumex</div>
                </div>
              </div>
              <div className="col-md-6 p-1">
                <div className="img-card">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
                    className="img-fluid"
                  />
                  <div className="text-orange text-center">Lorumex</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PictureChoice;
