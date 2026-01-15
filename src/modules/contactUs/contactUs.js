import React                                    from 'react';
import "./contactUs.scss";
import ButtonComponent                          from '../../components/button/Button';
import CardsWOBg                                from '../../components/cardsWOBg/cardsWOBg';
import ContentBox                               from '../../components/contentBox/contentBox';
import ContentImageBox    from '../../components/ContentImageBox/ContentImageBox';
import backImg            from "./assets/HeroImage.jpeg";
import HeadingDescription from '../../components/heading&description/heading&description';
import { Row, Col, Typography, Space, Divider } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  FieldTimeOutlined,
  EnvironmentFilled,
  BankOutlined,
}                                               from "@ant-design/icons";
import ContactUs                                from '../landingPage/ContactUs/ContactUs';
import {ReactComponent as Saudi}                         from '../../assets/flags/saudi.svg';
import {ReactComponent as USA}                         from '../../assets/flags/usa.svg';
import {ReactComponent as Egypt}                         from '../../assets/flags/egypt.svg';

const { Title, Text } = Typography;

const ContactUsPage = () => {
  const expect = [
    {
      heading: "A Listening Ear",
      description: "we start with your context, not our pitch"
    },
    {
      heading: "Expert Insight",
      description: "Honest assessment and clear recommendations"
    },
    {
      heading: "Tailored Solutions",
      description: "Right-sized for your organization and market"
    },
    {
      heading: "Ongoing Partnership",
      description: "measurable outcomes, not one-off fixes"
    },

  ]
  return <div className={ "contactUsPageContainer" }>
    <ContentImageBox backImg={ backImg } shaded={ true } fullHeight={ true }>
      <div className={ "endToEndRcm" }>
        <h1>Let’s Build a Healthier, Stronger Future—Together </h1>
        <p>Wherever you are in your growth journey, we’ll help you leap forward. The first step toward transformation is
          a conversation.</p>
        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "rgba(255,255,255,.2)" }
                         style={ {
                           marginTop: 60,
                         } }>Book a Transformation Call</ButtonComponent>
        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "rgba(255,255,255)" }
                         actionFunc={ () => {
                           document
                             .getElementById("contact-section")
                             ?.scrollIntoView({ behavior: "smooth" });
                         } }
                         style={ {
                           height: "60px",
                           marginTop: 10,
                           color: "var(--primary-color)"
                         } }>Send a Message</ButtonComponent>
      </div>
    </ContentImageBox>
    <div className={ "marginFromTop" }/>

    <HeadingDescription
      heading={ <h1>Reach Us <span style={ { color: "var(--primary-color)" } }>Your Way</span></h1> }/>

    <div className={ "contactUsPageContent" }
    >
      {/* Top Section */ }
      <Row gutter={ [32, 32] }>
        <Col xs={ 24 } md={ 12 }>
          <Space align="start">
            <PhoneOutlined style={ { fontSize: 24 } }/>
            <div>
              <Text strong>Main Line</Text>
              <br/>
              <Text>+966 59 869 8532</Text>
            </div>
          </Space>
        </Col>

        <Col xs={ 24 } md={ 12 }>
          <Space align="start">
            <MailOutlined style={ { fontSize: 24 } }/>
            <div>
              <Text strong>General Email</Text>
              <br/>
              <Text>contact@accelonhealth.com</Text>
            </div>
          </Space>
        </Col>

        <Col xs={ 24 } md={ 12 }>
          <Space align="start">
            <ClockCircleOutlined style={ { fontSize: 24 } }/>
            <div>
              <Text strong>Business Hours</Text>
              <br/>
              <Text>Sunday–Thursday, 8:00–18:00 (local)</Text>
            </div>
          </Space>
        </Col>

        <Col xs={ 24 } md={ 12 }>
          <Space align="start">
            <FieldTimeOutlined style={ { fontSize: 24 } }/>
            <div>
              <Text strong>Response Time</Text>
              <br/>
              <Text>We reply within 1 business day</Text>
            </div>
          </Space>
        </Col>
      </Row>

      <Divider/>

      {/* Offices Section */ }
      <div
        style={ {
          padding: "2rem",
          borderRadius: 8,
          background: "#fff",
        } }
      >
        <div style={ {
          display: "flex",
          gap: 6,
          justifyContent: "center"
        } }>
          <EnvironmentFilled style={ { color: "#FFB800", fontSize: 24 } }/>
          <Title level={ 3 } style={ { marginTop: 8, fontWeight: "bold" } }>
            Our <span style={ { color: "#1C2460" } }>Offices</span>
          </Title>
        </div>

        <Row gutter={ [32, 32] } style={ {
          marginTop: 30
        } }>
          {/* KSA Office */ }
          <Col xs={ 24 } md={ 12 }>
            <Space align="start">
              <BankOutlined style={ { fontSize: 24 } }/>
              <div>
                <Text className={ "officeHead" }> <Saudi style={ {
                  height: 18,
                  width: 18
                } }/> KSA Office (Riyadh)</Text>
                <Text>
                  3279 Al-Amir Mamdouh bin Abdulaziz <br/>
                  Riyadh 7273, KSA
                </Text>
              </div>
            </Space>
          </Col>

          {/* USA Office */ }
          <Col xs={ 24 } md={ 12 }>
            <Space align="start">
              <BankOutlined style={ { fontSize: 24 } }/>
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
            </Space>
          </Col>

          {/* Egypt Office */ }
          <Col xs={ 24 } md={ 12 }>
            <Space align="start">
              <BankOutlined style={ { fontSize: 24 } }/>
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
        </Row>

        <HeadingDescription heading={ "Ready To Leap Beyond Limits" }/>
        <div style={ {
          display: "flex",
          justifyContent: "center"
        } }>
          <ButtonComponent size={ "large" } className={ "scheduleBtn" }>
            Book a 30 Minutes Strategy Call
          </ButtonComponent>
        </div>
      </div>
    </div>

    <div className={ "marginFromTop" }/>

    <div id="contact-section"/>
    <ContactUs/>
    <div className={ "marginFromTop" }/>

    <div className={ "contentWrapper" }>
      <div>
        <HeadingDescription
          heading={ <h1>What To <span style={ { color: "var(--primary-color)" } }>Expect</span></h1> }/>
        <div className={ "quiteAutomationContainer" }>
          <Row>
            {
              expect.map(item => <Col xs={ 24 } md={ 6 }> <CardsWOBg heading={ item?.heading }
                                                                     description={ item?.description }/></Col>)
            }
          </Row>
        </div>
      </div>
    </div>

    <div className={ "marginFromTop" }/>

    <ContentBox>
      <div className={ "endToEndRcm" } style={ {
        marginTop: 0,
      } }>
        <i><h1>Not Ready To Talk?</h1></i>
        <h2>
          Start with a resource
        </h2>
        <div style={ {
          display: "flex",
          flexDirection: "column",
          gap: 6,
          width: "100%",
          marginTop: 20
        } }>
          <p1>Outcomes & Case Studies</p1>
          <p1>Performance Checklist</p1>
          <p1>Compare Your KPIs to Peers</p1>
        </div>
        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "white" }
                         size={ "large" }
                         style={ {
                           backgroundColor: "white",
                           marginTop: 50,
                           color: "var(--primary-color)"
                         } }>Explore Case Studies</ButtonComponent>
      </div>
    </ContentBox>
  </div>
}

export default ContactUsPage;