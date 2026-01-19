import { Row, Col }       from 'antd';
import React              from 'react';
import "./RevenueCycle.scss";
import ButtonComponent    from '../../components/button/Button';
import CardComponent      from '../../components/cardsComponents/cardsComponents';
import CardsWOBg          from '../../components/cardsWOBg/cardsWOBg';
import ContentBox         from '../../components/contentBox/contentBox';
import HeaderSection      from '../../components/header/HeaderSection';
import HeadingDescription from '../../components/heading&description/heading&description';
import LongButton         from '../../components/longButton/LongButton';
import image2             from "./assets/unnamed (2).jpg";
import image3             from "./assets/unnamed (1).jpg";
import image4             from "./assets/unnamed.jpg";
import image5             from "./assets/3 .PNG";
import image6             from "./assets/dd.jpg";
import image7             from "./assets/unnamed (3).jpg";
import image8             from "./assets/unnamed (4).jpg";

const RevenueCycle = () => {
  const data1 = [
    {
      heading: "Full-Cycle RCM, Zero Hassle",
      description: "We run the entire revenue engine so clinicians can focus on care. That’s capacity and quality you feel immediately.",
    },
    {
      heading: "Flexible Subscription → Faster ROI",
      description: "Predictable cost structure, measurable lift: higher collections, fewer denials, quicker cycles.",
    },
    {
      heading: "Seamless & Scalable",
      description: "From single clinics to multi-site networks, the operating discipline stays consistent as you grow.",
    },

  ]
  const data = [
    {
      heading: "Patient Scheduling & Front Office Support — smoother starts, happier patients",
      description: "From day one, we handle appointments and registrations to stabilize flow and improve first-touch satisfaction",
      image: image4
    },
    {
      heading: "Real-Time Insurance Eligibility & Pre-Authorizations — stop denials at the door",
      description: "Instant verification and swift pre-approvals speed care, build trust, and protect your revenue potential before care is delivered.",
      image: image5
    },
    {
      heading: "Expert Medical Coding & Charge Capture — precision in, reimbursement out",
      description: "Certified coders across ICD-10-CM/AM, SBS/ACHI, CPT/HCPCS, AR-DRG/IR-DRG ensure accurate documentation and full, compliant capture—preventing undercoding and avoidable denials.",
      image: image3
    },
    {
      heading: "Real-Time Medical & Technical Auditing — perfection before submission",
      description: "Pre-submission audits check diagnosis/procedure crosswalks, medical necessity, plan rules, and local payer policies—so claims leave clean.",
      image: image2
    },
    {
      heading: "Denial Management & A/R Follow-up leak proof cash acceleration",
      description: "We monitor denial patterns, appeal intelligently, and pursue balances with discipline—turning stuck claims into cleared cash and shrinking your A/R.",
      image: image7
    },
    {
      heading: "Payment Reconciliation & Intelligence — total financial clarity",
      description: "Every payment accounted for. Dashboards show what’s billed, what’s paid, and what’s pending—so leaders act with confidence",
      image: image8
    },

  ]

  return <>
    <HeaderSection
      heading={ <h1>Your Complete Revenue Cycle, Mastered. <span style={ {
        color: 'var(--primary-color)',
      } }>Your Margins, Transformed.</span></h1> }
      subheading={ "Leap beyond traditional outsourcing. Our all-inclusive RCM model operates as your strategic command center—from first patient call to cash in bank. We deliver measurable financial lift, not just task coverage." }
      directionFromLeft={ false }
      buttonTitle={ "Stop Revenue Leakage. Start Here." }
      backImg={ image6 }
    />

    <div style={ {
      backgroundColor: "rgba(28, 36, 96, .05 )"
    } }>
      <div className="contentWrapper">
        <div/>
        <HeadingDescription
          heading={ <h1>Accelon’s Blueprint for Flawless Revenue Operations <span style={ {
            color: 'var(--primary-color)',
          } }>All-Inclusive, End-to-End.</span></h1> }
          description={ "We don’t “cover tasks.” We own outcomes. One subscription. One accountable team. One operating rhythm." }
        />
          {
            data.map((card, index) => <CardComponent
              heading={ <span style={ {
                color: 'var(--primary-color)',
              } }>{ card.heading }</span> }
              description={ card.description }
              image={ card.image }
              index={ index }
            />)
          }

        <LongButton buttonTitle={"Get a custom solution"} text={"Which challenge is costing you most?"}/>
        <div/>
      </div>
    </div>
    <div className="contentWrapper">
      <div>
        <HeadingDescription
          heading={ <h1>Outsourcing That Breaks You vs <span style={ {
            color: 'var(--primary-color)',
          } }>Partnership That Builds You.</span></h1> }
          description={ "Other firms talk strategy. We build capability." }
        />
        <Row gutter={ [24, 24] }>
          <Col xs={ 24 } md={ 12 }><CardsWOBg
            alignLeft={ true }
            heading={ <h2 style={ {
              color: "var(--primary-text-color)",
              fontSize: "2rem"
            } }>Old Way</h2> }
            description={ "Cut a few costs, add a few handoffs, watch collections slip through the cracks. Savings on paper. Leakage in practice." }
          />
          </Col>
          <Col xs={ 24 } md={ 12 }><CardsWOBg
            alignLeft={ true }
            heading={ <i><h2 style={ {
              fontSize: "2rem"
            } }>Accelon way</h2></i> }
            description={ "One accountable backbone that turns chaos into cash, noise into clarity, and effort into outcomes." }
            background={ true }
          />
          </Col>
        </Row>
      </div>

      <div>
        <HeadingDescription
          heading={ <h1>Why we’re an investment, <span style={ {
            color: 'var(--primary-color)',
          } }>not an added cost.</span></h1> }
        />
        <Row gutter={ [24, 24] }>
          {
            data1.map((card, index) => <Col xs={ 24 } md={ 8 }><CardsWOBg
              alignLeft={ true }
              heading={ card.heading }
              description={ card.description }
              background={ true }
            />
            </Col>)
          }
        </Row>
      </div>

    </div>
    <div className="marginFromTop"/>
    <div style={ {
      backgroundColor: "rgba(28, 36, 96, .05 )",
      paddingBottom: 80
    } }>
      <div className="contentWrapper">
        <div>
          <HeadingDescription
            heading={ <h1>Proof is in Performance <span style={{
              color: 'var(--primary-color)',
            }}>A Story from Riyadh.</span></h1> }
              description={ <b style={{
                color: 'var(--primary-color)',
              }}>Case Highlight: Saudi Polyclinic</b> }
          />
          <Row gutter={ [24, 24] } style={ {
            width: "90%",
            margin: "auto",
          } }>
            <Col xs={ 24 } md={ 12 }><CardsWOBg
              alignLeft={ true }
              heading={ <h1 style={ {
                fontSize: "2rem",
                color: "red"
              } }>The Challenge</h1> }
              description={ "High claim rejections, inaccurate coding, delayed reimbursements." }
            />
            </Col>
            <Col xs={ 24 } md={ 12 }><CardsWOBg
              alignLeft={ true }
              heading={ <h1 style={ {
                fontSize: "2rem",
                color: "var(--primary-color)"
              } }>What We Did</h1> }
              description={ "End-to-end RCM with real-time eligibility, precise medical coding, and a strategic denials management approach." }
            />
            </Col>
            <Col xs={ 24 } md={ 12 }><CardsWOBg
              alignLeft={ true }
              heading={ <h1 style={ {
                fontSize: "2rem",
                color: "green"
              } }>Results In 90 Days</h1> }
              description={
                <ul>
                  <li>40% fewer coding-related denials.</li>
                  <li>25% monthly revenue uplift.</li>
                  <li>50% reduction in backlog.</li>
                  <li>Improved staff satisfaction & patient retention.</li>
                </ul>
              }
            />
            </Col>
            <Col xs={ 24 } md={ 12 }><CardsWOBg
              alignLeft={ true }
              heading={ <h1 style={ {
                fontSize: "2rem",
                color: "var(--primary-text-color)"
              } }>Benchmarks We’ll Hit—Together</h1> }
              description={
                <ul>
                  <li>Net Collection Rate: 95%+</li>
                  <li>Clean Claim Ratio: 99%+</li>
                  <li>Significant Revenue Increase: ~25%</li>
                </ul>
              }
            />
            </Col>
          </Row>
        </div>
      </div>
    </div>

    <ContentBox>
      <div className={ "endToEndRcm" }>
        <i><h1>Ready to Turn Your Revenue Cycle into Your Strongest Asset?</h1></i>
        <p>
          Stop letting admin drag steal your growth. Partner with a team that’s fluent in healthcare—and native to your
          market’s rules—to turn complexity into cash and clarity. </p>


        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "white" }
                         size={ "large" }

                         style={ {
                           height: "60px", backgroundColor: "white", marginTop: 60, color: "var(--primary-color)"
                         } }>Speak to Our RCM Director</ButtonComponent>
      </div>
    </ContentBox>
  </>
}

export default RevenueCycle;