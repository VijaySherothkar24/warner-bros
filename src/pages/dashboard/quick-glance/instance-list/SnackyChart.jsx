import { Col, Popover, Row, Switch } from "antd";
import { Chart } from "react-google-charts";
import { AiFillInfoCircle } from "react-icons/ai";
import "../quick-glance.scss";
import CardGraph from "../quick-glance-card/CardGraph";
const SankeyChart = () => {
  const data = [
    ["From", "To", "Server"],
    ["finnone", "Hyderabad DC2", 2],
    ["loan processing", "Hyderabad DC2", 2],
    ["finnone", "Mumbai DC1", 37],
    ["loan processing", "Mumbai DC1", 19],
    ["active_directory", "Mumbai DC2", 5],
    ["board_meeting", "Mumbai DC2", 2],
    ["brs", "Mumbai DC2", 2],
    ["ckyc", "Mumbai DC2", 2],
    ["compliance", "Mumbai DC2", 1],
    ["dedupe", "Mumbai DC2", 1],
  ];
  const options_sankey = {
    sankey: {
      node: {
        label: {
          color: "white",
        },
      },
    },
    noData: {
      text: "No Data",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "#fff",
        fontSize: "20px",
        fontFamily: "Poppins",
      },
    },
  };
  return (
    <>
      <Row gutter={16}>
        <Col span={24}>
          <Row gutter={16}>
            <Col span={6}>
              <div className="crd relative">
                <h3 className="h-title flex items-center">
                  <Popover
                    placement="topLeft"
                    content={"content"}
                    title="Title"
                    trigger="hover"
                  >
                    <AiFillInfoCircle size={14} color="grey" role="button" />
                  </Popover>
                  <span className="mx-2"> Total Inbound request</span>
                </h3>
                <h6 className="s-title">3.95 GB</h6>
                <div className="mk-graph-bg">
                  <CardGraph />
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="crd relative ">
                <div className="flex ">
                  <h3 className="h-title flex items-center">
                    <AiFillInfoCircle size={14} color="grey" role="button" />
                    <span className="mx-2">Total outbound request</span>
                  </h3>
                </div>

                <h6 className="s-title">1.49 GB</h6>
                <div className="mk-graph-bg">
                  <CardGraph />
                </div>
              </div>
            </Col>

            <Col span={6}>
              <div className="crd relative">
                <h3 className="h-title flex items-center">
                  <Popover
                    placement="topLeft"
                    content={"content"}
                    title="Title"
                    trigger="hover"
                  >
                    <AiFillInfoCircle size={14} color="grey" role="button" />
                  </Popover>
                  <span className="mx-2">Total Inbound cost</span>
                </h3>
                <h6 className="s-title">$29.74</h6>
                <div className="mk-graph-bg">
                  <CardGraph />
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="crd relative">
                <h3 className="h-title flex items-center">
                  <AiFillInfoCircle size={14} color="grey" role="button" />
                  <span className="mx-2"> Total outbound cost</span>
                </h3>
                <h6 className="s-title">$29.18</h6>
                <div className="mk-graph-bg">
                  <CardGraph />
                </div>
              </div>
            </Col>
          </Row>
          <div className="py-5"></div>
          <div className="crd relative h-auto">
            <Chart
              chartType="Sankey"
              width="100%"
              height="350px"
              data={data}
              options={options_sankey}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SankeyChart;
