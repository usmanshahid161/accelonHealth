import { Row, Col }       from 'antd';
import React              from 'react';
import backImg            from './assets/information-case-study-research-verification-analysis-sketch.jpg';
import ButtonComponent    from '../../components/button/Button';
import CardComponent      from '../../components/cardsComponents/cardsComponents';
import ContentImageBox    from '../../components/ContentImageBox/ContentImageBox';
import HeadingDescription from '../../components/heading&description/heading&description';
import ChallengeCard      from './ChallengeCard/ChallengeCard';
import "./ChallengeCard/ChallengeCard.scss";
import "./CaseStudies.scss";
import image1             from "./assets/unnamed (4).jpg";
import image2             from "./assets/unnamed (3).jpg";
import image3             from "./assets/unnamed.jpg";
import image4             from "./assets/unnamed (1).jpg";
import image5             from "./assets/unnamed (8).jpg";
import image6             from "./assets/unnamed (6).jpg";
import image7             from "./assets/2c6df7f0-f842-4aca-913f-8c805395fbe8.png";
import image8             from "./assets/unnamed (7).jpg";
import image9             from "./assets/unnamed (5).jpg";
import image10            from "./assets/unnamed (2).jpg";

const CaseStudies = () => {
  const data1 = [
    {
      title: "35% ",
      val: "Claim rejection rate draining revenue",
    },
    {
      title: "90 Days",
      val: "Reimbursement cycles straining cash flow",
    },
    {
      title: "Staff overwhelmed",
      val: "by manual processes",
    },
    {
      title: "CHI Accreditation Deadlines",
      val: "Upcoming "
    }
  ]
  const data2 = [
    {
      title: "$2.3 M",
      val: "Leaking annually due to coding inconsistencies",
    },
    {
      title: "Denial cascades"
    },
    {
      title: "Fragmented processes"
    },
    {
      title: "Below-benchmark patient satisfaction"
    }
  ]
  const data3 = [
    {
      title: "40% of billing capacity consumed",
      val: "Local insurance complexity and manual reconcilaition",
    },
    {
      title: "Growth plans delayed due to resource constraints."
    }
  ]

  const results = [
    {
      title: "40%",
      val: "Revenue increase",
    },
    {
      title: "35% to 5%",
      val: "Claim rejection rate dropped ",
    },
    {
      title: "90 to 45 days",
      val: "Reimbursement cycles shortened",
    },
    {
      title: "Achieved 2 Months Early",
      val: "Successful CHI accreditation "
    },
    {
      title: "+60%",
      val: "Staff satisfaction"
    },
  ]

  const results2 = [
    {
      title: "$1.8M",
      val: "Recovered revenue (≈78% leakage eliminated)",
    },
    {
      title: "95% Net Collection Rate ",
      val: "Across Sites",
    },
    {
      title: "+35 points",
      val: "Patient satisfaction ",
    },
    {
      title: "Expanded To 2 New Cities ",
      val: "without quality slippage."
    },
    {
      title: "Operational Costs −25% ",
      val: "Via standardization"
    },
    {
      title: "+60%",
      val: "Staff satisfaction"
    },
  ]

  const results3 = [
    {
      title: "30% Reduced",
      val: "Administrative costs",
    },
    {
      title: "+40% freed (no new hires) ",
      val: "Billing capacity ",
    },
    {
      title: "Opened 2 new facilities ",
      val: "With existing team.",
    },
    {
      title: "65 days → 38 days",
      val: "Revenue cycle"
    }
  ]


  return <div className={ "caseStudiesContainer" }>
    <ContentImageBox backImg={ backImg } fullHeight={ true } shaded={ true }>
      <div className={ "endToEndRcm" }>
        <h1>These Providers Were Losing 30-40% of Revenue to Broken Operations. Then They Called Us.</h1>
        <p>From Riyadh clinics to Cairo hospital groups, these are real stories of organizations that stopped managing
          revenue problems and started building engines for profitable growth.</p>
        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "white" }
                         size={ "large" }
                         style={ {
                           height: "60px",
                           backgroundColor: "white",
                           marginTop: 60,
                           color: "var(--primary-color)"
                         } }>Start Your Transformation Now</ButtonComponent>
      </div>
    </ContentImageBox>

    <div style={ {
      backgroundColor: "rgba(28, 36, 96, .05 )"
    } }>
      <div className="contentWrapper">


        <div className="caseStudyContent">
          <div className={ "centerEveryThing" }>
            <HeadingDescription
              heading={ <h1>How a Riyadh Polyclinic Achieved <span style={ {
                color: 'var(--primary-color)',
              } }>40% Revenue Growth in 6 Months</span></h1> }
            />

            <Row gutter={ [24, 24] }>
              <Col xs={ 24 } md={ 8 }>
                <ChallengeCard
                  heading={ "The Challenge" }
                  description={ "A respected 20-physician clinic in Riyadh faced mounting operational pressures" }
                  points={
                    <div className="challengePointsContainer">
                      {
                        data1.map(item => <div className={ "challengePointsContainerContent" }>
                          <div>
                            <div className={ "challengePointsContainerKey" }>{ item?.title }</div>
                            <div className={ "challengePointsContainerVal" }>{ item?.val }</div>
                          </div>
                        </div>)
                      }
                    </div>
                  }
                  headingColor={ "#FF3B30" }
                  backImg={ image3 }
                />
              </Col>
              <Col xs={ 24 } md={ 8 }>
                <ChallengeCard
                  heading={ "What We Did" }
                  description={ <ul>
                    <li>
                      End-to-end RCM outsourcing with Saudi-specific RCM expertise.
                    </li>
                    <li>
                      AccelonCode for autonomous, high-accuracy coding
                    </li>
                    <li>
                      Accreditation preparation (policies, mock surveys) and targeted training
                    </li>
                    <li>
                      Real-time performance dashboards for continuous improvement
                    </li>
                  </ul>
                  }
                  headingColor={ "var(--primary-color)" }
                  backImg={ image4 }
                />
              </Col>
              <Col xs={ 24 } md={ 8 }>
                <ChallengeCard
                  heading={ "Results In 6 Months" }
                  points={
                    <div className="challengePointsContainer" style={ {
                      color: "white",
                      gap: 10
                    } }>
                      {
                        results.map(item => <div
                          className={ "challengePointsContainerContent" }
                          style={ {
                            backgroundColor: "rgba(255,255,255, .2)",
                          } }
                        >
                          <div>
                            <div className={ "challengePointsContainerKey" }>{ item?.title }</div>
                            <div className={ "challengePointsContainerVal" }>{ item?.val }</div>
                          </div>
                        </div>)
                      }
                    </div>
                  }
                  headingColor={ "white" }
                  backgroundClr={ "#34C759" }
                  backImg={ image10 }
                />
              </Col>
            </Row>

            <p style={ {
              fontSize: "1.2rem",
              fontStyle: "italic",
              marginTop: "3rem"
            } }>
              “ Accelon Health didn't feel like another conventional vendor—they felt like part of our team. They
              understood Saudi healthcare challenges better than we did! “
            </p>
            <b style={ {
              marginTop: "1rem",
              fontStyle: "italic"
            } }>
              Dr. Abdullah Al Mamun, Managing Director
            </b>
          </div>
        </div>


        <div className="caseStudyContent">
          <div className={ "centerEveryThing" }>
            <HeadingDescription
              heading={ <h1>UAE Premier Hospital Network: <span style={ {
                color: 'var(--primary-color)',
              } }>$1.8M Recovered, 5 Locations Standardized</span></h1> }
            />

            <Row gutter={ [24, 24] }>
              <Col xs={ 24 } md={ 8 }>
                <ChallengeCard
                  heading={ "The Challenge" }
                  description={ "A multi-site network across Abu Dhabi and Dubai " }
                  points={
                    <div className="challengePointsContainer">
                      {
                        data2.map(item => <div className={ "challengePointsContainerContent" }>
                          <div>
                            <div className={ "challengePointsContainerKey" }>{ item?.title }</div>
                            <div className={ "challengePointsContainerVal" }>{ item?.val }</div>
                          </div>
                        </div>)
                      }
                    </div>
                  }
                  headingColor={ "#FF3B30" }
                  backImg={ image2 }
                />
              </Col>
              <Col xs={ 24 } md={ 8 }>
                <ChallengeCard
                  heading={ "What We Did" }
                  description={ <ul>
                    <li>
                      Built a centralized RCM/ops command center.
                    </li>
                    <li>
                      Standardized compliant coding and documentation protocols system wide.
                    </li>
                    <li>
                      Launched patient journey improvements (access, reminders, follow-ups)
                    </li>
                    <li>
                      Trained leadership on operational governance and KPIs
                    </li>
                  </ul>

                  }
                  headingColor={ "var(--primary-color)" }
                  backImg={ image1 }
                />
              </Col>
              <Col xs={ 24 } md={ 8 }>
                <ChallengeCard
                  heading={ "Results In 12 Months" }
                  points={
                    <div className="challengePointsContainer" style={ {
                      color: "white",
                      gap: 10
                    } }>
                      {
                        results2.map(item => <div
                          className={ "challengePointsContainerContent" }
                          style={ {
                            backgroundColor: "rgba(255,255,255, .2)",
                          } }
                        >
                          <div>
                            <div className={ "challengePointsContainerKey" }>{ item?.title }</div>
                            <div className={ "challengePointsContainerVal" }>{ item?.val }</div>
                          </div>
                        </div>)
                      }
                    </div>
                  }
                  headingColor={ "white" }
                  backgroundClr={ "#34C759" }
                  backImg={ image9 }
                />
              </Col>
            </Row>

            <p style={ {
              fontSize: "1.2rem",
              fontStyle: "italic",
              marginTop: "3rem"
            } }>
              “ We maintained quality while scaling. Accelon Health is a true strategic partner.“
            </p>
            <b style={ {
              marginTop: "1rem",
              fontStyle: "italic"
            } }>
              Group CEO, UAE
            </b>
          </div>
        </div>


        <div className="caseStudyContent">
          <div className={ "centerEveryThing" }>
            <HeadingDescription
              heading={ <h1>Cairo Hospital Group <span style={ {
                color: 'var(--primary-color)',
              } }>30% Cost Reduction While Scaling</span></h1> }
            />

            <Row gutter={ [24, 24] }>
              <Col xs={ 24 } md={ 8 }>
                <ChallengeCard
                  heading={ "The Challenge" }
                  description={ "A multi-site network across Cairo" }
                  points={
                    <div className="challengePointsContainer">
                      {
                        data3.map(item => <div className={ "challengePointsContainerContent" }>
                          <div>
                            <div className={ "challengePointsContainerKey" }>{ item?.title }</div>
                            <div className={ "challengePointsContainerVal" }>{ item?.val }</div>
                          </div>
                        </div>)
                      }
                    </div>
                  }
                  headingColor={ "#FF3B30" }
                  backImg={ image6 }
                />
              </Col>
              <Col xs={ 24 } md={ 8 }>
                <ChallengeCard
                  heading={ "What We Did" }
                  description={ <ul>
                    <li>
                      Full healthcare operations outsourcing tuned to local regulatory requirements.
                    </li>
                    <li>
                      Automated eligibility checks and pre-authorizations
                    </li>
                    <li>
                      BI dashboards with predictive analytics for forecasting
                    </li>
                  </ul>

                  }
                  headingColor={ "var(--primary-color)" }
                  backImg={ image7 }
                />
              </Col>
              <Col xs={ 24 } md={ 8 }>
                <ChallengeCard
                  heading={ "Results In 90 Days" }
                  points={
                    <div className="challengePointsContainer" style={ {
                      color: "white",
                      gap: 10
                    } }>
                      {
                        results3.map(item => <div
                          className={ "challengePointsContainerContent" }
                          style={ {
                            backgroundColor: "rgba(255,255,255, .2)",
                          } }
                        >
                          <div>
                            <div className={ "challengePointsContainerKey" }>{ item?.title }</div>
                            <div className={ "challengePointsContainerVal" }>{ item?.val }</div>
                          </div>
                        </div>)
                      }
                    </div>
                  }
                  headingColor={ "white" }
                  backgroundClr={ "#34C759" }
                  backImg={ image8 }
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
    <div className={ "contentWrapper" } style={{
      padding: "80px 0 80px 0px"
    }}>
      <CardComponent
        image={ image5 }
        heading={ "Stop Managing Revenue Problems. Start Driving Profitability." }
        description={ "These aren’t outliers—they’re the repeatable outcomes of rebuilding broken operations with a partner who’s done it across KSA, the GCC, Egypt, and the U.S. In healthcare, there’s no steady state—either grow or decline. Choose growth." }
        buttonText={ "Schedule Your Strategy Session" }
        index={ 0 }
      />
    </div>
  </div>
}

export default CaseStudies;