import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from "react-i18next";
import ButtonComponent from '../../components/button/Button';
import CardComponent from '../../components/cardsComponents/cardsComponents';
import CardsWOBg from '../../components/cardsWOBg/cardsWOBg';
import ContentBox from '../../components/contentBox/contentBox';
import ContentImageBox from '../../components/ContentImageBox/ContentImageBox';
import HeadingDescription from '../../components/heading&description/heading&description';
import image1 from "./assets/unnamed.jpg";
import image2 from "./assets/backImg.jpg";
import "./Audit.scss";

const Audit = () => {
  const { t } = useTranslation();

  const data = [
    { heading: t("audit.stats.reduction.title"), description: t("audit.stats.reduction.desc") },
    { heading: t("audit.stats.reimbursement.title"), description: t("audit.stats.reimbursement.desc") },
    { heading: t("audit.stats.compliance.title"), description: t("audit.stats.compliance.desc") },
    { heading: t("audit.stats.integration.title"), description: t("audit.stats.integration.desc") },
    { heading: t("audit.stats.alerts.title"), description: t("audit.stats.alerts.desc") },
  ];

  const data1 = [
    { heading: t("audit.built.market.title"), description: t("audit.built.market.desc") },
    { heading: t("audit.built.security.title"), description: t("audit.built.security.desc") },
    { heading: t("audit.built.deploy.title"), description: t("audit.built.deploy.desc") },
  ];

  return (
    <div className="auditContainer">
      <ContentImageBox backImg={image2} shaded fullHeight>
        <div className="endToEndRcm">
          <h1>{t("audit.hero.title")}</h1>
          <p>{t("audit.hero.description")}</p>
          <ButtonComponent
            className="endToEndRcmBtn"
            color="white"
            size="large"
            style={{
              height: "60px",
              backgroundColor: "white",
              marginTop: 60,
              color: "var(--primary-color)",
            }}
          >
            {t("audit.hero.button")}
          </ButtonComponent>
        </div>
      </ContentImageBox>

      <div className="marginFromTop" />

      <div className="contentWrapper">
        <CardComponent
          image={image1}
          heading={
            <h1>
              {t("audit.speed.title")}{" "}
              <span style={{ color: "var(--primary-color)" }}>
                {t("audit.speed.highlight")}
              </span>
            </h1>
          }
          description={
            <div style={{ color: "var(--primary-text-color)" }}>
              <p>{t("audit.speed.description")}</p>

              <h4 style={{ marginTop: "1.4rem", fontWeight: 700, fontSize: "1.1rem" }}>
                {t("audit.speed.checks.heading")}
              </h4>

              <ul style={{ paddingLeft: "1.2rem", fontSize: "1.1rem" }}>
                <li>{t("audit.speed.checks.one")}</li>
                <li>{t("audit.speed.checks.two")}</li>
                <li>{t("audit.speed.checks.three")}</li>
                <li>{t("audit.speed.checks.four")}</li>
                <li>{t("audit.speed.checks.five")}</li>
                <li>{t("audit.speed.checks.six")}</li>
              </ul>
            </div>
          }
          index={1}
        />

        <div>
          <HeadingDescription
            heading={
              <h1>
                {t("audit.why.title")}{" "}
                <span style={{ color: "var(--primary-color)" }}>
                  {t("audit.why.highlight")}
                </span>
              </h1>
            }
            description={t("audit.why.description")}
          />
          <Row gutter={[24, 24]} justify="center">
            {data.map((item, index) => (
              <Col xs={24} md={6} key={index}>
                <CardsWOBg heading={item.heading} description={item.description} />
              </Col>
            ))}
          </Row>
        </div>

        <div>
          <HeadingDescription
            heading={
              <h1>
                {t("audit.built.title")}{" "}
                <span style={{ color: "var(--primary-color)" }}>
                  {t("audit.built.highlight")}
                </span>
              </h1>
            }
          />
          <Row gutter={[24, 24]}>
            {data1.map((item, index) => (
              <Col xs={24} md={8} key={index}>
                <CardsWOBg
                  heading={item.heading}
                  description={item.description}
                  background
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <ContentBox>
        <div className="endToEndRcm">
          <i><h1>{t("audit.cta.title")}</h1></i>
          <p>{t("audit.cta.description")}</p>
          <ButtonComponent
            className="endToEndRcmBtn"
            color="white"
            size="large"
            style={{
              height: "60px",
              backgroundColor: "white",
              marginTop: 60,
              color: "var(--primary-color)",
            }}
          >
            {t("audit.cta.button")}
          </ButtonComponent>
        </div>
      </ContentBox>
    </div>
  );
};

export default Audit;
