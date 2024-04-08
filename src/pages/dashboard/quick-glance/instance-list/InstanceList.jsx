import { Col, Row } from "antd";
import React from "react";
import InstanceTable from "./InstanceTable";
import SankeyChart from "./SnackyChart";

function InstanceList() {
  return (
    <>
      <Row gutter={16}>
        <Col span={24}>
          <div className="crd relative">
            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th className="br-1">Spot Instance</th>
                    <th>dev-app</th>
                    <th>dev-db</th>
                    <th>dev-web</th>
                    <th className="br-2">prod-web</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Add your table rows here */}
                  <tr>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  {/* Add more rows if needed */}
                </tbody>
              </table>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default InstanceList;
