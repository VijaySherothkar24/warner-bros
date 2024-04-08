import React from "react";
import { Table, Tag } from "antd";
function RightSizingTable() {
  const columns = [
    {
      title: "Right sizing",
      dataIndex: "rightSizing",
      key: "rightSizing",
    },
    {
      title: "Effect",
      dataIndex: "effect",
      key: "effect",
    },
    {
      title: "Impact",
      dataIndex: "impact",
      key: "impact",
      render: () => {
        return <Tag color="green">Medium</Tag>;
      },
    },
    {
      title: "Storage",
      dataIndex: "compute",
      key: "compute",
    },
  ];

  const data = [
    {
      key: "1",
      rightSizing: "Sample 1",
      effect: "Effect 1",
      impact: "Impact 1",
      compute: "Compute 1",
    },
    {
      key: "2",
      rightSizing: "Sample 2",
      effect: "Effect 2",
      impact: "Impact 2",
      compute: "Compute 2",
    },
    // Add more rows as needed
  ];

  return (
    <>
      <div className="crd">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
}

export default RightSizingTable;
