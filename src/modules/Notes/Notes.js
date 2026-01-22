import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Notes.scss";
import ButtonComponent from '../../components/button/Button';
import CardComponent from '../../components/cardsComponents/cardsComponents';
import CardsWOBg from '../../components/cardsWOBg/cardsWOBg';
import ContentImageBox from '../../components/ContentImageBox/ContentImageBox';
import HeaderSection from '../../components/header/HeaderSection';
import backImg from '../../assets/images/herosection.png';
import HeadingDescription from '../../components/heading&description/heading&description';
import SEO from '../../components/SEO/Seo';
import image1 from "./assets/unnamed.jpg";
import image2 from "./assets/unnamed (1).jpg";

const Notes = () => {
  const { t } = useTranslation();

  const data = [
    {
      heading: t("notes.features.preVisit.heading"),
      description: t("notes.features.preVisit.description")
    },
    {
      heading: t("notes.features.fullVisit.heading"),
      description: t("notes.features.fullVisit.description")
    },
    {
      heading: t("notes.features.integration.heading"),
      description: t("notes.features.integration.description")
    },
    {
      heading: t("notes.features.humanLoop.heading"),
      description: t("notes.features.humanLoop.description")
    }
  ];

  const data2 = [
    {
      heading: t("notes.benefits.time.heading"),
      description: t("notes.benefits.time.description")
    },
    {
      heading: t("notes.benefits.insurance.heading"),
      description: t("notes.benefits.insurance.description")
    },
    {
      heading: t("notes.benefits.coding.heading"),
      description: t("notes.benefits.coding.description")
    },
    {
      heading: t("notes.benefits.burnout.heading"),
      description: t("notes.benefits.burnout.description")
    }
  ];

  const data3 = [
    {
      heading: t("notes.ai.clinical.heading"),
      description: t("notes.ai.clinical.description")
    },
    {
      heading: t("notes.ai.compliance.heading"),
      description: t("notes.ai.compliance.description")
    },
    {
      heading: t("notes.ai.multilingual.heading"),
      description: t("notes.ai.multilingual.description")
    },
    {
      heading: t("notes.ai.integration.heading"),
      description: t("notes.ai.integration.description")
    }
  ];

  return ( <>
      <SEO
        title={"Autonomous Clinical Documentation | Save Hours, See More Patients | Accelon Health"}
        description={"AI-powered clinical documentation that writes itself. AccelonNotes turns clinician–patient conversations into accurate, structured notes—cutting admin time, improving specificity, and speeding approvals. See how it works."}
        ogURL={"/technology/notes"}
      />

      <div className={"notesContainer"}>
      <HeaderSection
        backImg={image2}
        heading={
          <h1>
            {t("notes.hero.heading.before")}{" "}
            <span style={{ color: "var(--primary-color)" }}>
              {t("notes.hero.heading.highlight")}
            </span>
          </h1>
        }
        subheading={t("notes.hero.subheading")}
        buttonTitle={t("notes.hero.button")}
        directionFromLeft={true}
      />

      <ContentImageBox backImg={backImg} shaded={true}>
        <div className={"endToEndRcm"}>
          <h1>{t("notes.documentation.heading")}</h1>
          <p>{t("notes.documentation.description")}</p>
          <h5 style={{ marginTop: 60 }}>
            {t("notes.documentation.footer")}
          </h5>
          <ButtonComponent
            className={"endToEndRcmBtn"}
            color={"white"}
            size={"large"}
            style={{
              height: "60px",
              backgroundColor: "white",
              marginTop: 60,
              color: "var(--primary-color)"
            }}
          >
            {t("notes.common.reclaimTime")}
          </ButtonComponent>
        </div>
      </ContentImageBox>

      <div className={"contentWrapper"}>
        <div>
          <HeadingDescription
            heading={
              <h1>
                {t("notes.flow.heading.before")}{" "}
                <span style={{ color: "var(--primary-color)" }}>
                  {t("notes.flow.heading.highlight")}
                </span>
              </h1>
            }
            description={t("notes.flow.description")}
          />
          <Row gutter={[24, 24]} className={"filledCards"} style={{ margin: "auto" }}>
            {data.map((item, index) => (
              <Col xs={24} md={12} key={index}>
                <CardsWOBg heading={item.heading} description={item.description} background={true} />
              </Col>
            ))}
          </Row>
        </div>

        <div>
          <HeadingDescription
            heading={
              <h1>
                {t("notes.benefits.headingBefore")}{" "}
                <span style={{ color: "var(--primary-color)" }}>
                  {t("notes.benefits.headingAfter")}
                </span>
              </h1>
            }
          />
          <Row gutter={[24, 24]} style={{ width: "90%", margin: "auto" }}>
            {data2.map((item, index) => (
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
                {t("notes.aiSection.heading.before")}{" "}
                <span style={{ color: "var(--primary-color)" }}>
                  {t("notes.aiSection.heading.highlight")}
                </span>
              </h1>
            }
            description={t("notes.aiSection.description")}
          />
          <Row gutter={[24, 24]} style={{ width: "90%", margin: "auto" }}>
            {data3.map((item, index) => (
              <Col xs={24} md={6} key={index}>
                <CardsWOBg heading={item.heading} description={item.description} />
              </Col>
            ))}
          </Row>
        </div>

        <div style={{ width: "90%", margin: "auto", padding: "80px 0px" }}>
          <CardComponent
            heading={
              <h1>
                {t("notes.cta.heading.before")}{" "}
                <span style={{ color: "var(--primary-color)" }}>
                  {t("notes.cta.heading.highlight")}
                </span>
              </h1>
            }
            description={t("notes.cta.description")}
            image={image1}
            index={0}
            buttonText={t("notes.cta.button")}
            buttonStyle={{
              background: "linear-gradient(to right, var(--primary-color), #0077C7)",
              width: "100%",
              height: 60
            }}
          />
        </div>
      </div>
    </div>
      </>
  );
};

export default Notes;
