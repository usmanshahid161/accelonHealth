import { Row, Col } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import "./RevenueCycle.scss";

import ButtonComponent from '../../components/button/Button';
import CardComponent from '../../components/cardsComponents/cardsComponents';
import CardsWOBg from '../../components/cardsWOBg/cardsWOBg';
import ContentBox from '../../components/contentBox/contentBox';
import HeaderSection from '../../components/header/HeaderSection';
import HeadingDescription from '../../components/heading&description/heading&description';
import LongButton from '../../components/longButton/LongButton';
import SEO from '../../components/SEO/Seo';

import image2 from "./assets/unnamed (2).jpg";
import image3 from "./assets/unnamed (1).jpg";
import image4 from "./assets/unnamed.jpg";
import image5 from "./assets/3 .PNG";
import image6 from "./assets/dd.jpg";
import image7 from "./assets/unnamed (3).jpg";
import image8 from "./assets/unnamed (4).jpg";

const RevenueCycle = () => {
  const { t } = useTranslation();

  // Fetch data arrays from i18n JSON
  const blueprintCards = t("revenueCycle.blueprintSection.cards", { returnObjects: true });
  const outsourcingCards = t("revenueCycle.outsourcingSection.cards", { returnObjects: true });
  const investmentCards = t("revenueCycle.investmentSection.cards", { returnObjects: true });
  const caseStudyCards = t("revenueCycle.caseStudySection.cards", { returnObjects: true });

  return (
    <>
      <SEO
        title="Accelon Health Revenue Cycle | Optimize Financial Performance"
        description="Accelon Health Revenue Cycle services improve billing accuracy, streamline operations, and maximize revenue for healthcare organizations."
        ogURL="/professional/revenue"
      />

      {/* Header Section */}
      <HeaderSection
        heading={
          <h1>
            {t("revenueCycle.headerSection.heading")}
          </h1>
        }
        subheading={t("revenueCycle.headerSection.subheading")}
        directionFromLeft={false}
        buttonTitle={t("revenueCycle.headerSection.buttonTitle")}
        backImg={image6}
      />

      {/* Blueprint Section */}
      <div style={{ backgroundColor: "rgba(28, 36, 96, .05)" }}>
        <div className="contentWrapper">
          <HeadingDescription
            heading={<h1>{t("revenueCycle.blueprintSection.heading")}</h1>}
            description={t("revenueCycle.blueprintSection.description")}
          />
          {blueprintCards.map((card, index) => (
            <CardComponent
              key={index}
              heading={<span style={{ color: 'var(--primary-color)' }}>{card.heading}</span>}
              description={card.description}
              image={[image4, image2, image3, image5, image7, image8][index]}
              index={index}
            />
          ))}
          <LongButton
            buttonTitle={t("revenueCycle.blueprintSection.longButton.buttonTitle")}
            text={t("revenueCycle.blueprintSection.longButton.text")}
          />
        </div>
      </div>

      {/* Outsourcing Section */}
      <div className="contentWrapper">
        <HeadingDescription
          heading={<h1>{t("revenueCycle.outsourcingSection.heading")}</h1>}
          description={t("revenueCycle.outsourcingSection.description")}
        />
        <Row gutter={[24, 24]}>
          {outsourcingCards.map((card, index) => (
            <Col xs={24} md={12} key={index}>
              <CardsWOBg
                alignLeft={true}
                heading={<h2 style={{ fontSize: "2rem", color: index === 0 ? "var(--primary-text-color)" : "inherit" }}>{card.title}</h2>}
                description={card.description}
                background={index === 1}
              />
            </Col>
          ))}
        </Row>
      </div>

      {/* Investment Section */}
      <div className="contentWrapper">
        <HeadingDescription heading={<h1>{t("revenueCycle.investmentSection.heading")}</h1>} />
        <Row gutter={[24, 24]}>
          {investmentCards.map((card, index) => (
            <Col xs={24} md={8} key={index}>
              <CardsWOBg
                alignLeft={true}
                heading={card.heading}
                description={card.description}
                background={true}
              />
            </Col>
          ))}
        </Row>
      </div>

      {/* Case Study Section */}
      <div style={{ backgroundColor: "rgba(28, 36, 96, .05)", paddingBottom: 80 }}>
        <div className="contentWrapper">
          <HeadingDescription
            heading={<h1>{t("revenueCycle.caseStudySection.heading")}</h1>}
            description={<b style={{ color: 'var(--primary-color)' }}>{t("revenueCycle.caseStudySection.description")}</b>}
          />
          <Row gutter={[24, 24]} style={{ width: "90%", margin: "auto" }}>
            {caseStudyCards.map((card, index) => (
              <Col xs={24} md={12} key={index}>
                <CardsWOBg
                  alignLeft={true}
                  heading={<h1 style={{ fontSize: "2rem", color: index === 0 ? "red" : index === 1 ? "var(--primary-color)" : index === 2 ? "green" : "black" }}>{card.title}</h1>}
                  description={
                    Array.isArray(card.description) ? (
                      <ul>
                        {card.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      card.description
                    )
                  }
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* CTA Section */}
      <ContentBox>
        <div className="endToEndRcm">
          <i><h1>{t("revenueCycle.ctaSection.heading")}</h1></i>
          <p>{t("revenueCycle.ctaSection.description")}</p>
          <ButtonComponent
            className="endToEndRcmBtn"
            color="white"
            size="large"
            style={{ height: "60px", backgroundColor: "white", marginTop: 60, color: "var(--primary-color)" }}
          >
            {t("revenueCycle.ctaSection.buttonTitle")}
          </ButtonComponent>
        </div>
      </ContentBox>
    </>
  );
};

export default RevenueCycle;
