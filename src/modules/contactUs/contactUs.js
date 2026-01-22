import React                                    from 'react';
import "./contactUs.scss";
import ButtonComponent                          from '../../components/button/Button';
import CardsWOBg                                from '../../components/cardsWOBg/cardsWOBg';
import ContentBox                               from '../../components/contentBox/contentBox';
import ContentImageBox                          from '../../components/ContentImageBox/ContentImageBox';
import SEO                                      from '../../components/SEO/Seo';
import backImg                                  from "./assets/HeroImage.jpeg";
import HeadingDescription                       from '../../components/heading&description/heading&description';
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
import { ReactComponent as Saudi }              from '../../assets/flags/saudi.svg';
import { ReactComponent as USA }                from '../../assets/flags/usa.svg';
import { ReactComponent as Egypt }              from '../../assets/flags/egypt.svg';
import { useTranslation }                       from "react-i18next";

const { Title, Text } = Typography;

const ContactUsPage = () => {
  const { t } = useTranslation();

  const expect = [
    {
      heading: t("contact.expect.listeningEar.title"),
      description: t("contact.expect.listeningEar.desc")
    },
    {
      heading: t("contact.expect.expertInsight.title"),
      description: t("contact.expect.expertInsight.desc")
    },
    {
      heading: t("contact.expect.tailoredSolutions.title"),
      description: t("contact.expect.tailoredSolutions.desc")
    },
    {
      heading: t("contact.expect.ongoingPartnership.title"),
      description: t("contact.expect.ongoingPartnership.desc")
    },
  ];

  return <>
    <SEO
      title={ "Contact Accelon Health | Transform Your Healthcare Business" }
      description={ "Ready to elevate your healthcare business? Connect with our experts to start your journey toward greater efficiency, growth, and excellence." }
      ogURL={ "/contact" }
    />

    <div className={ "contactUsPageContainer" }>
      <ContentImageBox backImg={ backImg } shaded={ true } fullHeight={ true }>
        <div className={ "endToEndRcm" }>
          <h1>{ t("contact.hero.title") }</h1>
          <p>{ t("contact.hero.description") }</p>

          <ButtonComponent className={ "endToEndRcmBtn" }
                           color={ "rgba(255,255,255,.2)" }
                           style={ { marginTop: 60 } }>
            { t("contact.hero.bookCall") }
          </ButtonComponent>

          <ButtonComponent className={ "endToEndRcmBtn" }
                           color={ "rgba(255,255,255)" }
                           actionFunc={ () => {
                             document.getElementById("contact-section")
                               ?.scrollIntoView({ behavior: "smooth" });
                           } }
                           style={ { height: "60px", marginTop: 10, color: "var(--primary-color)" } }>
            { t("contact.hero.sendMessage") }
          </ButtonComponent>
        </div>
      </ContentImageBox>

      <div className={ "marginFromTop" }/>

      <div>
        <HeadingDescription
          heading={ <h1>{ t("contact.reachUs.title") } <span
            style={ { color: "var(--primary-color)" } }>{ t("contact.reachUs.highlight") }</span></h1> }
        />

        <div className={ "contactUsPageContent" }>
          <Row gutter={ [32, 32] }>
            <Col xs={ 24 } md={ 12 }>
              <Space align="start">
                <PhoneOutlined style={ { fontSize: 24 } }/>
                <div>
                  <Text strong>{ t("contact.info.mainLine") }</Text>
                  <br/>
                  <a href="tel:+966598698532">
                    <Text>+966 59 869 8532</Text>
                  </a>
                </div>
              </Space>
            </Col>

            <Col xs={ 24 } md={ 12 }>
              <Space align="start">
                <MailOutlined style={ { fontSize: 24 } }/>
                <div>
                  <Text strong>{ t("contact.info.generalEmail") }</Text>
                  <br/>
                  <a href="mailto:contact@accelonhealth.com" target="_blank" rel="noopener noreferrer"
                     title={ t("contact.info.sendEmail") }>
                    <Text>contact@accelonhealth.com</Text>
                  </a>
                </div>
              </Space>
            </Col>

            <Col xs={ 24 } md={ 12 }>
              <Space align="start">
                <ClockCircleOutlined style={ { fontSize: 24 } }/>
                <div>
                  <Text strong>{ t("contact.info.businessHours") }</Text>
                  <br/>
                  <Text>{ t("contact.info.hours") }</Text>
                </div>
              </Space>
            </Col>

            <Col xs={ 24 } md={ 12 }>
              <Space align="start">
                <FieldTimeOutlined style={ { fontSize: 24 } }/>
                <div>
                  <Text strong>{ t("contact.info.responseTime") }</Text>
                  <br/>
                  <Text>{ t("contact.info.responseDesc") }</Text>
                </div>
              </Space>
            </Col>
          </Row>

          <Divider/>

          <div style={ { padding: "2rem", borderRadius: 8, background: "#fff" } }>
            <div style={ { display: "flex", gap: 6, justifyContent: "center" } }>
              <EnvironmentFilled style={ { color: "#FFB800", fontSize: 24 } }/>
              <Title level={ 3 } style={ { marginTop: 8, fontWeight: "bold" } }>
                { t("contact.offices.title") } <span
                style={ { color: "var(--primary-color)" } }>{ t("contact.offices.highlight") }</span>
              </Title>
            </div>

            <Row gutter={ [32, 32] } style={ { marginTop: 30 } }>
              <Col xs={ 24 } md={ 12 }>
                <Space align="start">
                  <BankOutlined style={ { fontSize: 24 } }/>
                  <div>
                    <Text className={ "officeHead" }><Saudi
                      style={ { height: 18, width: 18 } }/>{ t("contact.offices.ksa.title") }</Text>
                    <Text>{ t("contact.offices.ksa.addressLine1") }<br/>{ t("contact.offices.ksa.addressLine2") }</Text>
                  </div>
                </Space>
              </Col>

              <Col xs={ 24 } md={ 12 }>
                <Space align="start">
                  <BankOutlined style={ { fontSize: 24 } }/>
                  <div>
                    <Text className={ "officeHead" }><USA
                      style={ { height: 18, width: 18 } }/>{ t("contact.offices.usa.title") }</Text>
                    <Text>{ t("contact.offices.usa.addressLine1") }<br/>{ t("contact.offices.usa.addressLine2") }</Text>
                  </div>
                </Space>
              </Col>

              <Col xs={ 24 } md={ 12 }>
                <Space align="start">
                  <BankOutlined style={ { fontSize: 24 } }/>
                  <div>
                    <Text className={ "officeHead" }><Egypt
                      style={ { height: 18, width: 18 } }/>{ t("contact.offices.egypt.title") }</Text>
                    <Text>{ t("contact.offices.egypt.addressLine1") }<br/>{ t("contact.offices.egypt.addressLine2") }
                    </Text>
                  </div>
                </Space>
              </Col>
            </Row>

            <HeadingDescription heading={ t("contact.ready.title") }/>
            <div style={ { display: "flex", justifyContent: "center" } }>
              <ButtonComponent size={ "large" }
                               className={ "scheduleBtn" }>{ t("contact.ready.bookStrategy") }</ButtonComponent>
            </div>
          </div>
        </div>
      </div>


      <div id="contact-section" className={ "marginFromTop" }/>
      <ContactUs/>


      <div className={ "contentWrapper" }>
        <HeadingDescription
          heading={ <h1>{ t("contact.expect.title") } <span
            style={ { color: "var(--primary-color)" } }>{ t("contact.expect.highlight") }</span></h1> }
        />
        <div className={ "quiteAutomationContainer" } style={ {
          marginTop: -80
        } }>
          <Row>
            { expect.map(item =>
              <Col xs={ 24 } md={ 6 }><CardsWOBg heading={ item.heading } description={ item.description }/></Col>
            ) }
          </Row>
        </div>
      </div>

      <ContentBox>
        <div className={ "endToEndRcm" } style={ { marginTop: 0 } }>
          <i><h1>{ t("contact.resources.notReady") }</h1></i>
          <h2>{ t("contact.resources.start") }</h2>
          <div style={ { display: "flex", flexDirection: "column", gap: 6, width: "100%", marginTop: 20 } }>
            <p1>{ t("contact.resources.caseStudies") }</p1>
            <p1>{ t("contact.resources.checklist") }</p1>
            <p1>{ t("contact.resources.compare") }</p1>
          </div>
          <ButtonComponent className={ "endToEndRcmBtn" } color={ "white" } size={ "large" } style={ {
            backgroundColor: "white",
            marginTop: 50,
            color: "var(--primary-color)"
          } }>
            { t("contact.resources.explore") }
          </ButtonComponent>
        </div>
      </ContentBox>
    </div>
  </>
}

export default ContactUsPage;
