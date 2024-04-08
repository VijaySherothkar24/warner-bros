import { Col, Row } from "antd";
import React from "react";
import SpendGraph from "./SpendGraph";
import SpendTrend from "../spend-trend/SpendTrend";

function SpendData() {
  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <div className="crd relative">
            <SpendGraph />
          </div>
        </Col>
        <Col span={12}>
          <div className="crd relative">
            <SpendTrend />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default SpendData;
