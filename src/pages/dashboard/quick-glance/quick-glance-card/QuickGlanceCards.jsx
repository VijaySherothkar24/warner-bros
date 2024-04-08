import { Card, Col, Popover, Row, Switch } from "antd";
import React from "react";
import "../quick-glance.scss";
import CardGraph from "./CardGraph";
import { AiFillInfoCircle } from "react-icons/ai";

function QuickGlanceCards() {
  return (
    <div>
      <Row gutter={16}>
        <Col span={6}>
          <div className="crd relative">
            <h3 className="h-title flex items-center">
              <Popover
                placement="topLeft"
                content={"content"}
                title="Title"
                trigger="hover"
              >
                <AiFillInfoCircle size={14} color="grey" role="button" />
              </Popover>
              <span className="mx-2"> Total Instance</span>
            </h3>
            <h6 className="s-title">20</h6>
            <div className="mk-graph-bg">
              <CardGraph />
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="crd relative ">
            <div className="flex ">
              <h3 className="h-title flex items-center">
                <AiFillInfoCircle size={14} color="grey" role="button" />
                <span className="mx-2">Savings</span>
              </h3>
              <div className="ms-auto">
                <Switch size="small" />
              </div>
            </div>

            <h6 className="s-title">$100</h6>
            <div className="mk-graph-bg">
              <CardGraph />
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="crd relative">
            <h3 className="h-title flex items-center">
              <AiFillInfoCircle size={14} color="grey" role="button" />
              <span className="mx-2"> Average</span>
            </h3>
            <h6 className="s-title">$20</h6>
            <div className="mk-graph-bg">
              <CardGraph />
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="crd relative">
            <h3 className="h-title flex items-center">
              <Popover
                placement="topLeft"
                content={"content"}
                title="Title"
                trigger="hover"
              >
                <AiFillInfoCircle size={14} color="grey" role="button" />
              </Popover>
              <span className="mx-2">Projected Spend</span>
            </h3>
            <h6 className="s-title">20</h6>
            <div className="mk-graph-bg">
              <CardGraph />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default QuickGlanceCards;
