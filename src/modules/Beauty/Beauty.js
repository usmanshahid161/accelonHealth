import { Col, Row, Image } from 'antd';
import React               from "react";
import "./Beauty.scss";
import { useTranslation }  from "react-i18next";
import ButtonComponent     from '../../components/button/Button';
import CardComponent       from '../../components/cardsComponents/cardsComponents';
import CardsWOBg           from '../../components/cardsWOBg/cardsWOBg';
import ContentBox          from '../../components/contentBox/contentBox';
import HeaderSection       from '../../components/header/HeaderSection';
import HeadingDescription  from '../../components/heading&description/heading&description';
import image1              from "./assets/unnamed (1).jpg";
import image2              from "./assets/unnamed (3).JPG";
import image3              from "./assets/unnamed (5).JPG";
import image4              from "./assets/unnamed (7).jpg";

const Beauty = () => {
  const { t } = useTranslation();

  const resultCards = t("beauty.results.cards", { returnObjects: true });
  const approachCards = t("beauty.approach.cards", { returnObjects: true });
  const techCards = t("beauty.tech.cards", { returnObjects: true });
  const aiPoints = t("beauty.technologies.ai.points", { returnObjects: true });
  const arPoints = t("beauty.technologies.ar.points", { returnObjects: true });

  return (
    <>
      <HeaderSection
        backImg={ image2 }
        heading={
          <h1>
            { t("beauty.hero.title.main") } <span
            style={ { color: "var(--primary-color)" } }>{ t("beauty.hero.title.highlight") }</span>
          </h1>
        }
        subheading={ t("beauty.hero.description") }
        buttonTitle={ t("beauty.hero.button") }
      />

      <div className="momentYouFeelContainer">
        <div className="left">
          <ContentBox>
            <h1>{ t("beauty.problem.title") }</h1>
            <p>{ t("beauty.problem.description") }</p>
            <p className="marginFromTop">
              <strong>{ t("beauty.problem.question") }</strong>
            </p>
          </ContentBox>
        </div>
        <div className="right">
          <Image preview={ false } src={ image3 } style={ { height: 600, width: "100%" } }/>
        </div>
      </div>

      <div style={ { backgroundColor: "rgba(28, 36, 96, .05 )" } }>
        <div className="contentWrapper">
          <div>
          <HeadingDescription
            heading={
              <h1>
                { t("beauty.technologies.title.main") } <span
                style={ { color: "var(--primary-color)" } }>{ t("beauty.technologies.title.highlight") }</span>
              </h1>
            }
          />
          <CardComponent
            image={ image4 }
            heading={
              <h1>
                { t("beauty.technologies.ai.title.main") } <span
                style={ { color: "var(--primary-color)" } }>{ t("beauty.technologies.ai.title.highlight") }</span>
              </h1>
            }
            description={
              <ul style={ { paddingLeft: "1.2rem" } }>
                { aiPoints.map((point, idx) => <li key={ idx }>{ point }</li>) }
              </ul>
            }
            index={ 0 }
          />
          </div>

          <CardComponent
            image={ image1 }
            heading={
              <h1>
                { t("beauty.technologies.ar.title.main") } <span
                style={ { color: "var(--primary-color)" } }>{ t("beauty.technologies.ar.title.highlight") }</span>
              </h1>
            }
            description={
              <ul style={ { paddingLeft: "1.2rem" } }>
                { arPoints.map((point, idx) => <li key={ idx }>{ point }</li>) }
              </ul>
            }
            index={ 0 }
          />
          <div className={"marginFromTop"}/>
        </div>
      </div>


      <div className="contentWrapper">
        <div>
          <HeadingDescription heading={ t("beauty.results.title") }/>
          <Row gutter={ [24, 24] }>
            { resultCards.map((item, idx) => (
              <Col xs={ 24 } md={ 6 } key={ idx }>
                <CardsWOBg heading={ item }/>
              </Col>
            )) }
          </Row>
        </div>
      </div>

      <div style={ { backgroundColor: "rgba(28, 36, 96, .1)" } }>
        <div className="contentWrapper" >
          <div>
          <HeadingDescription
            heading={
              <h1>
                { t("beauty.approach.title.main") } <span
                style={ { color: "var(--primary-color)" } }>{ t("beauty.approach.title.highlight") }</span>
              </h1>
            }
            description={ t("beauty.approach.description") }
          />
          <Row gutter={ [24, 24] }>
            { approachCards.map((card, idx) => (
              <Col xs={ 24 } md={ 6 } key={ idx }>
                <CardsWOBg heading={ card.heading } description={ card.description }/>
              </Col>
            )) }
          </Row>
          </div>
        </div>
      </div>


      <div className="contentWrapper">
        <div>
          <HeadingDescription heading={ t("beauty.tech.title") }/>
          <Row gutter={ [24, 24] }>
            { techCards.map((card, idx) => (
              <Col xs={ 24 } md={ 8 } key={ idx }>
                <CardsWOBg heading={ card.heading } description={ card.description }/>
              </Col>
            )) }
          </Row>
        </div>
      </div>

      <div className="marginFromTop"/>
      <ContentBox>
        <div className="endToEndRcm" style={ { marginTop: 0 } }>
          <i><h1>{ t("beauty.cta.title") }</h1></i>
          <h2>{ t("beauty.cta.description") }</h2>
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
            { t("beauty.cta.button") }
          </ButtonComponent>
        </div>
      </ContentBox>
    </>
  );
};

export default Beauty;
