import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Spot Instance    ",
    dataIndex: "instanceType",
    key: "instanceType",
  },

  {
    title: "dev-app",
    dataIndex: "vCPU",
    key: "vCPU",
  },

  {
    title: "dev-db",
    dataIndex: "memory",
    key: "memory",
  },
  {
    title: "dev-web",
    dataIndex: "storage",
    key: "storage",
  },
  {
    title: "prod-web",
    dataIndex: "networkPerformance",
    key: "networkPerformance",
  },
];

const data = [
  {
    key: "1",
    instanceType: "t2.medium",
    architecture: "32-bit or 64-bit",
    vCPU: "1",
    ECU: "1",
    memory: "1.7",
    storage: "1 x 160",
    networkPerformance: "Low",
  },
  // Add other rows similarly
];

const InstanceTable = () => {
  return <Table size="middle" columns={columns} dataSource={data} />;
};

export default InstanceTable;
