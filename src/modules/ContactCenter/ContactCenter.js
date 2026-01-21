import React from 'react';
import { Row, Col } from "antd";
import ButtonComponent from '../../components/button/Button';
import CardComponent from '../../components/cardsComponents/cardsComponents';
import CardsWOBg from '../../components/cardsWOBg/cardsWOBg';
import ContentBox from '../../components/contentBox/contentBox';
import ContentImageBox from '../../components/ContentImageBox/ContentImageBox';
import HeaderSection from '../../components/header/HeaderSection';
import HeadingDescription from '../../components/heading&description/heading&description';
import { useTranslation } from 'react-i18next';

import image1 from "./assets/unnamed (2).jpg";
import image2 from "./assets/Image_4K.jpg";
import "./ContactCenter.scss";
import SEO from '../../components/SEO/Seo';

const ContactCenter = () => {
  const { t } = useTranslation();

  const data = [
    { heading: t("contactCenter.cards.visit.heading"), description: t("contactCenter.cards.visit.description") },
    { heading: t("contactCenter.cards.inquiries.heading"), description: t("contactCenter.cards.inquiries.description") },
    { heading: t("contactCenter.cards.education.heading"), description: t("contactCenter.cards.education.description") },
    { heading: t("contactCenter.cards.experience.heading"), description: t("contactCenter.cards.experience.description") },
  ];

  const data1 = [
    { heading: t("contactCenter.impact.noShows.heading"), description: t("contactCenter.impact.noShows.description") },
    { heading: t("contactCenter.impact.satisfaction.heading"), description: t("contactCenter.impact.satisfaction.description") },
    { heading: t("contactCenter.impact.focus.heading"), description: t("contactCenter.impact.focus.description") },
    { heading: t("contactCenter.impact.revenue.heading"), description: t("contactCenter.impact.revenue.description") },
  ];

  const data2 = [
    { heading: t("contactCenter.support.serviceAwareness.heading"), description: t("contactCenter.support.serviceAwareness.description") },
    { heading: t("contactCenter.support.targetedOutreach.heading"), description: t("contactCenter.support.targetedOutreach.description") },
    { heading: t("contactCenter.support.adherence.heading"), description: t("contactCenter.support.adherence.description") },
  ];

  const data3 = [
    { heading: t("contactCenter.difference.medically.heading"), description: t("contactCenter.difference.medically.description") },
    { heading: t("contactCenter.difference.fluency.heading"), description: t("contactCenter.difference.fluency.description") },
    { heading: t("contactCenter.difference.leverage.heading"), description: t("contactCenter.difference.leverage.description") },
  ];

  const faqs = [
    { heading: t("contactCenter.faq.items.languages.heading"), description: t("contactCenter.faq.items.languages.description") },
    { heading: t("contactCenter.faq.items.timeline.heading"), description: t("contactCenter.faq.items.timeline.description") },
    { heading: t("contactCenter.faq.items.systems.heading"), description: t("contactCenter.faq.items.systems.description") },
    { heading: t("contactCenter.faq.items.uptime.heading"), description: t("contactCenter.faq.items.uptime.description") },
    { heading: t("contactCenter.faq.items.compliance.heading"), description: t("contactCenter.faq.items.compliance.description") },
  ];

  return (
    <>
      <SEO
        title={"Accelon Health Contact Center | Patient Engagement & Support Solutions"}
        description={"Learn how Accelon Health's contact center solutions improve patient engagement, streamline inquiries, and optimize healthcare operations."}
        ogURL={"/professional/contactCenter"}
      />

      <div className={"contactCenterContainer"}>
      <HeaderSection
        directionFromLeft={true}
        backImg={image2}
        heading={t("contactCenter.header.heading")}
        subheading={<p>{t("contactCenter.header.subheading")}</p>}
        buttonTitle={t("contactCenter.header.button")}
      />

      <ContentImageBox shaded={true}>
        <div className={"endToEndRcm"}>
          <h1>{t("contactCenter.hero.title")}</h1>
          <p>{t("contactCenter.hero.description")}</p>
          <p>{t("contactCenter.hero.description2")}</p>
          <div className={"marginFromTop"}/>
          <b>{t("contactCenter.hero.bold")}</b>
        </div>
      </ContentImageBox>

      <div style={{ backgroundColor: "rgba(28, 36, 96, .05 )", padding: "10px 0px 80px 0px" }}>
        <div className={"contentWrapper"}>
          <CardComponent
            image={image1}
            heading={<span style={{ color: "var(--primary-color)" }}>{t("contactCenter.mainCard.heading")}</span>}
            description={<>
              <p>{t("contactCenter.mainCard.description1")} <span style={{ color: "var(--primary-color)" }}>{t("contactCenter.mainCard.highlight")}</span> {t("contactCenter.mainCard.description2")}</p>
              <ul style={{ paddingLeft: "1.2rem" }}>
                <li><strong>{t("contactCenter.mainCard.point1.bold")}</strong> {t("contactCenter.mainCard.point1.text")}</li>
                <li><strong>{t("contactCenter.mainCard.point2.bold")}</strong> {t("contactCenter.mainCard.point2.text")}</li>
                <li><strong>{t("contactCenter.mainCard.point3.bold")}</strong> {t("contactCenter.mainCard.point3.text")}</li>
              </ul>
            </>}
            buttonText={t("contactCenter.mainCard.button")}
            index={0}
          />
        </div>
      </div>


      <div className={"contentWrapper"}>
        <HeadingDescription
          heading={<h1>{t("contactCenter.section1.heading")} <span style={{ color: "var(--primary-color)" }}>{t("contactCenter.section1.highlight")}</span></h1>}
        />
        <Row gutter={[24, 24]} className={"filledCards"} style={{ margin: "auto", justifyContent: "center" }}>
          {data.map((card, index) => <Col xs={24} md={12}><CardsWOBg heading={card.heading} description={card.description} background={true}/></Col>)}
        </Row>
      </div>


      <div className={"contentWrapper"}>
        <div className={"centerEveryThing"}>
          <HeadingDescription heading={<h1>{t("contactCenter.section2.heading")} <span style={{ color: "var(--primary-color)" }}>{t("contactCenter.section2.highlight")}</span></h1>} />
          <Row gutter={[24, 24]} style={{ justifyContent: "center" }}>
            {data1.map((card, index) => <Col xs={24} md={8}><CardsWOBg heading={card.heading} description={card.description}/></Col>)}
          </Row>
          <div style={{ marginTop: "1rem" }}/>
          <ButtonComponent>{t("contactCenter.section2.button")}</ButtonComponent>
        </div>

        <div>
          <HeadingDescription heading={<h1>{t("contactCenter.section3.heading")} <span style={{ color: "var(--primary-color)" }}>{t("contactCenter.section3.highlight")}</span></h1>} description={t("contactCenter.section3.description")}/>
          <Row gutter={[24, 24]} style={{ justifyContent: "center" }}>
            {data2.map((card, index) => <Col xs={24} md={8}><CardsWOBg heading={card.heading} description={card.description}/></Col>)}
          </Row>
        </div>

        <div className={"centerEveryThing"}>
          <HeadingDescription heading={<h1>{t("contactCenter.section4.heading")} <span style={{ color: "var(--primary-color)" }}>{t("contactCenter.section4.highlight")}</span></h1>} description={t("contactCenter.section4.description")}/>
          <Row gutter={[24, 24]} style={{ justifyContent: "center" }}>
            {data3.map((card, index) => <Col xs={24} md={8}><CardsWOBg heading={card.heading} description={card.description}/></Col>)}
          </Row>
          <ButtonComponent>{t("contactCenter.section4.button")}</ButtonComponent>
        </div>

        <div className={"centerEveryThing"}>
          <HeadingDescription heading={t("contactCenter.faq.heading")} />
          <Row gutter={[24, 24]} className={"filledCards"} style={{ margin: "auto", justifyContent: "center" }}>
            {faqs.map((card, index) => <Col xs={24} md={24}><CardsWOBg heading={card.heading} description={card.description} background={true}/></Col>)}
          </Row>
          <div style={{ marginTop: "3rem" }}/>
          <ButtonComponent>{t("contactCenter.faq.button")}</ButtonComponent>
        </div>
      </div>

      <ContentBox>
        <div className={"endToEndRcm"}>
          <i><h1>{t("contactCenter.footer.title")}</h1></i>
          <p>{t("contactCenter.footer.description")}</p>
          <ButtonComponent className={"endToEndRcmBtn"} color={"white"} size={"large"} style={{ height: "60px", backgroundColor: "white", marginTop: 60, color: "var(--primary-color)" }}>
            {t("contactCenter.footer.button")}
          </ButtonComponent>
        </div>
      </ContentBox>
    </div>
    </>
  );
};

export default ContactCenter;
