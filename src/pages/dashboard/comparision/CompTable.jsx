import React, { useState } from "react";
import { Col } from "antd";
import { Row } from "antd";

function CompTable() {
  const [active, setactive] = useState(1);
  return (
    <Row gutter={16}>
      <Col span={24}>
        <table className=" text-center">
          <tbody>
            <tr>
              <td>7.24</td>
              <td>11.2</td>
              <td>19.3</td>
            </tr>

            {/* Add more rows if needed */}
          </tbody>
        </table>
      </Col>
    </Row>
  );
}

export default CompTable;
