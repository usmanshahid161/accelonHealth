import React from "react";
import { Row, Col, Card, Typography } from "antd";
import "./CodingMatrix.scss";
import metricsImage from "../assets/f280c70c-a13c-4e2f-85de-a631030acbf9.jpg";

const { Title, Text } = Typography;

const metrics = [
  {
    value: "95%",
    description: "accuracy across coded charts",
  },
  {
    value: "1000X faster",
    description: "turnaround vs. manual coding",
  },
  {
    value: "85%+ auto-coded",
    description: "with zero human touch",
  },
  {
    value: "40%",
    description: "fewer coding-related denials",
  },
  {
    value: "30%",
    description: "faster reimbursement cycles",
  },
];

const CodingMetrics = () => {
  return (
    <div className="codingMetricsWrapper">
      <Row gutter={[32, 32]} align="middle">
        {/* Left Image */}
        <Col xs={24} md={12}>
          <div className="imageWrapper">
            <img src={metricsImage} alt="Coding Metrics" />
          </div>
        </Col>

        {/* Right Content */}
        <Col xs={24} md={12}>
          <div className="metricsContent">
            <Title level={2}>
              Coding Metrics That Transform <br /> the Bottom Line
            </Title>

            <div className="metricsList">
              {metrics.map((item, index) => (
                <Card key={index} className="metricCard" bordered={false}>
                  <Title level={4}>{item.value}</Title>
                  <Text>{item.description}</Text>
                </Card>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CodingMetrics;
