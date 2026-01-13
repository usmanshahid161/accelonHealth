import React                           from "react";
import { Row, Col, Typography, Space } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
}                                      from "@ant-design/icons";
import "./Footer.scss";
import logo                            from "../../assets/logo/logo blue.png";
import { ReactComponent as LinkedIn }  from '../AboutUs/assets/linkedIn.svg';
import { Link }                        from 'react-router-dom';
import { ReactComponent as Saudi }     from '../../assets/flags/saudi.svg';
import { ReactComponent as USA }       from '../../assets/flags/usa.svg';
import { ReactComponent as Egypt }     from '../../assets/flags/egypt.svg';

const { Title, Text } = Typography;

const Footer = () => {
  const defaultAction = () => {
    window.open(
      "https://www.linkedin.com/company/accelon-health/?viewAsMember=true",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <footer className="footer">
      <Row gutter={ [40, 32] } className={ "footerContent" }>
        {/* BRAND */ }
        <Col xs={ 24 } md={ 12 } lg={ 6 }>
          <Space direction="vertical" size={ 16 } className={ "footerData" }>
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

            <LinkedIn title={ "Click to open" } style={ {
              cursor: "pointer"
            } } onClick={ () => defaultAction() }/>
          </Space>
        </Col>

        {/* LOCATIONS */ }
        <Col xs={ 24 } md={ 12 } lg={ 6 } className={ "footerData" }>
          <Title level={ 5 }>WHERE TO FIND US?</Title>

          <Space direction="vertical" size={ 14 }>
            <div>
              <Text className={ "officeHead" }>
                <Saudi style={ {
                  height: 18,
                  width: 18
                } }/> KSA Office (Riyadh)</Text>
              <Text>
                3279 Al-Amir Mamdouh bin Abdulaziz <br/>
                Riyadh 7273, KSA
              </Text>
            </div>

            <div>
              <Text className={ "officeHead" }> <USA style={ {
                height: 18,
                width: 18
              } }/> USA Office</Text>
              <Text>
                254 Chapman Rd, Ste 208, <br/>
                Newark, DE 19702
              </Text>
            </div>

            <div>
              <Text className={ "officeHead" }> <Egypt style={ {
                height: 18,
                width: 18
              } }/> Egypt Office</Text>
              <Text>
                41 Ahmed Tayseer, Nasr City, <br/>
                Cairo 11757
              </Text>
            </div>
          </Space>
        </Col>

        {/* CONNECT */ }
        <Col xs={ 24 } md={ 12 } lg={ 6 } className={ "footerData" }>
          <Title level={ 5 }>LET’S CONNECT</Title>

          <Text className="connect-text ">
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
        <Col xs={ 24 } md={ 12 } lg={ 6 } className="footerData">
          <Title level={ 5 }>RESOURCES</Title>

          <Title level={ 5 }>Outsourcing Services</Title>
          <ul className="footer-list">
            <li>
              <Link to="/professional/revenue">Revenue Cycle Management</Link>
            </li>
            <li>
              <Link to="/professional/healthCare">Healthcare Consulting</Link>
            </li>
            <li>
              <Link to="/professional/contactCenter">Medical Contact Center</Link>
            </li>
          </ul>

          <Title level={ 5 }>Technology Services</Title>
          <ul className="footer-list">
            <li><Link to="/technology/notes">AccelonNote</Link></li>
            <li><Link to="/technology/code">AccelonCode</Link></li>
            <li><Link to="/technology/audit">AccelonAudit</Link></li>
            <li><Link to="/technology/voice">AccelonVoice</Link></li>
            <li><Link to="/technology/beauty">AccelonBeauty</Link></li>
          </ul>

          <Title level={ 5 }>Company</Title>
          <ul className="footer-list">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
