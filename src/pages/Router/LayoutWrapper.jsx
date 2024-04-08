import { Col, Row } from "antd";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { pageType } from "./constants";

function LayoutWrapper({ layoutIdentifier = "", ...props }) {
  switch (layoutIdentifier) {
    case pageType.DASHBOARD:
      return (
        <Row gutter={0}>
          <Col span={4}>
            <Sidebar />
          </Col>
          <Col span={20}>
            {/* <Navbar /> */}
            <div className="py-5 px-5">{props.children}</div>
          </Col>
        </Row>
      );

    default:
      return <div> {props.children}</div>;
  }
}
export default LayoutWrapper;
