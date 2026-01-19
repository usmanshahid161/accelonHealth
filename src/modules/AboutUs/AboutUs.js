import { Col, Row }                       from 'antd';
import React                              from 'react';
import { useTranslation }                 from 'react-i18next';
import ButtonComponent                    from '../../components/button/Button';
import CardsWOBg                          from '../../components/cardsWOBg/cardsWOBg';
import ContentBox                         from '../../components/contentBox/contentBox';
import ContentImageBox                    from '../../components/ContentImageBox/ContentImageBox';
import HeadingDescription                 from '../../components/heading&description/heading&description';
import ChallengeCard                      from '../CaseStudies/ChallengeCard/ChallengeCard';
import image1                             from "./assets/HeroImage.jpg"
import Ceo                                from "./assets/CEO.jpeg";
import Coo                                from "./assets/COO.jpeg";
import { ReactComponent as LinkedInIcon } from "./assets/linkedIn.svg";
import { ReactComponent as EmailIcon }    from "./assets/email.svg";
import "./AboutUs.scss";

const AboutUs = () => {
  const { t } = useTranslation();

  const data = [
    {
      heading: t("aboutUs.cards.engine.heading"),
      description: t("aboutUs.cards.engine.description")
    },
    {
      heading: t("aboutUs.cards.compass.heading"),
      description: t("aboutUs.cards.compass.description")
    },
    {
      heading: t("aboutUs.cards.connection.heading"),
      description: t("aboutUs.cards.connection.description")
    },
    {
      heading: t("aboutUs.cards.advantage.heading"),
      description: t("aboutUs.cards.advantage.description")
    }
  ];

  const data1 = [
    {
      heading: t("aboutUs.regions.saudi.heading"),
      description: t("aboutUs.regions.saudi.description")
    },
    {
      heading: t("aboutUs.regions.us.heading"),
      description: t("aboutUs.regions.us.description")
    },
    {
      heading: t("aboutUs.regions.egypt.heading"),
      description: t("aboutUs.regions.egypt.description")
    }
  ];

  const data2 = [
    {
      heading: t("aboutUs.promises.financial.heading"),
      description: t("aboutUs.promises.financial.description")
    },
    {
      heading: t("aboutUs.promises.operational.heading"),
      description: t("aboutUs.promises.operational.description")
    },
    {
      heading: t("aboutUs.promises.strategic.heading"),
      description: t("aboutUs.promises.strategic.description")
    },
  ];

  return (
    <div className={ "aboutUsContainer" }>
      <ContentImageBox backImg={ image1 } shaded={ true } fullHeight={ true }>
        <div className={ "endToEndRcm" }>
          <h1>{ t("aboutUs.hero.title") }</h1>
          <p>{ t("aboutUs.hero.description") }</p>
          <ButtonComponent className={ "endToEndRcmBtn" }
                           color={ "white" }
                           style={ { marginTop: 60, color: "var(--primary-color)" } }>
            { t("aboutUs.hero.button") }
          </ButtonComponent>
        </div>
      </ContentImageBox>

      <ContentImageBox>
        <div className={ "endToEndRcm" } style={ { color: "var(--primary-text-color)" } }>
          <h1><span
            style={ { color: 'var(--primary-color)', fontStyle: "italic" } }>{ t("aboutUs.story.highlight") }</span>
          </h1>
          <h1 style={ { fontStyle: "italic" } }>{ t("aboutUs.story.title") }</h1>
          <p style={ { fontWeight: 400 } }>{ t("aboutUs.story.paragraph1") }</p>
          <p style={ { fontWeight: 400 } }>{ t("aboutUs.story.paragraph2") }</p>
          <p style={ { fontWeight: 500, fontStyle: "italic" } }>{ t("aboutUs.story.paragraph3") }</p>
        </div>
      </ContentImageBox>

      <div className={ "marginFromTop" }/>

      <div className={ "contentWrapper" }>
        <div>
          <HeadingDescription
            heading={ <h1>{ t("aboutUs.blueprint.heading") }</h1> }
            description={ t("aboutUs.blueprint.description") }
          />
          <Row gutter={ [24, 24] }>
            { data.map(card => (
              <Col xs={ 24 } md={ 12 }>
                <CardsWOBg
                  heading={ card.heading }
                  description={ card.description }
                  background={ true }
                />
              </Col>
            )) }
          </Row>
        </div>

        <div>
          <HeadingDescription
            heading={ <h1 style={ { color: 'var(--primary-color)' } }>{ t("aboutUs.leadership.heading") }</h1> }/>
          <Row gutter={ [24, 24] } className={ "filledCards" } style={ { margin: "auto" } }>
            <Col xs={ 24 } md={ 12 }>
              <ChallengeCard
                heading={ t("aboutUs.leadership.ceo.name") }
                description={ t("aboutUs.leadership.ceo.title") }
                backImg={ Ceo }
                height={ 400 }
                points={
                  <div className="profileCard">
                    <div className="contactRow">
                      <a href="mailto:ayman.i@accelonhealth.com" target="_blank" rel="noopener noreferrer"
                         title={ t("aboutUs.leadership.email") }>
                        <EmailIcon/>
                      </a>
                      <a href="https://www.linkedin.com/in/ayman-ibrahim-b2040421" target="_blank"
                         rel="noopener noreferrer" title={ t("aboutUs.leadership.linkedin") }>
                        <LinkedInIcon style={ { height: 44, width: 34 } }/>
                      </a>
                    </div>
                  </div>
                }
              />
            </Col>
            <Col xs={ 24 } md={ 12 }>
              <ChallengeCard
                heading={ t("aboutUs.leadership.coo.name") }
                description={ t("aboutUs.leadership.coo.title") }
                backImg={ Coo }
                height={ 400 }
                points={
                  <div className="profileCard">
                    <div className="contactRow">
                      <a href="mailto:ahmed.o@accelonhealth.com" target="_blank" rel="noopener noreferrer"
                         title={ t("aboutUs.leadership.email") }>
                        <EmailIcon/>
                      </a>
                      <a href="https://www.linkedin.com/in/ahmed-osama-bab0b1162" target="_blank"
                         rel="noopener noreferrer" title={ t("aboutUs.leadership.linkedin") }>
                        <LinkedInIcon style={ { height: 44, width: 34 } }/>
                      </a>
                    </div>
                  </div>
                }
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className={ "marginFromTop" }/>
      <ContentBox>
        <div className={ "endToEndRcm" }>
          <h1>{ t("aboutUs.localGlobal.title") }</h1>
          <p>{ t("aboutUs.localGlobal.description") }</p>
          <Row gutter={ [24, 24] } style={ { marginTop: 80 } }>
            { data1.map(card => (
              <Col xs={ 24 } md={ 8 }>
                <CardsWOBg
                  heading={ <div style={ { fontSize: "1.7rem", fontWeight: 550 } }>{ card.heading }</div> }
                  description={ card.description }
                  background={ true }
                  backgroundClr={ "rgba(255,255,255,.1)" }
                  color={ "white" }
                />
              </Col>
            )) }
          </Row>
          <ButtonComponent className={ "endToEndRcmBtn" }
                           color={ "white" }
                           size={ "large" }
                           style={ {
                             height: "60px",
                             backgroundColor: "white",
                             marginTop: 60,
                             color: "var(--primary-color)"
                           } }>
            { t("aboutUs.localGlobal.button") }
          </ButtonComponent>
        </div>
      </ContentBox>

      <div style={ { backgroundColor: "rgba(28, 36, 96, .05 )" } }>
        <div className="contentWrapper">
          <HeadingDescription
            heading={ t("aboutUs.promises.heading") }
            description={ t("aboutUs.promises.description") }
          />
          <b className={ "centerEveryThing" } style={ { fontSize: "1.2rem" } }>
            { t("aboutUs.promises.bold") }
          </b>
          <Row gutter={ [24, 24] } style={ { marginBottom: 40 } }>
            { data2.map(card => (
              <Col xs={ 24 } md={ 8 }>
                <CardsWOBg
                  heading={ card.heading }
                  description={ card.description }
                  background={ true }
                  backgroundClr={ "rgba(255,255,255)" }
                />
              </Col>
            )) }
          </Row>
        </div>
      </div>

      <ContentBox>
        <div className={ "endToEndRcm" }>
          <i><h1>{ t("aboutUs.ready.title") }</h1></i>
          <p>{ t("aboutUs.ready.description") }</p>
          <ButtonComponent className={ "endToEndRcmBtn" }
                           color={ "white" }
                           size={ "large" }
                           style={ {
                             height: "60px",
                             backgroundColor: "white",
                             marginTop: 50,
                             color: "var(--primary-color)"
                           } }>
            { t("aboutUs.ready.button") }
          </ButtonComponent>
          <b style={ { fontSize: "1rem", marginTop: 40 } }>
            { t("aboutUs.ready.bold") }
          </b>
        </div>
      </ContentBox>
    </div>
  );
}

export default AboutUs;
