import React from "react";
import QuickGlanceCards from "../quick-glance-card/QuickGlanceCards";
import SpendData from "../spend/SpendData";
import InstanceList from "../instance-list/InstanceList";
import RightSizingTable from "../right-sizing/RightSizingTable";

function QuickGlanceIndex() {
  return (
    <div>
      <QuickGlanceCards />
      <div className="py-9">
        <SpendData />
      </div>
      <InstanceList />
    </div>
  );
}

export default QuickGlanceIndex;
