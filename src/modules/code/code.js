import { Image, Row, Col } from 'antd';
import React               from 'react';
import { useTranslation }  from 'react-i18next';
import "./code.scss";
import ButtonComponent     from '../../components/button/Button';
import CardsWOBg           from '../../components/cardsWOBg/cardsWOBg';
import ContentBox          from '../../components/contentBox/contentBox';
import HeaderSection       from '../../components/header/HeaderSection';
import HeadingDescription  from '../../components/heading&description/heading&description';
import CodingMetrics       from './CodingMatrix/CodingMatrix';
import image1              from "./assets/db5b08d6-1d4d-467a-8465-cf18a62a1986 (1).png";
import image2 from "./assets/unnamed (11).JPG";
import SEO    from '../../components/SEO/Seo';

const Code = () => {
  const { t } = useTranslation();

  const data = t("code.cards", { returnObjects: true });
  const partnership = t("code.partnership", { returnObjects: true });

  return (
    <>
      <SEO
        title={"Autonomous Medical Coding | Lightning-Fast, High-Accuracy | Accelon Health"}
        description={"Autonomous medical coding that completes in seconds. AccelonCode automates ICD-10-AM/CM, SBS/CPT/HCPCS\tcoding with 95%+ accuracy across all specialties cutting cost and accelerating reimbursement. Request a demo."}
        ogURL={"/technology/code"}
      />

      <div className="codeContainer">
      <HeaderSection
        backImg={ image2 }
        heading={
          <h1>
            { t("code.hero.title.before") }
            <span style={ { color: "var(--primary-color)" } }>
              { t("code.hero.title.highlight") }
            </span>
          </h1>
        }
        subheading={
          <p>
            { t("code.hero.description.before") }
            <strong>{ t("code.hero.description.highlight") }</strong>
          </p>
        }
        buttonTitle={ t("code.hero.button") }
      />

      <div className="momentYouFeelContainer">
        <div className="left">
          <ContentBox style={ {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          } }>
            <div>
              <h1>{ t("code.shift.title") }</h1>
              <p style={ { color: "#D8D8D8" } }>
                { t("code.shift.description") }
              </p>
            </div>
            <div>
              <h3 style={ { fontSize: '1.5rem', fontWeight: 550 } }>
                { t("code.shift.subTitle") }
              </h3>
              <h5>{ t("code.shift.footer") }</h5>
            </div>
          </ContentBox>
        </div>
        <div className="right">
          <Image preview={ false } src={ image1 } style={ { height: 600, width: "100%" } }/>
        </div>
      </div>

      <div className="marginFromTop"/>

      <div className="contentWrapper">
        <div>
          <HeadingDescription
            heading={
              <h1>
                { t("code.expertise.title.before") }
                <span style={ { color: "var(--primary-color)" } }>
                { t("code.expertise.title.highlight") }
              </span>
              </h1>
            }
            description={ t("code.expertise.description") }
          />

          <Row gutter={ [24, 24] }>
            { data.map((item, index) => (
              <Col xs={ 24 } md={ 8 } key={ index }>
                <CardsWOBg
                  heading={ item.heading }
                  description={ item.description }
                  background
                />
              </Col>
            )) }
          </Row>
        </div>

        <CodingMetrics/>

        <div>
          <HeadingDescription
            heading={
              <h1>
                { t("code.partnershipTitle.before") }
                <span style={ { color: "var(--primary-color)" } }>
                { t("code.partnershipTitle.highlight") }
              </span>
              </h1>
            }
          />

          <Row gutter={ [24, 24] }>
            { partnership.map((item, index) => (
              <Col xs={ 24 } md={ 6 } key={ index }>
                <CardsWOBg
                  heading={ item.heading }
                  description={ item.description }
                />
              </Col>
            )) }
          </Row>
        </div>
      </div>


      <ContentBox>
        <div className="endToEndRcm" style={ { marginTop: 0 } }>
          <i><h1>{ t("code.cta.title") }</h1></i>
          <p>{ t("code.cta.description") }</p>
          <ButtonComponent
            className="endToEndRcmBtn"
            color="white"
            size="large"
            style={ {
              height: "60px",
              backgroundColor: "white",
              marginTop: 50,
              color: "var(--primary-color)"
            } }
          >
            { t("code.cta.button") }
          </ButtonComponent>
        </div>
      </ContentBox>
    </div>
      </>
  );
};

export default Code;
