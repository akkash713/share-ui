import React, { Component } from "react";
import { Carousel, Layout, Button } from "antd";

const { Content } = Layout;

class AuthLayout extends Component {
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Content className="auth-layout-container">
          <div className="auth-layout-left">
            <Carousel autoplay className="slider">
              <div>
                <h2 className="slider-item-title page-title">
                  Almost face to face
                </h2>
                <p className="slider-item-subtext mt-4">
                  The business tool that lets you build instant trust, put a
                  face on your brand, and have more personal interactions at
                  scale.
                </p>
                <div className="slider-item-img mt-3">
                  <img
                    src={require("../../../assets/images/slider-image/image1.png")}
                  />
                </div>
              </div>
              <div>
                <h2 className="slider-item-title page-title">
                  Almost face to face
                </h2>
                <p className="slider-item-subtext">
                  Sed olnt exugit, secommodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas
                </p>
                <div className="slider-item-img mt-3">
                  <img
                    src={require("../../../assets/images/slider-image/image1.png")}
                  />
                </div>
              </div>
              <div>
                <h2 className="slider-item-title">
                  Nemo enim ipsam voluptatem qu
                </h2>
                <p className="slider-item-subtext">
                  sit volipsam derit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas
                </p>
                <div className="slider-item-img mt-3">
                  <img
                    src={require("../../../assets/images/slider-image/image1.png")}
                  />
                </div>
              </div>
              <div>
                <h2 className="slider-item-title">
                  Nemo enim ipsam voluptatem qu
                </h2>
                <p className="slider-item-subtext">
                  Sed ut persuptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos{" "}
                </p>
                <div className="slider-item-img mt-3">
                  <img
                    src={require("../../../assets/images/slider-image/image1.png")}
                  />
                </div>
              </div>
            </Carousel>
          </div>
          <div className="auth-layout-right">
            <div className="absolute-wrapper">
              <p className="action-text mr-3">{this.props.actionText}</p>
              <Button
                className="primary-org-button"
                type="primary"
                href={this.props.to}
              >
                {this.props.action}
              </Button>
            </div>
            <div className="auth-card-container w-100">
              <img
                src={require("../../../assets/images/logo.svg")}
                className="mb-5 d-inline-block"
              />
              <h4 className=" mb-3 page-title fw-500">
                {this.props.authTitle}
              </h4>

              <h4 className="page-title">{this.props.authSubText}</h4>
              {this.props.authMessage ? (
                <p className="auth-message mt-3">{this.props.authMessage}</p>
              ) : null}
              <div className="auth-form mt-5">{this.props.children}</div>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default AuthLayout;
