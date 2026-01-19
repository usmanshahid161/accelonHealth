import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { useTranslation } from "react-i18next";
import "./CodingMatrix.scss";
import metricsImage from "../assets/f280c70c-a13c-4e2f-85de-a631030acbf9.jpg";

const { Title, Text } = Typography;

const CodingMetrics = () => {
  const { t } = useTranslation();

  const metrics = t("codingMetrics.metrics", { returnObjects: true });

  return (
    <div className="codingMetricsWrapper">
      <Row gutter={[32, 32]} align="middle">
        {/* Left Image */}
        <Col xs={24} md={12}>
          <div className="imageWrapper">
            <img src={metricsImage} alt={t("codingMetrics.imageAlt")} />
          </div>
        </Col>

        {/* Right Content */}
        <Col xs={24} md={12}>
          <div className="metricsContent">
            <Title level={2}>
              {t("codingMetrics.title.line1")} <br />
              {t("codingMetrics.title.line2")}
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
