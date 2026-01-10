import React              from 'react';
import backImg            from '../../assets/images/herosection.png';
import ButtonComponent    from '../../components/button/Button';
import CardComponent      from '../../components/cardsComponents/cardsComponents';
import CardsWOBg          from '../../components/cardsWOBg/cardsWOBg';
import ContentBox         from '../../components/contentBox/contentBox';
import ContentImageBox    from '../../components/ContentImageBox/ContentImageBox';
import HeaderSection      from '../../components/header/HeaderSection';
import HeadingDescription from '../../components/heading&description/heading&description';
import { Row, Col }       from "antd"
import image1 from "./assets/unnamed (2).jpg";
import image2 from "./assets/unnamed (5).jpg";

const ContactCenter = () => {
  const data = [{
    heading: "Visit Scheduling & Management — smoother days, fewer no-shows",
    description: "End-to-end booking, confirmations, and smart reminders that stabilize calendars and reclaim lost visits."
  }, {
    heading: "Live Patient Inquiries — instant answers that build confidence",
    description: "Round-the-clock coverage for clinical and administrative questions, with adaptive scripts and clear escalation paths."
  }, {
    heading: "Patient Education & Follow-ups — care beyond your walls",
    description: "Empathetic post-visit calls, instructions, results notifications, and adherence follow-ups delivered in the patient’s dialect."
  }, {
    heading: "Experience Optimization — every touchpoint builds loyalty",
    description: "We capture feedback, resolve concerns, and surface insights to improve access and retention—without adding headcount."
  },

  ]
  const data1 = [{
    heading: "No-shows fall noticeably", description: "With intelligent reminder sequences."
  }, {
    heading: "Patient satisfaction rises", description: "Because someone always answers—and actually helps."
  }, {
    heading: "Clinicians get their focus back", description: "Fewer interruptions, more time for medicine"
  }, {
    heading: "Revenue lifts", description: "Through fuller schedules, better utilization, and reactivated patients"
  },

  ]
  const data2 = [{
    heading: "Service awareness campaigns", description: "For new clinics, specialties, and services."
  }, {
    heading: "Targeted outreach", description: "To re-engage inactive patients and close care gaps."
  }, {
    heading: "Adherence and refills", description: "Reminders that keep care on track."
  }]
  const data3 = [{
    heading: "Medically informed conversations", description: "Handled with empathy and accuracy."
  }, {
    heading: "Deep local fluency", description: "Cultural nuance and communication styles built in"
  }, {
    heading: "Operational leverage, not overhead", description: "Strategic investment in retention and growth"
  }]
  const faqs = [{
    heading: "Arabic and English?", description: "Yes—multilingual reps with dialect personalization."
  }, {
    heading: "Launch timeline?", description: "A fast, low-risk rollout measured in weeks, not months."
  }, {
    heading: "Will this work with our systems?", description: "Yes— Any EHR/HIS, CRM, IVR, WhatsApp, and SMS."
  }, {
    heading: "Uptime?", description: "24/7/365 with enterprise-grade availability."
  }, {
    heading: "Compliance?",
    description: "Built with privacy and HIPPA compliance appropriate for healthcare environments."
  },

  ]

  return <div>
    <HeaderSection
      directionFromLeft={ true }
      backImg={ image2 }
      heading={ "Every Unanswered Call Is a Patient Choosing Your Competitor" }
      subheading={ <p>Your phone rings. Nobody answers. That patient books elsewhere—lifetime value & revenue gone
        because the front desk was busy.
        <span style={ {
          color: "var(--primary-color)",
          fontWeight: 550
        } }> Accelon Health’s medical contact center answers every time—multilingual, 24/7/365.</span></p> }
      buttonTitle={ "See Patient Experience in Action" }
    />
    <ContentImageBox backImg={ backImg } shaded={ true }>
      <div className={ "endToEndRcm" }>
        <h1>Your Patients Can’t Wait. Your Competitors Won’t.</h1>
        <p>As you read this, potential patients in your area are reaching out to providers. The ones who answer first
          win. The ones who don’t often lose them for good.
          Your front desk is slammed. Appointment requests stack up. Insurance questions interrupt clinical work.
          Follow-ups never happen. No-shows climb. Patient reviews start saying “hard to reach” more than “great
          care.”</p>
        <p> Your front desk is slammed. Appointment requests stack up. Insurance questions interrupt clinical work.
          Follow-ups never happen. No-shows climb. Patient reviews start saying “hard to reach” more than “great
          care.”</p>
        <p>Missed calls and long holds translate into lost bookings, late follow-ups, and preventable customer
          attrition. Whether you run a clinic, a retail, or a service operation, voice is still the trust channel.
          AccelonVoice makes it scalable.</p>
        <h5>
          Every missed call risk meaningful lifetime revenue. Multiply that by the calls you miss each week, and a
          material slice of annual revenue drifts to whoever simply picked up.
        </h5>
      </div>
    </ContentImageBox>
    <div style={ {
      backgroundColor: "rgba(28, 36, 96, .05 )",
      padding: "10px 0px 80px 0px"
    } }>
      <div className={ "marginFromTop" }/>
      <div className={ "contentWrapper" }>
        <CardComponent
          image={ image1 }
          heading={ <span style={ {
            color: "var(--primary-color)"
          } }>More Than a Call Center Your Frontline for Patient Care</span> }
          description={ <>
            <p>
              We set up a <span style={ {
              color: "var(--primary-color)"
            } }>niche, medically trained contact center</span> that operates as an extension of your brand and
              workflows—so patients get answers, and your teams get their time back.
            </p>
            <ul style={ { paddingLeft: "1.2rem" } }>
              <li>
                <strong>
                  Local, dedicated numbers
                </strong> and IVR tailored to your market.
              </li>
              <li>
                <strong>
                  Multilingual medical representatives</strong> for clinical and administrative calls.
              </li>
              <li>
                <strong>Seamless integration</strong> with your systems—natural extension of your brand and processes
              </li>
            </ul>
          </> }
          buttonText={ "Speak to a Solutions Expert" }
          index={ 0 }
        />
      </div>
    </div>
    <div className={ "marginFromTop" }/>

    <div className={ "contentWrapper" }>
      <div>
        <HeadingDescription
          heading={ <h1>Comprehensive Support. <span style={ {
            color: "var(--primary-color)"
          } }>Exceptional Experience.</span></h1> }
        />
        <Row gutter={ [24, 24] } className={"filledCards"} style={ { margin: "auto"
        } }>
          { data.map((card, index) => <Col xs={ 24 } md={ 12 }><CardsWOBg
            heading={ card.heading }
            description={ card.description }
            background={ true }
          /></Col>) }
        </Row>
      </div>
    </div>
    <div className={ "contentWrapper" }>
      <div className={ "centerEveryThing" }>
        <HeadingDescription
          heading={ <h1>What Happens When We Take Over <span style={ {
            color: "var(--primary-color)"
          } }>Patient Communication</span></h1> }
        />
        <Row gutter={ [24, 24] }>
          { data1.map((card, index) => <Col xs={ 24 } md={ 8 }><CardsWOBg
            heading={ card.heading }
            description={ card.description }
          /></Col>) }
        </Row>
        <div style={ {
          marginTop: "1rem"
        } }/>
        <ButtonComponent>
          Get Your Patient Communication Plan
        </ButtonComponent>
      </div>

      <div>
        <HeadingDescription
          heading={ <h1>From Patient Support to <span style={ {
            color: "var(--primary-color)"
          } }>Practice Growth</span></h1> }
          description={ "We don’t just answer calls—we fill your schedule." }
        />
        <Row gutter={ [24, 24] }>
          { data2.map((card, index) => <Col xs={ 24 } md={ 8 }><CardsWOBg
            heading={ card.heading }
            description={ card.description }
          /></Col>) }
        </Row>
      </div>

      <div className={ "centerEveryThing" }>
        <HeadingDescription
          heading={ <h1>The Accelon Difference <span style={ {
            color: "var(--primary-color)"
          } }>Expertise You Can Hear</span></h1> }
          description={ "We don’t just answer calls—we fill your schedule." }
        />
        <Row gutter={ [24, 24] }>
          { data3.map((card, index) => <Col xs={ 24 } md={ 8 }><CardsWOBg
            heading={ card.heading }
            description={ card.description }
          /></Col>) }
        </Row>
        <ButtonComponent>
          See Patient Experience in Action
        </ButtonComponent>
      </div>
      <div className={ "centerEveryThing" }>
        <HeadingDescription
          heading={ "FAQ's" }
        />
        <Row gutter={ [24, 24] }
             className={"filledCards"}
             style={ {
          margin: "auto"
        } }>
          { faqs.map((card, index) => <Col xs={ 24 } md={ 24 }>
            <CardsWOBg
              heading={ card.heading }
              description={ card.description }
              background={ true }
            />
          </Col>) }
        </Row>

        <div style={ {
          marginTop: "3rem"
        } }/>
        <ButtonComponent>
          See Patient Experience in Action
        </ButtonComponent>
      </div>
    </div>
    <div className={"marginFromTop" }/>
    <ContentBox>
      <div className={ "endToEndRcm" }>
        <i><h1>Stop Funding Your Competitors’ Growth</h1></i>
        <p>
          Every day without a professional patient communication layer, you’re handing momentum to competitors who
          answer faster. Or—you can let the team with proven cross-markets expertise handle it for you. </p>


        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "white" }
                         size={ "large" }

                         style={ {
                           height: "60px", backgroundColor: "white", marginTop: 60, color: "var(--primary-color)"
                         } }>Speak to a Solutions Expert</ButtonComponent>
      </div>
    </ContentBox>
  </div>
}

export default ContactCenter;