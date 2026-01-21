import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import "./HealthCare.scss";
import SEO from '../../components/SEO/Seo';
import backImg from './assets/back.jpg';
import ButtonComponent from '../../components/button/Button';
import CardComponent from '../../components/cardsComponents/cardsComponents';
import CardsWOBg from '../../components/cardsWOBg/cardsWOBg';
import ContentBox from '../../components/contentBox/contentBox';
import ContentImageBox from '../../components/ContentImageBox/ContentImageBox';
import HeadingDescription from '../../components/heading&description/heading&description';
import image1 from "./assets/Business Inteelginace.png";
import image2 from "./assets/CDI Training.JPG";
import image3 from "./assets/LMS.JPG";
import image4 from "./assets/CHI Accredetation .PNG";
import image5 from "./assets/Mapping Service .PNG";
import image6 from "./assets/wwwwwww.jpg";
import hospitalImg from "./assets/s1 2.png";

const HealthCare = () => {
  const { t } = useTranslation();

  const cardsData = [
    {
      heading: <div style={{ color: 'var(--primary-color)' }}>
        {t("healthCare.cards.mappingServices.title")}
        <br/>
        <h5 style={{ fontSize: '1.2rem', marginBottom: 14, marginTop: 10 }}>
          {t("healthCare.cards.mappingServices.subtitle")}
        </h5>
      </div>,
      description: t("healthCare.cards.mappingServices.description"),
      image: image5
    },
    {
      heading: <div style={{ color: 'var(--primary-color)' }}>
        {t("healthCare.cards.chiPrep.title")}
        <br/>
        <h5 style={{ fontSize: '1.2rem', marginBottom: 14, marginTop: 10 }}>
          {t("healthCare.cards.chiPrep.subtitle")}
        </h5>
      </div>,
      description: t("healthCare.cards.chiPrep.description"),
      image: image4
    },
    {
      heading: <div style={{ color: 'var(--primary-color)' }}>
        {t("healthCare.cards.rcmPrograms.title")}
        <br/>
        <h5 style={{ fontSize: '1.2rem', marginBottom: 14, marginTop: 10 }}>
          {t("healthCare.cards.rcmPrograms.subtitle")}
        </h5>
      </div>,
      description: t("healthCare.cards.rcmPrograms.description"),
      image: image6
    },
    {
      heading: <div style={{ color: 'var(--primary-color)' }}>
        {t("healthCare.cards.cdiTraining.title")}
        <br/>
        <h5 style={{ fontSize: '1.2rem', marginBottom: 14, marginTop: 10 }}>
          {t("healthCare.cards.cdiTraining.subtitle")}
        </h5>
      </div>,
      description: t("healthCare.cards.cdiTraining.description"),
      image: image2
    },
    {
      heading: <div style={{ color: 'var(--primary-color)' }}>
        {t("healthCare.cards.businessIntelligence.title")}
        <br/>
        <h5 style={{ fontSize: '1.2rem', marginBottom: 14, marginTop: 10 }}>
          {t("healthCare.cards.businessIntelligence.subtitle")}
        </h5>
      </div>,
      description: t("healthCare.cards.businessIntelligence.description"),
      image: image1
    },
    {
      heading: <div style={{ color: 'var(--primary-color)' }}>
        {t("healthCare.cards.lms.title")}
        <br/>
        <h5 style={{ fontSize: '1.2rem', marginBottom: 14, marginTop: 10 }}>
          {t("healthCare.cards.lms.subtitle")}
        </h5>
      </div>,
      description: t("healthCare.cards.lms.description"),
      image: image3
    }
  ];

  const data = t("healthCare.expertise.cards", { returnObjects: true });

  return <>
    <SEO
      title={"Accelon Health Healthcare Solutions | Optimize Hospital Operations & Compliance"}
      description={"Discover how Accelon Health improves hospital operations, compliance, and revenue management through advanced healthcare automation solutions and expert services."}
      ogURL={"/professional/healthCare"}
    />

    <ContentImageBox backImg={backImg} fullHeight={true} shaded={true}>
      <div className="endToEndRcm">
        <h1>{t("healthCare.hero.title")}</h1>
        <p>{t("healthCare.hero.description")}</p>
        <ButtonComponent className="endToEndRcmBtn"
                         color="white"
                         size="large"
                         style={{ height: "60px", backgroundColor: "white", marginTop: 60, color: "var(--primary-color)" }}>
          {t("healthCare.hero.button")}
        </ButtonComponent>
      </div>
    </ContentImageBox>

    <ContentImageBox>
      <div className="endToEndRcm" style={{ color: "var(--primary-text-color)" }}>
        <h1>{t("healthCare.compliance.title")} <span style={{ color: "var(--primary-color)" }}>{t("healthCare.compliance.highlight")}</span></h1>
        <p style={{ fontWeight: 500 }}>{t("healthCare.compliance.description")}</p>
      </div>
    </ContentImageBox>

    <div style={{ backgroundColor: "rgba(28, 36, 96, .05 )" }}>
      <div className="contentWrapper">
        <HeadingDescription
          heading={t("healthCare.blueprint.heading")}
          description={t("healthCare.blueprint.description")}
        />
        {cardsData.map((card, index) =>
          <CardComponent
            key={index}
            heading={card.heading}
            description={card.description}
            image={card.image}
            index={index}
          />
        )}
      </div>
    </div>

    <div className="marginFromTop"/>
    <div>
      <HeadingDescription
        heading={<h1>{t("healthCare.expertise.heading").split(' ')[0]} <span style={{ color: 'var(--primary-color)' }}>{t("healthCare.expertise.heading").split(' ').slice(1).join(' ')}</span></h1>}
        description={t("healthCare.expertise.description")}
      />
      <Row gutter={[24, 24]} style={{ width: "80%", margin: "auto" }}>
        {data.map((item, index) => <Col xs={24} md={8} key={index}>
          <CardsWOBg
            heading={item.title}
            description={item.description}
          />
        </Col>)}
      </Row>
    </div>

    <div className="marginFromTop"/>
    <div style={{ backgroundColor: "rgba(28, 36, 96, .05 )" }}>
      <div className="contentWrapper">
        <HeadingDescription
          heading={<h1>{t("healthCare.hospitalStory.heading").split(' ')[0]} <span style={{ color: 'var(--primary-color)' }}>{t("healthCare.hospitalStory.heading").split(' ').slice(1).join(' ')}</span></h1>}
        />
        <CardComponent
          heading={<span style={{ color: 'var(--primary-color)' }}>{t("healthCare.hospitalStory.cardTitle")}</span>}
          description={<div style={{ color: "var(--primary-text-color)", marginTop: 40 }}>
            <h2>{t("healthCare.hospitalStory.role")}</h2>
            <p style={{ fontSize: "18px", marginTop: 4 }}>{t("healthCare.hospitalStory.roleDescription")}</p>
            <h2 style={{ marginTop: 40 }}>{t("healthCare.hospitalStory.result")}</h2>
            <p style={{ color: "var(--primary-text-color)", fontSize: "18px", marginTop: 4 }}>{t("healthCare.hospitalStory.resultDescription")}</p>
          </div>}
          image={hospitalImg}
          index={0}
        />
      </div>
    </div>

    <ContentBox>
      <div className="endToEndRcm" style={{ marginTop: 0 }}>
        <i><h1>{t("healthCare.ready.title")}</h1></i>
        <p>{t("healthCare.ready.description")}</p>
        <ButtonComponent className="endToEndRcmBtn"
                         color="white"
                         size="large"
                         style={{ height: "60px", backgroundColor: "white", marginTop: 50, color: "var(--primary-color)" }}>
          {t("healthCare.ready.button")}
        </ButtonComponent>
      </div>
    </ContentBox>
  </>;
};

export default HealthCare;
