import React from "react";
import Chart from "react-apexcharts";

const CardGraph = () => {
  let chartData = [
    { spend: 34, forecast: 120, credit_cost: 80, budget_amount: 150 },
    { spend: 36, forecast: 110, credit_cost: 70, budget_amount: 140 },
    { spend: 35, forecast: 130, credit_cost: 90, budget_amount: 160 },
    { spend: 38, forecast: 115, credit_cost: 75, budget_amount: 145 },
  ];
  let spendData = chartData
    ? chartData.map((item) => Math.abs(item.spend))
    : [];

  const chartDataValue = {
    chartvalue: spendData,
  };

  const spark1 = {
    chart: {
      type: "area",
      height: 500,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "straight",
      colors: "red", // Stroke color
      width: 2, // Stroke width
    },
    fill: {
      type: "solid",
      colors: "#ff6a2f",
      opacity: 0.1,
    },

    series: [
      {
        name: "usage spend",
        data: chartDataValue.chartvalue,
      },
    ],
    // labels: generateLastThreeMonthDates,
    tooltip: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      show: false,
    },
    yaxis: {
      show: false,
    },
  };

  return (
    <div>
      <Chart
        options={spark1}
        series={spark1.series}
        type={"area"}
        height={60}
        width={"100%"}
      />
    </div>
  );
};

export default CardGraph;
