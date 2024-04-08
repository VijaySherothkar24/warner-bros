import React from "react";
import Chart from "react-apexcharts";

function DevProdChart() {
  // Sample data for the bar chart
  const series = [
    {
      name: "Sum 1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 60, 70, 91],
    },
    {
      name: "Sum2",
      data: [20, 35, 30, 45, 60, 55, 65, 75, 85, 95, 105, 115],
    },
    {
      name: "Sum2",
      data: [20, 35, 30, 45, 60, 55, 65, 75, 85, 95, 105, 115],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "52%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      padding: { left: 6, right: 6, top: 2, bottom: -26 },
    },
    xaxis: {
      categories: [
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
      ],
      labels: {
        style: {
          colors: "#ffffff", // White color for x-axis labels
          fontSize: "10px",
        },
      },
    },
    yaxis: {
      // title: {
      //   text: "Spend Data",
      //   style: {
      //     color: "#ffffff", // White color for y-axis label
      //     fontSize: "10px",
      //   },
      // },
      labels: {
        style: {
          colors: "#ffffff",
          fontSize: "11px", // Corrected font size for y-axis labels
        },
      },
    },
    fill: {
      colors: ["#ff6a2f", "#00e396"], // Different colors for each series
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    legend: {
      labels: {
        colors: ["#ff6a2f", "#00e396"], // Orange color for legend labels
      },
      markers: {
        fillColors: ["#ff6a2f", "#00e396"], // Orange color for legend icons
        strokeWidth: 0, // Remove stroke from legend icons
      },
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
}

export default DevProdChart;
