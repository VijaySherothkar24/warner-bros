import { Tabs } from "antd";
import QuickGlanceIndex from "./quick-glance/quick-glance-index/QuickGlanceIndex";
import SankeyChart from "./quick-glance/instance-list/SnackyChart";
import IndexOfComparison from "./comparision/IndexOfComparison";

function IndexOfDashboard() {
  const items = [
    {
      key: "1",
      label: "Quick Glance ",
      children: <QuickGlanceIndex />,
    },
    {
      key: "2",
      label: "Networking",
      children: <SankeyChart />,
    },
    {
      key: "3",
      label: "Cloud Comparison",
      children: <IndexOfComparison />,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}

export default IndexOfDashboard;
