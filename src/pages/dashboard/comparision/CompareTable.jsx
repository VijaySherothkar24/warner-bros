import React from "react";
import { Table } from "antd";
import CompTable from "./CompTable";
const columns = [
  {
    title: "AWS Instance Type",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Azure Instance Type",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "GCP Instance Type",
    dataIndex: "address",
    key: "address",
  },
];
const data = [
  {
    key: 1,
    name: "t3a.small",
    age: "Standard_B2s",
    address: "n1-standard-8",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    name: "t3.small",
    age: "Standard_B1ls",
    address: "n1-standard-1",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
];
const CompareTable = () => (
  <Table
    columns={columns}
    expandable={{
      expandedRowRender: (record) => <CompTable />,
    }}
    dataSource={data}
  />
);
export default CompareTable;
