import { Col, Row }       from 'antd';
import React              from 'react';
import ButtonComponent    from '../../components/button/Button';
import CardComponent      from '../../components/cardsComponents/cardsComponents';
import CardsWOBg          from '../../components/cardsWOBg/cardsWOBg';
import ContentBox         from '../../components/contentBox/contentBox';
import ContentImageBox    from '../../components/ContentImageBox/ContentImageBox';
import HeadingDescription from '../../components/heading&description/heading&description';
import image1 from "./assets/unnamed.jpg";
import image2 from "./assets/backImg.jpg";
import "./Audit.scss";

const Audit = () => {
  const data = [
    {
      heading: "40%+ reduction",
      description: "in claim rejections",
    },
    {
      heading: "Faster reimbursement",
      description: "with cleaner claims",
    },
    {
      heading: "Full regulatory compliance",
      description: "built-in",
    },
    {
      heading: "Seamless integration",
      description: "with your existing systems",
    },
    {
      heading: "Real-time alerts",
      description: "with actionable insights",
    },
  ]

  const data1 = [
    {
      heading: "Native By Market: KSA/GCC , Egypt, & U.S.",
      description: "Commercial/Government Insurance Policies Compliance",
    },
    {
      heading: "Security & privacy",
      description: "Healthcare-appropriate controls and encryption (HIPAA-aligned)",
    },
    {
      heading: "Deploy your way",
      description: "Containerized options, private cloud/VPC, data-residency alignment.",
    }
  ]
  return <div className={"auditContainer"}>
    <ContentImageBox backImg={ image2 } shaded={ true } fullHeight={true}>
      <div className={ "endToEndRcm" }>
        <h1>Turn Auditing Into a Revenue Protector</h1>
        <p>Why wait for denials when you can prevent them? AccelonAudit checks each claim against medical and technical
          rules before submission—protecting revenue, safeguarding compliance, and bringing calm to your RCM.</p>
        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "white" }
                         size={ "large" }
                         style={ {
                           height: "60px",
                           backgroundColor: "white",
                           marginTop: 60,
                           color: "var(--primary-color)"
                         } }>Eliminate Rejections Before They Happen</ButtonComponent>
      </div>
    </ContentImageBox>
    <div className={ "marginFromTop" }/>
    <div className={ "contentWrapper" }>
      <CardComponent
        image={ image1 }
        heading={ <h1>Audit at the Speed of Thought. <span style={ { color: "var(--primary-color)" } }>Trust-Grade Accuracy.</span>
        </h1> }
        description={
          <div style={{
            color:"var(--primary-text-color)"
          }}>
            <p>
              Drop AccelonAudit into your workflow and it becomes an intelligent
              checkpoint—validating claims against clinical logic and payer
              requirements in real time.
            </p>

            <h4 style={ { marginTop: "1.4rem", fontWeight: 700, fontSize: "1.1rem" } }>
              What We Check in Real Time
            </h4>

            <ul style={ { paddingLeft: "1.2rem", fontSize: "1.1rem" } }>
              <li>
                <strong>Diagnosis ↔ Procedure</strong> compatibility (crosswalks,
                sequencing)
              </li>
              <li>
                <strong>Diagnosis ↔ Medication</strong> alignment (contraindications,
                coverage logic)
              </li>
              <li>
                <strong>Procedure ↔ Procedure</strong> conflicts (mutual exclusivity,
                bundling)
              </li>
              <li>Age/Gender appropriateness checks</li>
              <li>Provider-specific billing rules</li>
              <li>Insurance contractual & technical rules</li>
            </ul>
          </div>
        }
        index={ 1 }
      />

      <div>
        <HeadingDescription
          description={ "Tools catch errors. We build assurance. AccelonAudit blends regional payer fluency with domain-trained AI—so your team sees fewer surprises and cleaner first-pass claims." }
          heading={ <h1>Why AccelonAudit Catches What <span style={ { color: "var(--primary-color)" } }>Human Reviewers Miss</span>
          </h1> }
        />
        <Row gutter={ [24, 24] } style={{
          justifyContent: "center",
        }}>
          {
            data.map((item, index) => <Col xs={ 24 } md={ 6 }>
                <CardsWOBg heading={ item.heading }
                           description={ item.description }/>
              </Col>
            )
          }
        </Row>
      </div>

      <div>
        <HeadingDescription
          heading={ <h1>Built for <span style={ { color: "var(--primary-color)" } }>Healthcare</span>, Built For Now
          </h1> }
        />
        <Row gutter={ [24, 24] }>
          {
            data1.map((item, index) => <Col xs={ 24 } md={ 8 }>
                <CardsWOBg heading={ item.heading }
                           description={ item.description }
                           background={ true }
                />
              </Col>
            )
          }
        </Row>
        <div style={ {
          marginTop: 80
        } }/>
      </div>
    </div>
    <ContentBox>
      <div className={ "endToEndRcm" }>
        <i><h1>Ready to Move From Reactive to Preventive?</h1></i>
        <p>Stop letting denials decide your cashflow. Put a checkpoint in front of every claim—and keep revenue
          moving.</p>


        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "white" }
                         size={ "large" }

                         style={ {
                           height: "60px",
                           backgroundColor: "white",
                           marginTop: 60,
                           color: "var(--primary-color)"
                         } }>Schedule Your AccelonAudit Demo</ButtonComponent>
      </div>
    </ContentBox>
  </div>
}

export default Audit