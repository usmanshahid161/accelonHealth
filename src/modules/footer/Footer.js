import React from "react";
import { Row, Col, Typography, Space } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import "./Footer.scss";
import logo                            from "../../assets/logo/logo.png";
import { ReactComponent as LinkedIn } from '../AboutUs/assets/linkedIn.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Saudi } from '../../assets/flags/saudi.svg';
import { ReactComponent as USA } from '../../assets/flags/usa.svg';
import { ReactComponent as Egypt } from '../../assets/flags/egypt.svg';
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

const Footer = () => {
  const { t } = useTranslation();

  const defaultAction = () => {
    window.open(
      "https://www.linkedin.com/company/accelon-health/?viewAsMember=true",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="footer">
      <Row gutter={[40, 32]} className={"footerContent"}>
        {/* BRAND */}
        <Col xs={24} md={12} lg={6}>
          <Space direction="vertical" size={16} className={"footerData"}>
            <div className="brand">
              <img src={logo} alt="Accelon Health" className="logo" />
            </div>

            <Text italic className="tagline">{t("footer.brand.tagline")}</Text>

            <Text className="description">{t("footer.brand.description")}</Text>

            <LinkedIn
              title={"Click to open"}
              style={{ cursor: "pointer" }}
              onClick={() => defaultAction()}
            />
          </Space>
        </Col>

        {/* LOCATIONS */}
        <Col xs={24} md={12} lg={6} className={"footerData"}>
          <Title level={5}>{t("footer.locations.heading")}</Title>

          <Space direction="vertical" size={14}>
            <div>
              <Text className={"officeHead"}>
                <Saudi style={{ height: 18, width: 18 }} /> {t("footer.locations.ksa.office")}
              </Text>
              <Text>{t("footer.locations.ksa.address")}</Text>
            </div>

            <div>
              <Text className={"officeHead"}>
                <USA style={{ height: 18, width: 18 }} /> {t("footer.locations.usa.office")}
              </Text>
              <Text>{t("footer.locations.usa.address")}</Text>
            </div>

            <div>
              <Text className={"officeHead"}>
                <Egypt style={{ height: 18, width: 18 }} /> {t("footer.locations.egypt.office")}
              </Text>
              <Text>{t("footer.locations.egypt.address")}</Text>
            </div>
          </Space>
        </Col>

        {/* CONNECT */}
        <Col xs={24} md={12} lg={6} className={"footerData"}>
          <Title level={5}>{t("footer.connect.heading")}</Title>

          <Text className="connect-text">
            {t("footer.connect.text")}
          </Text>

          <Title level={5} style={{ marginTop: 24 }}>
            {t("footer.connect.directLines")}
          </Title>

          <Space direction="vertical">
            <a href={`tel:${t("footer.connect.phones.ksa")}`}>
              <Text><PhoneOutlined /> KSA {t("footer.connect.phones.ksa")}</Text>
            </a>
            <a href={`tel:${t("footer.connect.phones.usa")}`}>
              <Text><PhoneOutlined /> US {t("footer.connect.phones.usa")}</Text>
            </a>
            <a href={`tel:${t("footer.connect.phones.egypt")}`}>
              <Text><PhoneOutlined /> Egypt {t("footer.connect.phones.egypt")}</Text>
            </a>
            <a
              href={`mailto:${t("footer.connect.email")}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Send Email"
            >
              <Text><MailOutlined /> {t("footer.connect.email")}</Text>
            </a>
          </Space>
        </Col>

        {/* RESOURCES */}
        <Col xs={24} md={12} lg={6} className="footerData">
          <Title level={5}>{t("footer.resources.heading")}</Title>

          <Title level={5}>{t("footer.resources.professionalSolutions.heading")}</Title>
          <ul className="footer-list">
            <li><Link to="/professional/revenue">{t("footer.resources.professionalSolutions.links.revenue")}</Link></li>
            <li><Link to="/professional/healthCare">{t("footer.resources.professionalSolutions.links.healthCare")}</Link></li>
            <li><Link to="/professional/contactCenter">{t("footer.resources.professionalSolutions.links.contactCenter")}</Link></li>
          </ul>

          <Title level={5}>{t("footer.resources.technologySolutions.heading")}</Title>
          <ul className="footer-list">
            <li><Link to="/technology/notes">{t("footer.resources.technologySolutions.links.notes")}</Link></li>
            <li><Link to="/technology/code">{t("footer.resources.technologySolutions.links.code")}</Link></li>
            <li><Link to="/technology/audit">{t("footer.resources.technologySolutions.links.audit")}</Link></li>
            <li><Link to="/technology/voice">{t("footer.resources.technologySolutions.links.voice")}</Link></li>
            <li><Link to="/technology/beauty">{t("footer.resources.technologySolutions.links.beauty")}</Link></li>
          </ul>

          <Title level={5}>{t("footer.resources.company.heading")}</Title>
          <ul className="footer-list">
            <li><Link to="/about">{t("footer.resources.company.links.about")}</Link></li>
            <li><Link to="/contact">{t("footer.resources.company.links.contact")}</Link></li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
