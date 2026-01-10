import React                           from "react";
import { Row, Col, Typography, Space } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
}                                      from "@ant-design/icons";
import "./Footer.scss";
import logo                            from "../../assets/logo/logo blue.png";
import { ReactComponent as LinkedIn }  from '../AboutUs/assets/linkedIn.svg';

const { Title, Text, Link } = Typography;

const Footer = () => {
  return (
    <footer className="footer">
      <Row gutter={ [40, 32] }>
        {/* BRAND */ }
        <Col xs={ 24 } md={ 12 } lg={ 6 }>
          <Space direction="vertical" size={ 16 }>
            <div className="brand">
              <img
                src={ logo }
                alt="Accelon Health"
                className="logo"
              />
            </div>

            <Text italic className="tagline">
              Leap Beyond Limits
            </Text>

            <Text className="description">
              Our precision-crafted solutions reshape workflows,
              enrich patient experiences, and unlock effortless
              performance for providers in Saudi Arabia, the GCC,
              Egypt, and the US. Trust deeper. Rise higher.
            </Text>

            <LinkedIn/>
          </Space>
        </Col>

        {/* LOCATIONS */ }
        <Col xs={ 24 } md={ 12 } lg={ 6 }>
          <Title level={ 5 }>WHERE TO FIND US?</Title>

          <Space direction="vertical" size={ 14 }>
            <Text>
              🇸🇦 <strong>KSA Office</strong><br/>
              3279 Al-Amir Mamdouh bin Abdul,<br/>
              Riyadh, KSA, 7273
            </Text>

            <Text>
              🇺🇸 <strong>US Office</strong><br/>
              254 Chapman Rd, Ste 208,<br/>
              Newark, DE 19702
            </Text>

            <Text>
              🇪🇬 <strong>Egypt Office</strong><br/>
              41 Ahmed Tayseer, Nasr City,<br/>
              Cairo 11757
            </Text>
          </Space>
        </Col>

        {/* CONNECT */ }
        <Col xs={ 24 } md={ 12 } lg={ 6 }>
          <Title level={ 5 }>LET’S CONNECT</Title>

          <Text className="connect-text">
            Ready to Leap Beyond Limits?
            <br/>
            Tell us what you're building, solving,
            or imagining – we’ll help you go further, faster.
          </Text>

          <Title level={ 5 } style={ { marginTop: 24 } }>
            Direct Lines
          </Title>

          <Space direction="vertical">
            <Text>
              <PhoneOutlined/> KSA +966 59 869 8532
            </Text>
            <Text>
              <PhoneOutlined/> US +1 (551) 312-7257
            </Text>
            <Text>
              <PhoneOutlined/> Egypt +20 110 200 1134
            </Text>
            <Text>
              <MailOutlined/> contact@accelonhealth.com
            </Text>
          </Space>
        </Col>

        {/* RESOURCES */ }
        <Col xs={ 24 } md={ 12 } lg={ 6 }>
          <Title level={ 5 }>RESOURCES</Title>

          <Title level={ 5 }>Outsourcing Services</Title>
          <ul className="footer-list">
            <li>Revenue Cycle Management</li>
            <li>Healthcare Consulting</li>
            <li>Medical Contact Center</li>
          </ul>

          <Title level={ 5 }>Technology Services</Title>
          <ul className="footer-list">
            <li>AccelonNote</li>
            <li>AccelonCode</li>
            <li>AccelonAudit</li>
            <li>AccelonVoice</li>
            <li>AccelonBeauty</li>
          </ul>

          <Title level={ 5 }>Company</Title>
          <ul className="footer-list">
            <li><Link>About Us</Link></li>
            <li><Link>Contact Us</Link></li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
