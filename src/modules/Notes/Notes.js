import { Col, Row }       from 'antd';
import React              from 'react';
import "./Notes.scss";
import ButtonComponent    from '../../components/button/Button';
import CardComponent      from '../../components/cardsComponents/cardsComponents';
import CardsWOBg          from '../../components/cardsWOBg/cardsWOBg';
import ContentImageBox    from '../../components/ContentImageBox/ContentImageBox';
import HeaderSection      from '../../components/header/HeaderSection';
import backImg            from '../../assets/images/herosection.png';
import HeadingDescription from '../../components/heading&description/heading&description';
import image1             from "./assets/unnamed.jpg";
import image2             from "./assets/unnamed (1).jpg";

const Notes = () => {
  const data = [
    {
      heading: "Pre Visit Abstract : Walk In Already Prepared",
      description: "Automatically summarizes patient history and records before the visit letting you understand the full context from the first handshake, enabling more personalized and efficient care."
    },
    {
      heading: "Full Visit Transcription & Generation : Every Word Captured, Every Detail Perfected",
      description: "Conversation and physician dictation are captured with clinical nuance (Arabic dialects, English, and 20+ languages), then drafted into comprehensive notes with clear sections (HPI, ROS, PE, A/P, orders)."
    },
    {
      heading: " Seamless HIS Integration : Notes Where You Work",
      description: "Generated documentation populates directly into your EMR/HIS, aligned with regulatory and coding standards."
    },
    {
      heading: "Human in the Loop : Your Judgment, Preserved",
      description: "Review & sign. Smart highlights flag gaps and required-field enforce minimum data set completeness—no save/submit until mandatory fields are complete."
    }
  ]

  const data2 = [
    {
      heading: "Physicians reclaim 2+ hours daily",
      description: "See 20-30% more patients with the same team. Or let them leave on time once."
    },
    {
      heading: "Insurance approvals accelerate",
      description: "Submitting complete documentation instantly means pre-authorizations are approved 40% faster."
    },
    {
      heading: "Coding accuracy jump",
      description: "Notes capture clinical specificity that supports proper coding, reducing denials and maximizing reimbursement."
    },
    {
      heading: "Lower burnout, higher satisfaction",
      description: "Clinicians practice medicine, not paperwork."
    }
  ]

  const data3 = [
    {
      heading: "Clinical Intelligence",
      description: "Recognizes 1,000+ medical entities and clinical terminology."
    },
    {
      heading: "Compliance Ready",
      description: "Aligns with HIPAA & global healthcare standards."
    },
    {
      heading: "Multilingual Mastery",
      description: "Fluent in Arabic Dialects , English & 20+ languages."
    },
    {
      heading: "Seamless Integration",
      description: "Works within your existing EHR/HIS infrastructure"
    }
  ]

  return <div className={ "notesContainer" }>
    <HeaderSection
      backImg={ image2 }
      heading={ <h1>Your Physicians Spend <span style={ { color: "var(--primary-color)" } }>Their Day Writing Notes. We End That.</span>
      </h1> }
      subheading={ "Imagine finishing each visit with documentation already done. AccelonNotes transforms real conversations into structured, accurate medical notes—freeing hours of clinician time and restoring focus to care." }
      buttonTitle={ "Reclaim Your Time" }
      directionFromLeft={ true }
    />

    <ContentImageBox backImg={ backImg } shaded={ true }>
      <div className={ "endToEndRcm" }>
        <h1>The Invisible Cost of Clinical Documentation</h1>
        <p>While you want to focus on patient care, clinical documentation steals your time, energy, and focus leading
          to burnout, inconsistencies, and delayed insurance approvals. But what if your notes wrote themselves, with
          perfect accuracy and compliance?</p>
        <h5 style={ {
          marginTop: 60
        } }>We turn documentation from a burden into an operating advantage.</h5>
        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "white" }
                         size={ "large" }
                         style={ {
                           height: "60px",
                           backgroundColor: "white",
                           marginTop: 60,
                           color: "var(--primary-color)"
                         } }>Reclaim Your Time</ButtonComponent>
      </div>
    </ContentImageBox>

    <div className={ "contentWrapper" }>

      <div>
        <HeadingDescription
          heading={ <h1>Conversation In. <span style={ { color: "var(--primary-color)" } }>Perfect Notes Out. Zero Effort.</span>
          </h1> }
          description={ "AccelonNotes slips into your day as a silent, reliable partner—capturing, structuring, and syncing the clinical story." }/>
        <Row gutter={ [24, 24] } className={ "filledCards" } style={ {
          margin: "auto"
        } }>
          {
            data.map((item, index) => <Col xs={ 24 } md={ 12 }>
                <CardsWOBg heading={ item.heading }
                           description={ item.description }
                           background={ true }/>
              </Col>
            )
          }
        </Row>
      </div>

      <div>
        <HeadingDescription heading={ <h1>More Than Time Saved—Care, <span style={ { color: "var(--primary-color)" } }>Cash flow, and Calm</span>
        </h1> }/>
        <Row gutter={ [24, 24] } style={ {
          width: "90%",
          margin: "auto"
        } }>
          {
            data2.map((item, index) => <Col xs={ 24 } md={ 6 }>
                <CardsWOBg heading={ item.heading }
                           description={ item.description }/>
              </Col>
            )
          }
        </Row>
      </div>

      <div>
        <HeadingDescription
          heading={ <h1>Built for Healthcare, <span style={ { color: "var(--primary-color)" } }>Powered by AI</span>
          </h1> }
          description={ "Unlike generic transcription tools, AccelonNotes understands healthcare’s unique needs" }
        />
        <Row gutter={ [24, 24] } style={ {
          width: "90%",
          margin: "auto"
        } }>
          {
            data3.map((item, index) => <Col xs={ 24 } md={ 6 }>
                <CardsWOBg heading={ item.heading }
                           description={ item.description }/>
              </Col>
            )
          }
        </Row>
      </div>

      <div style={ {
        width: "90%",
        margin: "auto",
        padding: "80px 0px"
      } }>
        <CardComponent
          heading={ <h1>Stop Paying <span style={ { color: "var(--primary-color)" } }>Doctors to Be Typists</span>
          </h1> }
          description={ "Every hour spent on clinical notes is an hour not spent on patient care. Give your clinicians their day back—and give your operations cleaner claims and faster approvals" }
          image={ image1 }
          index={ 0 }
          buttonText={ "Schedule Your AccelonNotes Demo" }
          buttonStyle={ {
            background: "linear-gradient(to right, #1C2460, #0077C7)",
            width: "100%",
            height: 60
          } }
        />
      </div>
    </div>
  </div>
}

export default Notes;