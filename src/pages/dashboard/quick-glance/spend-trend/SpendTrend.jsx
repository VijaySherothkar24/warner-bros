import React from "react";
import Chart from "react-apexcharts";

const SpendTrend = () => {
  // Sample x-axis data
  const categories = [
    "firewall-web",
    "active-directory",
    "booking",
    "datavault",
    "employee-portal",
    "local-website",
    "networks",
    "sharepoint",
    "stacking-period",
    "static-website",
    "support",
    "whatsapp-bot",
  ];

  // Generating random y-axis numeric values
  const generateRandomData = () => {
    return Array.from({ length: categories.length }, () =>
      Math.floor(Math.random() * 100)
    );
  };

  const series = [
    {
      name: "Series 1",
      data: generateRandomData(),
    },
  ];

  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
    },
    grid: {
      show: true,
      padding: { left: 6, right: 6, top: 2, bottom: -10 },
    },
    xaxis: {
      categories: categories,

      labels: {
        style: {
          colors: "#ffffff", // White color for x-axis labels
          fontSize: "10px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ffffff",
          fontSize: "11px", // Corrected font size for y-axis labels
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ["#ff6a2f"],
    },
    stroke: {
      curve: "smooth",
      colors: ["#ff6a2f"],
      width: 3, // Adjust stroke width if needed
    },
    tooltip: {
      x: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="area" height={300} />
    </div>
  );
};

export default SpendTrend;
