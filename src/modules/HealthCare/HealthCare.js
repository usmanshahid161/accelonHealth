import { Col, Row }       from 'antd';
import React              from 'react';
import "./HealthCare.scss";
import backImg            from '../../assets/images/herosection.png';
import ButtonComponent    from '../../components/button/Button';
import CardComponent      from '../../components/cardsComponents/cardsComponents';
import CardsWOBg          from '../../components/cardsWOBg/cardsWOBg';
import ContentBox         from '../../components/contentBox/contentBox';
import ContentImageBox    from '../../components/ContentImageBox/ContentImageBox';
import HeadingDescription from '../../components/heading&description/heading&description';
import image1 from "./assets/Business Inteelginace.png";
import image2 from "./assets/CDI Training.JPG"
import image3 from "./assets/LMS.JPG";
import image4 from "./assets/CHI Accredetation .PNG";
import image5 from "./assets/Mapping Service .PNG";
import image6 from "./assets/wwwwwww.jpg";
import hospitalImg from "./assets/s1 2.png"

const HealthCare = () => {
  const cardsData = [
    {
      heading: <div style={ {
        color: 'var(--primary-color)',
      } }>
        Mapping Services
        <br/>
        <h5 style={ {
          fontSize: '1.2rem',
          marginBottom: 14,
          marginTop: 10
        } }>
          From internal Codes to Payer-perfect Clarity
        </h5>
      </div>,
      description: "Translate internal service codes into compliant SBS / ACHI / CPT/HCPCS structures and align with ICD-10-CM/AM and DRG frameworks. Result: cleaner charges, fewer reworks, faster adjudication.",
      image: image5
    },
    {
      heading: <div style={ {
        color: 'var(--primary-color)',
      } }>
        Saudi CHI Accreditation Preparation
        <br/>
        <h5 style={ {
          fontSize: '1.2rem',
          marginBottom: 14,
          marginTop: 10
        } }>
          Achieve Accreditation with Confidence
        </h5>
      </div>,
      description: "From gap analysis and mock surveys to full readiness plans, we guide you step-by-step through CHI requirements. Reduce preparation time, avoid costly setbacks, and build a culture of quality.",
      image: image4
    },
    {
      heading: <div style={ {
        color: 'var(--primary-color)',
      } }>
        RCM Improvement Programs
        <br/>
        <h5 style={ {
          fontSize: '1.2rem',
          marginBottom: 14,
          marginTop: 10
        } }>
          Optimize Revenue, Minimize Leakage
        </h5>
      </div>,
      description: "Go beyond basic billing. We analyze your end-to-end revenue cycle, targeting performance, Case Mix Index (CMI) optimization, and denial reduction to unlock hidden revenue streams.",
      image: image6
    },
    {
      heading: <div style={ {
        color: 'var(--primary-color)',
      } }>
        Clinical Documentation Improvement (CDI) Training
        <br/>
        <h5 style={ {
          fontSize: '1.2rem',
          marginBottom: 14,
          marginTop: 10
        } }>
          Empower Your Clinicians, Elevate Your Outcomes
        </h5>
      </div>,
      description: "Clinician-friendly training that supports medical necessity, accurate coding, and quality metrics—so every patient story is documented clearly and compliantly.",
      image: image2
    },
    {
      heading: <div style={ {
        color: 'var(--primary-color)',
      } }>
        Business Intelligence Integration
        <br/>
        <h5 style={ {
          fontSize: '1.2rem',
          marginBottom: 14,
          marginTop: 10
        } }>
          Data-Driven Decisions, Predictable Growth
        </h5>
      </div>,
      description: "Claims analytics and role-based dashboards to track trends, spot friction, and guide action—from reactive to predictive.",
      image: image1
    },
    {
      heading: <div style={ {
        color: 'var(--primary-color)',
      } }>
        Learning Management System (LMS)
        <br/>
        <h5 style={ {
          fontSize: '1.2rem',
          marginBottom: 14,
          marginTop: 10
        } }>
          Continuous Learning, Lifelong Compliance
        </h5>
      </div>,
      description: "24/7 courses localized for KSA/GCC, Egypt, and U.S. contexts. Keep teams current without pulling them off the floor.",
      image: image3
    }
  ]
  const data = [
    {
      heading: "Deeply Local, Globally Informed",
      description: "We speak the language of local regulatory & payer rules—because we work with them every day."
    },
    {
      heading: "Tech-enabled, expertise-driven",
      description: "· Smart tools accelerate analysis; seasoned consultants drive outcomes."
    },
    {
      heading: "We Measure Our Success by Yours",
      description: "Tangible outcomes—faster accreditation, higher revenue, fewer denials—are what we deliver."
    },

  ]

  return <>
    <ContentImageBox backImg={ backImg } fullHeight={ true } shaded={ true }>
      <div className={ "endToEndRcm" }>
        <h1>Expert Consulting That Builds Stronger, More Profitable Healthcare Organizations</h1>
        <p>Accreditation. Compliance. Revenue optimization. Navigate it all with confidence. Accelon Consulting delivers
          the strategic blueprint and hands-on execution to future-proof your operations.</p>
        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "white" }
                         size={ "large" }
                         style={ {
                           height: "60px",
                           backgroundColor: "white",
                           marginTop: 60,
                           color: "var(--primary-color)"
                         } }>From Use Case to ROI — Request a Strategy Session</ButtonComponent>
      </div>
    </ContentImageBox>
    <ContentImageBox>
      <div className={ "endToEndRcm" } style={ {
        color: "black"
      } }>
        <h1>The Compliance Maze Is Complex. <span
          style={ { color: "var(--primary-color)" } }>Your Success Shouldn’t Be.</span>
        </h1>
        <p style={ {
          fontWeight: 500,
        } }>Keeping pace with evolving standards and payer rules is a full-time job—one that steals focus from care.
          Missteps mean delays, penalties, and leakage. We turn regulatory hurdles into growth momentum.</p>
      </div>
    </ContentImageBox>
    <div style={ {
      backgroundColor: "rgba(28, 36, 96, .05 )"
    } }>
      <div className={ "contentWrapper" }>
        <HeadingDescription
          heading={ "Your Blueprint for Operational Excellence" }
          description={ "We don’t just advise—we embed capability. Our portfolio is designed to build resilience, drive efficiency, and make compliance a habit across your organization." }
        />
        {
          cardsData.map((card, index) => <CardComponent
            heading={ card.heading }
            description={ card.description }
            image={ card.image }
            index={ index }
          />)
        }
      </div>
    </div>
    <div className={"marginFromTop"}/>
    <div>
      <HeadingDescription
        heading={ <h1>Expertise That Feels Like An <span style={ {
          color: 'var(--primary-color)',
        } }>Extension of Your Team</span></h1> }
        description={ "Other firms talk strategy. We build capability." }
      />
      <Row gutter={ [24, 24] } style={ {
        width: "80%",
        margin: "auto"
      } }>
        {
          data.map((item, index) => <Col xs={ 24 } md={ 8 }><CardsWOBg
            heading={ item.heading }
            description={ item.description }
          /></Col>)
        }
      </Row>
    </div>
    <div className={ "marginFromTop" }/>
    <div style={ {
      backgroundColor: "rgba(28, 36, 96, .05 )"
    } }>
      <div className={ "contentWrapper" }>
        <div>
          <HeadingDescription
            heading={ <h1>From Uncertainty to Accreditation A <span style={ {
              color: 'var(--primary-color)',
            } }>Riyadh Hospital’s Story</span></h1> }
          />
          <CardComponent
            heading={ <span style={ {
              color: 'var(--primary-color)',
            } }>Facing a CHI audit with inconsistent documentation and coding errors, a leading hospital partnered with us.</span> }
            description={ <div style={ {
              color: "black",
              marginTop: 40,
            } }>
              <h2>
                Our Role
              </h2>
              <p style={ {
                fontSize: "18px",
                marginTop: 4
              } }>
                CDI training + RCM system renovation + compliance mapping.
              </p>

              <h2 style={ {
                marginTop: 40
              } }>
                The Result
              </h2>
              <p style={ {
                color: "black",
                fontSize: "18px",
                marginTop: 4
              } }>
                Successful accreditation, 20% faster reimbursement, and a team empowered for long-term excellence.
              </p>
            </div> }
            image={ hospitalImg }
            index={ 0 }
          />
        </div>
      </div>
    </div>
    <ContentBox>
      <div className={ "endToEndRcm" } style={ {
        marginTop: 0,
      } }>
        <i><h1>Ready to Lead—Not Just Comply?</h1></i>
        <p>
          Trade uncertainty for operating confidence. Whether you’re preparing for CHI accreditation, aligning to UHIA,
          or optimizing U.S. operations, let’s build a foundation that grows with you.
        </p>
        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "white" }
                         size={ "large" }
                         style={ {
                           height: "60px",
                           backgroundColor: "white",
                           marginTop: 50,
                           color: "var(--primary-color)"
                         } }>Book a Free Consultation Now</ButtonComponent>
      </div>
    </ContentBox>
  </>
}

export default HealthCare;