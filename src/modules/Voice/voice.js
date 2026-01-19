import React from 'react';
import { useTranslation } from 'react-i18next';
import ButtonComponent from '../../components/button/Button';
import CardComponent from '../../components/cardsComponents/cardsComponents';
import ContentBox from '../../components/contentBox/contentBox';
import ContentImageBox from '../../components/ContentImageBox/ContentImageBox';
import HeaderSection from '../../components/header/HeaderSection';
import "./voice.scss";
import HeadingDescription from '../../components/heading&description/heading&description';
import image1 from "./assets/b1fe4ac6-b361-4a43-ae6b-f1961b90258d.PNG";
import image2 from "./assets/unnamed (7).JPG";
import image3 from "./assets/d3823ad9-9ddd-4830-93f1-eaa66d0af869.jpg";
import image4 from "./assets/unnamed (9).JPG";

const Voice = () => {
  const { t } = useTranslation();

  return (
    <div className="voiceContainer">
      <HeaderSection
        heading={
          <h1>
            {t("voice.hero.title.main")}{" "}
            <span style={{ color: "var(--primary-color)" }}>
              {t("voice.hero.title.highlight")}
            </span>
          </h1>
        }
        subheading={
          <div className="voice-content">
            <p className="stat-line">
              <strong className="highlight">{t("voice.hero.stat.value")}</strong>{" "}
              {t("voice.hero.stat.text")}
            </p>

            <p className="description">
              <strong>{t("voice.hero.product")}</strong>{" "}
              {t("voice.hero.description.before")}
              <strong>{t("voice.hero.description.highlight")}</strong>
            </p>
          </div>
        }
        buttonTitle={t("voice.hero.button")}
        backImg={image3}
        directionFromLeft={true}
      />

      <ContentImageBox shaded>
        <div className="endToEndRcm">
          <h1>{t("voice.gap.title")}</h1>
          <p>{t("voice.gap.subtitle")}</p>
          <p>{t("voice.gap.description")}</p>

          <ul style={{ marginTop: 40, fontWeight: 500, fontSize: 24 }}>
            <li>{t("voice.gap.points.calls")}</li>
            <li>{t("voice.gap.points.queries")}</li>
            <li>{t("voice.gap.points.followup")}</li>
          </ul>
        </div>
      </ContentImageBox>

      <ContentImageBox>
        <div className="endToEndRcm" style={{ color: "var(--primary-text-color)" }}>
          <h1>
            {t("voice.fluent.title.before")}{" "}
            <span style={{ color: "var(--primary-color)" }}>
              {t("voice.fluent.title.business")}
            </span>
            , {t("voice.fluent.title.middle")}{" "}
            <span style={{ color: "var(--primary-color)" }}>
              {t("voice.fluent.title.culture")}
            </span>
          </h1>

          <p style={{ fontSize: "3rem", fontWeight: 500, color: "var(--primary-color)" }}>
            {t("voice.fluent.subtitle")}
          </p>

          <p style={{ fontWeight: 500 }}>{t("voice.fluent.description")}</p>

          <div className="fluent">
            <p><strong>{t("voice.fluent.points.dialect.title")}</strong> → {t("voice.fluent.points.dialect.text")}</p>
            <p><strong>{t("voice.fluent.points.script.title")}</strong> → {t("voice.fluent.points.script.text")}</p>
            <p><strong>{t("voice.fluent.points.logging.title")}</strong> → {t("voice.fluent.points.logging.text")}</p>
            <p><strong>{t("voice.fluent.points.routing.title")}</strong> → {t("voice.fluent.points.routing.text")}</p>
            <p><strong>{t("voice.fluent.points.elastic.title")}</strong> → {t("voice.fluent.points.elastic.text")}</p>
          </div>
        </div>
      </ContentImageBox>

      <div style={{ backgroundColor: "rgba(28, 36, 96, .05 )" }}>
        <div className="contentWrapper">
          <div>
          <HeadingDescription
            heading={<h1><span style={{ color: "var(--primary-color)" }}>{t("voice.useCases.title")}</span></h1>}
          />

          <CardComponent
            heading={<h1><span style={{ color: "var(--primary-color)" }}>{t("voice.useCases.healthcare.title")}</span></h1>}
            description={
              <ul className="voiceUl">
                <li><strong>{t("voice.useCases.healthcare.points.appointments.title")}</strong> {t("voice.useCases.healthcare.points.appointments.text")}</li>
                <li><strong>{t("voice.useCases.healthcare.points.medication.title")}</strong> {t("voice.useCases.healthcare.points.medication.text")}</li>
                <li><strong>{t("voice.useCases.healthcare.points.insurance.title")}</strong> {t("voice.useCases.healthcare.points.insurance.text")}</li>
                <li><strong>{t("voice.useCases.healthcare.points.postVisit.title")}</strong> {t("voice.useCases.healthcare.points.postVisit.text")}</li>
              </ul>
            }
            image={image2}
            index={0}
          />
          </div>

          <CardComponent
            heading={<h1><span style={{ color: "var(--primary-color)" }}>{t("voice.useCases.service.title")}</span></h1>}
            description={
              <ul className="voiceUl">
                <li><strong>{t("voice.useCases.service.points.support.title")}</strong> {t("voice.useCases.service.points.support.text")}</li>
                <li><strong>{t("voice.useCases.service.points.delivery.title")}</strong> {t("voice.useCases.service.points.delivery.text")}</li>
                <li><strong>{t("voice.useCases.service.points.payment.title")}</strong> {t("voice.useCases.service.points.payment.text")}</li>
                <li><strong>{t("voice.useCases.service.points.public.title")}</strong> {t("voice.useCases.service.points.public.text")}</li>
              </ul>
            }
            image={image1}
            index={0}
          />
        </div>
      </div>

      <div className="marginFromTop" />

      <div className="contentWrapper">
        <CardComponent
          heading={t("voice.team.title")}
          description={
            <div>
              <p>{t("voice.team.subtitle")}</p>
              <p style={{ color: "var(--primary-text-color)", fontSize: "1rem" }}>
                {t("voice.team.description")}
              </p>
              <br />
              <p style={{ color: "var(--primary-text-color)", fontWeight: 500 }}>
                {t("voice.team.points")}
              </p>
            </div>
          }
          image={image4}
          index={0}
        />
      </div>

      <div className="marginFromTop" />

      <ContentBox>
        <div className="endToEndRcm">
          <i><h1>{t("voice.cta.title")}</h1></i>
          <p>{t("voice.cta.description")}</p>

          <ButtonComponent
            className="endToEndRcmBtn"
            color="white"
            size="large"
            style={{
              height: "60px",
              backgroundColor: "white",
              marginTop: 60,
              color: "var(--primary-color)"
            }}
          >
            {t("voice.cta.button")}
          </ButtonComponent>
        </div>
      </ContentBox>
    </div>
  );
};

export default Voice;
