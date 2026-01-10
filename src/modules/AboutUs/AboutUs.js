import { Col, Row }       from 'antd';
import React              from 'react';
import ButtonComponent    from '../../components/button/Button';
import CardsWOBg          from '../../components/cardsWOBg/cardsWOBg';
import ContentBox         from '../../components/contentBox/contentBox';
import ContentImageBox    from '../../components/ContentImageBox/ContentImageBox';
import HeadingDescription from '../../components/heading&description/heading&description';
import ChallengeCard      from '../CaseStudies/ChallengeCard/ChallengeCard';
import image1             from "./assets/HeroImage.jpg"
import Ceo                from "./assets/CEO.jpeg";
import Coo                from "./assets/COO.jpeg";

const AboutUs = () => {
  const data = [
    {
      heading: "The Revenue Engine: End-to-End RCM & BPO",
      description: "This is our heartbeat. We manage your entire revenue cycle, from the first patient call to cash in bank, with scalable, all-inclusive outsourcing. Our teams are certified across ICD-10-CM/AM, CPT/HCPCS, SBS/ACHI, and AR-DRG/IR-DRG—so reimbursement is maximized, and denials are minimized."
    },
    {
      heading: "The Strategic Compass: Consulting & Compliance",
      description: "We are your navigators in the complex regulatory landscape of healthcare regulations. From CHI accreditation in Saudi Arabia to US regulatory rules, our consultants provide the roadmap for quality, compliance, and continuous improvement."
    },
    {
      heading: "The Human Connection: Patient-Centric Solutions",
      description: "Healthcare is human. With AccelonVoice (multilingual, Arabic/English), every touchpoint—from scheduling to follow-up—feels effortless, reduces no-shows, and deepens loyalty, so outcomes improve and capacity grows."
    },
    {
      heading: "The Intelligent Advantage: Smart Automation",
      description: "AccelonCode, AccelonAudit, and AccelonNotes act as force multipliers. They work behind the scenes to eliminate errors, prevent claim rejections, and free your staff from repetitive tasks. We don’t just sell technology; we supercharge human expertise to deliver unmatched accuracy and efficiency."
    },

  ]
  const data1 = [
    {
      heading: "Egypt",
      description: "As a key delivery hub, we operate with an intimate understanding of the Egyptian healthcare market and UHIA regulations—delivering cost-effective excellence without compromising quality."
    },
    {
      heading: "Saudi Arabia & GCC",
      description: "We possess deep, firsthand knowledge of the Saudi Council for Health Insurance (CHI) regulations, NPHIES, and SBS coding. We don't just follow rules; we master them, ensuring your operations are compliant by design."
    },
    {
      heading: "United States",
      description: "We translate global best practices into the U.S. context, guiding providers through a complex billing ecosystem with clarity, consistency, and control."
    }

  ]
  const data2 = [
    {
      heading: "Financial Resilience",
      description: "Significant revenue uplift and accelerated cash flow."
    },
    {
      heading: "Operational Serenity",
      description: "Streamlined workflows that reduce stress and errors."
    },
    {
      heading: "Strategic Clarity",
      description: "Data-driven insights that guide your smartest decisions."
    },
  ]
  return <>
    <ContentImageBox backImg={ image1 } shaded={ true } fullHeight={ true }>
      <div className={ "endToEndRcm" }>
        <h1>The Heartbeat of Modern Healthcare, Powered by Partnership.</h1>
        <p>Behind every great provider is a partner who turns operational complexity into clinical clarity. That’s
          Accelon Health—the living healthcare engine that blends full-cycle RCM, consulting, and technology so revenue
          flows and care teams can finally breathe again.</p>
        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "white" }
                         size={ "large" }
                         style={ {
                           height: "60px",
                           backgroundColor: "white",
                           marginTop: 60,
                           color: "var(--primary-color)"
                         } }>Book Your Complimentary Strategy Session</ButtonComponent>
      </div>
    </ContentImageBox>
    <ContentImageBox>
      <div className={ "endToEndRcm" } style={ {
        color: "black"
      } }>
        <h1><span style={ {
          color: 'var(--primary-color)',
          fontStyle: "italic"
        } }>Our Story</span></h1>
        <h1 style={ {
          fontStyle: "italic"
        } }>Born To Transform Healthcare’s Operating System.</h1>
        <p style={ {
          fontWeight: 400,
        } }>At Accelon Health, we know the pressure you carry. One day it’s regulatory nuance; the next it’s unforgiving
          rules and shifting requirements. We saw an engine that should fuel growth—Revenue Cycle Management—weighing
          down leaders with cost and complexity instead of delivering clarity and momentum.</p>
        <p style={ {
          fontWeight: 400,
        } }>So, we rebuilt the way healthcare runs. We’re not another conventional vendor; we’re healthcare strategists,
          certified RCM professionals, and consulting experts who redesigned the operating model from the ground up. RCM
          is the heart, yes—but it beats inside a bigger body: scalable operations, disciplined advisory, patient
          experience that actually connects, and Autopilot Automation under the hood that makes every workflow cleaner
          and faster.</p>
        <p style={ {
          fontWeight: 500,
          fontStyle: "italic"
        } }>Purpose, in one line: turn operations into financial resilience and everyday excellence.</p>
      </div>
    </ContentImageBox>
    <div className={ "marginFromTop" }/>
    <div className={ "contentWrapper" }>
      <div>
        <HeadingDescription
          heading={ <h1>We’re Healthcare Architects <span style={ {
            color: 'var(--primary-color)',
          } }>Building Your Foundation for Growth</span></h1> }
          description={ "Our blueprint rests on four pillars:" }
        />
        <Row gutter={ [24, 24] }>
          {
            data.map(card => <Col xs={ 24 } md={ 12 }><CardsWOBg
              heading={ card.heading }
              description={ card.description }
              background={ true }
            />
            </Col>)
          }
        </Row>
      </div>
      <div>
        <HeadingDescription
          heading={ <h1 style={ {
            color: 'var(--primary-color)',
          } }>Our Leadership</h1> }
        />
        <Row gutter={ [24, 24] } className={"filledCards"} style={{
          margin:"auto"
        }}>
          <Col xs={ 24 } md={ 12 }>
            <ChallengeCard
              heading="Ayman Ibrahim"
              description="Chief Executive Officer"
              backImg={ Ceo }
              points={
                <div className="profileCard">
                  <p className="email">Email:
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=email@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={ { color: "var(--primary-color)" } }
                    >
                      ayman.i@accelonhealth.com</a></p>
                  <div className="actions">
                    <ButtonComponent
                      color={ "linear-gradient(to right, #1C2460, #0077C7)" }
                      onClick={ () => window.open(
                        "https://www.linkedin.com/in/ayman-ibrahim-b2040421",
                        "_blank",
                        "noopener,noreferrer"
                      ) }
                    >
                      LinkedIn
                    </ButtonComponent>

                  </div>
                </div>
              }
              height={ 500 }
            />

          </Col>

          <Col xs={ 24 } md={ 12 }>
            <ChallengeCard
              heading="Dr Ahmed Osama"
              description="Chief Operating Officer"
              backImg={ Coo }
              points={
                <div className="profileCard">

                  <p className="email">
                    Email: <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=email@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={ { color: "var(--primary-color)" } }
                  >ahmed.o@accelonhealth.com</a>
                  </p>
                  <div className="actions">
                    <ButtonComponent
                      color={ "linear-gradient(to right, #1C2460, #0077C7)" }
                      onClick={ () => window.open(
                        "https://www.linkedin.com/in/ahmed-osama-bab0b1162",
                        "_blank",
                        "noopener,noreferrer"
                      ) }
                    >
                      LinkedIn
                    </ButtonComponent>

                  </div>
                </div>
              }
              height={ 500 }
            />

          </Col>
        </Row>
      </div>
    </div>
    <div className={ "marginFromTop" }/>
    <ContentBox>
      <div className={ "endToEndRcm" }>
        <h1>Deeply Local, Truly Global
          Your Partner Across Borders.</h1>
        <p>
          A great healthcare partner must understand the unique pulse of every market. Our expertise isn't generic; it's
          specifically tailored to the regulations, cultures, and payer landscapes where you operate.
        </p>

        <Row gutter={ [24, 24] } style={ {
          marginTop: 80
        } }>
          {
            data1.map(card => <Col xs={ 24 } md={ 8 }>
              <CardsWOBg
                heading={ <div style={ {
                  fontSize: "1.7rem",
                  fontWeight: 550,
                } }> { card.heading } </div> }
                description={ card.description }
                background={ true }
                backgroundClr={ "rgba(255,255,255,.1)" }
                color={ "white" }
              />
            </Col>)
          }
        </Row>


        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "white" }
                         size={ "large" }

                         style={ {
                           height: "60px", backgroundColor: "white", marginTop: 60, color: "var(--primary-color)"
                         } }>Speak to a Solutions Expert</ButtonComponent>
      </div>
    </ContentBox>

    <div style={ {
      backgroundColor: "rgba(28, 36, 96, .05 )"
    } }>
      <div className="contentWrapper">
        <div>
          <HeadingDescription
            heading={ "The Accelon Promise" }
            description={ "We’re an investment in your growth, not an added cost. Streamlined operations accelerate profit. Strong compliance protects your reputation. Elevated engagement compounds lifetime value. Less friction. Smarter workflows. Happier patients." }
          />
          <b className={ "centerEveryThing" } style={ {
            marginTop: 40
          } }>You will experience the Accelon difference through:</b>

          <Row gutter={ [24, 24] } style={ {
            marginTop: 80
          } }>
            {
              data2.map(card => <Col xs={ 24 } md={ 8 }>
                <CardsWOBg
                  heading={ card.heading }
                  description={ card.description }
                  background={ true }
                  backgroundClr={ "rgba(255,255,255)" }
                />
              </Col>)
            }
          </Row>
          <div className={ "marginFromTop" }/>
        </div>
      </div>
    </div>
    <ContentBox>
      <div className={ "endToEndRcm" } style={ {
        marginTop: 0,
      } }>
        <i><h1>Ready to Build a Healthier, More Profitable Future Together?</h1></i>
        <p>
          Your next chapter of growth begins with a conversation. Let us show you what a true partnership can achieve.
        </p>
        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "white" }
                         size={ "large" }
                         style={ {
                           height: "60px",
                           backgroundColor: "white",
                           marginTop: 50,
                           color: "var(--primary-color)"
                         } }>Book Your Complementary Strategy Session</ButtonComponent>
        <b style={ {
          fontSize: "1rem",
          marginTop: 80
        } }>
          Accelon Health. Leap Beyond Limits.
        </b>
      </div>
    </ContentBox>

  </>
}
export default AboutUs;