import { Row, Col } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import backImg from './assets/information-case-study-research-verification-analysis-sketch.jpg';
import ButtonComponent from '../../components/button/Button';
import CardComponent from '../../components/cardsComponents/cardsComponents';
import ContentImageBox from '../../components/ContentImageBox/ContentImageBox';
import HeadingDescription from '../../components/heading&description/heading&description';
import ChallengeCard from './ChallengeCard/ChallengeCard';
import "./ChallengeCard/ChallengeCard.scss";
import "./CaseStudies.scss";
import image1 from "./assets/unnamed (4).jpg";
import image2 from "./assets/unnamed (3).jpg";
import image3 from "./assets/unnamed.jpg";
import image4 from "./assets/unnamed (1).jpg";
import image5 from "./assets/unnamed (8).jpg";
import image6 from "./assets/unnamed (6).jpg";
import image7 from "./assets/2c6df7f0-f842-4aca-913f-8c805395fbe8.png";
import image8 from "./assets/unnamed (7).jpg";
import image9 from "./assets/unnamed (5).jpg";
import image10 from "./assets/unnamed (2).jpg";

const CaseStudies = () => {
  const { t } = useTranslation();

  // Data arrays
  const data1 = [
    { title: "35%", val: t("caseStudies.riyadh.data1.val1") },
    { title: "90 Days", val: t("caseStudies.riyadh.data1.val2") },
    { title: t("caseStudies.riyadh.data1.title3"), val: t("caseStudies.riyadh.data1.val3") },
    { title: t("caseStudies.riyadh.data1.title4"), val: t("caseStudies.riyadh.data1.val4") }
  ];
  const data2 = [
    { title: "$2.3 M", val: t("caseStudies.uae.data2.val1") },
    { title: t("caseStudies.uae.data2.title2") },
    { title: t("caseStudies.uae.data2.title3") },
    { title: t("caseStudies.uae.data2.title4") }
  ];
  const data3 = [
    { title: "40% of billing capacity consumed", val: t("caseStudies.cairo.data3.val1") },
    { title: t("caseStudies.cairo.data3.title2") }
  ];

  const results = [
    { title: "40%", val: t("caseStudies.riyadh.results.val1") },
    { title: "35% to 5%", val: t("caseStudies.riyadh.results.val2") },
    { title: "90 to 45 days", val: t("caseStudies.riyadh.results.val3") },
    { title: t("caseStudies.riyadh.results.title4"), val: t("caseStudies.riyadh.results.val4") },
    { title: "+60%", val: t("caseStudies.riyadh.results.val5") }
  ];

  const results2 = [
    { title: "$1.8M", val: t("caseStudies.uae.results2.val1") },
    { title: "95% Net Collection Rate", val: t("caseStudies.uae.results2.val2") },
    { title: "+35 points", val: t("caseStudies.uae.results2.val3") },
    { title: t("caseStudies.uae.results2.title4"), val: t("caseStudies.uae.results2.val4") },
    { title: t("caseStudies.uae.results2.title5"), val: t("caseStudies.uae.results2.val5") },
    { title: "+60%", val: t("caseStudies.uae.results2.val6") }
  ];

  const results3 = [
    { title: "30% Reduced", val: t("caseStudies.cairo.results3.val1") },
    { title: "+40% freed (no new hires)", val: t("caseStudies.cairo.results3.val2") },
    { title: t("caseStudies.cairo.results3.title3"), val: t("caseStudies.cairo.results3.val3") },
    { title: "65 days → 38 days", val: t("caseStudies.cairo.results3.val4") }
  ];

  return (
    <div className={"caseStudiesContainer"}>
      {/* Hero Section */}
      <ContentImageBox backImg={backImg} fullHeight={true} shaded={true}>
        <div className={"endToEndRcm"}>
          <h1>{t("caseStudies.hero.title")}</h1>
          <p>{t("caseStudies.hero.description")}</p>
          <ButtonComponent
            className={"endToEndRcmBtn"}
            color={"white"}
            size={"large"}
            style={{ height: "60px", backgroundColor: "white", marginTop: 60, color: "var(--primary-color)" }}
          >
            {t("caseStudies.hero.button")}
          </ButtonComponent>
        </div>
      </ContentImageBox>

      {/* Riyadh Case */}
      <div style={{ backgroundColor: "rgba(28, 36, 96, .05 )" }}>
        <div className="contentWrapper">
          <div className="caseStudyContent">
            <div className={"centerEveryThing"}>
              <HeadingDescription
                heading={
                  <h1>
                    {t("caseStudies.riyadh.title")}
                    <span style={{ color: 'var(--primary-color)' }}>{t("caseStudies.riyadh.highlight")}</span>
                  </h1>
                }
              />
              <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                  <ChallengeCard
                    heading={t("caseStudies.challenge.heading")}
                    description={t("caseStudies.challenge.description1")}
                    points={
                      <div className="challengePointsContainer">
                        {data1.map(item => (
                          <div className={"challengePointsContainerContent"}>
                            <div>
                              <div className={"challengePointsContainerKey"}>{item.title}</div>
                              <div className={"challengePointsContainerVal"}>{item.val}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    }
                    headingColor={"#FF3B30"}
                    backImg={image3}
                  />
                </Col>
                <Col xs={24} md={8}>
                  <ChallengeCard
                    heading={t("caseStudies.whatWeDid.heading")}
                    description={
                      <ul>
                        <li>{t("caseStudies.whatWeDid.point1")}</li>
                        <li>{t("caseStudies.whatWeDid.point2")}</li>
                        <li>{t("caseStudies.whatWeDid.point3")}</li>
                        <li>{t("caseStudies.whatWeDid.point4")}</li>
                      </ul>
                    }
                    headingColor={"var(--primary-color)"}
                    backImg={image4}
                  />
                </Col>
                <Col xs={24} md={8}>
                  <ChallengeCard
                    heading={t("caseStudies.riyadh.results.heading")}
                    points={
                      <div className="challengePointsContainer" style={{ color: "white", gap: 10 }}>
                        {results.map(item => (
                          <div
                            className={"challengePointsContainerContent"}
                            style={{ backgroundColor: "rgba(255,255,255, .2)" }}
                          >
                            <div>
                              <div className={"challengePointsContainerKey"}>{item.title}</div>
                              <div className={"challengePointsContainerVal"}>{item.val}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    }
                    headingColor={"white"}
                    backgroundClr={"#34C759"}
                    backImg={image10}
                  />
                </Col>
              </Row>
              <p style={{ fontSize: "1.2rem", fontStyle: "italic", marginTop: "3rem" }}>
                {t("caseStudies.riyadh.quote")}
              </p>
              <b style={{ marginTop: "1rem", fontStyle: "italic" }}>{t("caseStudies.riyadh.author")}</b>
            </div>
          </div>

          {/* UAE Case */}
          <div className="caseStudyContent">
            <div className={"centerEveryThing"}>
              <HeadingDescription
                heading={
                  <h1>
                    {t("caseStudies.uae.title")}
                    <span style={{ color: 'var(--primary-color)' }}>{t("caseStudies.uae.highlight")}</span>
                  </h1>
                }
              />
              <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                  <ChallengeCard
                    heading={t("caseStudies.challenge.heading")}
                    description={t("caseStudies.uae.challenge.description")}
                    points={
                      <div className="challengePointsContainer">
                        {data2.map(item => (
                          <div className={"challengePointsContainerContent"}>
                            <div>
                              <div className={"challengePointsContainerKey"}>{item.title}</div>
                              <div className={"challengePointsContainerVal"}>{item.val}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    }
                    headingColor={"#FF3B30"}
                    backImg={image2}
                  />
                </Col>
                <Col xs={24} md={8}>
                  <ChallengeCard
                    heading={t("caseStudies.whatWeDid.heading")}
                    description={
                      <ul>
                        <li>{t("caseStudies.uae.whatWeDid.point1")}</li>
                        <li>{t("caseStudies.uae.whatWeDid.point2")}</li>
                        <li>{t("caseStudies.uae.whatWeDid.point3")}</li>
                        <li>{t("caseStudies.uae.whatWeDid.point4")}</li>
                      </ul>
                    }
                    headingColor={"var(--primary-color)"}
                    backImg={image1}
                  />
                </Col>
                <Col xs={24} md={8}>
                  <ChallengeCard
                    heading={t("caseStudies.uae.results.heading")}
                    points={
                      <div className="challengePointsContainer" style={{ color: "white", gap: 10 }}>
                        {results2.map(item => (
                          <div
                            className={"challengePointsContainerContent"}
                            style={{ backgroundColor: "rgba(255,255,255, .2)" }}
                          >
                            <div>
                              <div className={"challengePointsContainerKey"}>{item.title}</div>
                              <div className={"challengePointsContainerVal"}>{item.val}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    }
                    headingColor={"white"}
                    backgroundClr={"#34C759"}
                    backImg={image9}
                  />
                </Col>
              </Row>
              <p style={{ fontSize: "1.2rem", fontStyle: "italic", marginTop: "3rem" }}>
                {t("caseStudies.uae.quote")}
              </p>
              <b style={{ marginTop: "1rem", fontStyle: "italic" }}>{t("caseStudies.uae.author")}</b>
            </div>
          </div>

          {/* Cairo Case */}
          <div className="caseStudyContent">
            <div className={"centerEveryThing"}>
              <HeadingDescription
                heading={
                  <h1>
                    {t("caseStudies.cairo.title")}
                    <span style={{ color: 'var(--primary-color)' }}>{t("caseStudies.cairo.highlight")}</span>
                  </h1>
                }
              />
              <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                  <ChallengeCard
                    heading={t("caseStudies.challenge.heading")}
                    description={t("caseStudies.cairo.challenge.description")}
                    points={
                      <div className="challengePointsContainer">
                        {data3.map(item => (
                          <div className={"challengePointsContainerContent"}>
                            <div>
                              <div className={"challengePointsContainerKey"}>{item.title}</div>
                              <div className={"challengePointsContainerVal"}>{item.val}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    }
                    headingColor={"#FF3B30"}
                    backImg={image6}
                  />
                </Col>
                <Col xs={24} md={8}>
                  <ChallengeCard
                    heading={t("caseStudies.whatWeDid.heading")}
                    description={
                      <ul>
                        <li>{t("caseStudies.cairo.whatWeDid.point1")}</li>
                        <li>{t("caseStudies.cairo.whatWeDid.point2")}</li>
                        <li>{t("caseStudies.cairo.whatWeDid.point3")}</li>
                      </ul>
                    }
                    headingColor={"var(--primary-color)"}
                    backImg={image7}
                  />
                </Col>
                <Col xs={24} md={8}>
                  <ChallengeCard
                    heading={t("caseStudies.cairo.results.heading")}
                    points={
                      <div className="challengePointsContainer" style={{ color: "white", gap: 10 }}>
                        {results3.map(item => (
                          <div
                            className={"challengePointsContainerContent"}
                            style={{ backgroundColor: "rgba(255,255,255, .2)" }}
                          >
                            <div>
                              <div className={"challengePointsContainerKey"}>{item.title}</div>
                              <div className={"challengePointsContainerVal"}>{item.val}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    }
                    headingColor={"white"}
                    backgroundClr={"#34C759"}
                    backImg={image8}
                  />
                </Col>
              </Row>
            </div>
          </div>

        </div>
      </div>

      {/* Final Card */}
      <div className={"contentWrapper"} style={{ padding: "80px 0 80px 0px" }}>
        <CardComponent
          image={image5}
          heading={t("caseStudies.card.heading")}
          description={t("caseStudies.card.description")}
          buttonText={t("caseStudies.card.buttonText")}
          index={0}
        />
      </div>
    </div>
  );
};

export default CaseStudies;
