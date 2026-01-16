import { Image, Row, Col } from 'antd';
import React               from 'react';
import "./code.scss";
import ButtonComponent     from '../../components/button/Button';
import CardsWOBg           from '../../components/cardsWOBg/cardsWOBg';
import ContentBox          from '../../components/contentBox/contentBox';
import HeaderSection       from '../../components/header/HeaderSection';
import HeadingDescription  from '../../components/heading&description/heading&description';
import CodingMetrics       from './CodingMatrix/CodingMatrix';
import image1              from "./assets/db5b08d6-1d4d-467a-8465-cf18a62a1986 (1).png";
import image2              from "./assets/unnamed (11).JPG";

const Code = () => {
  const data = [
    {
      heading: "Zero Human Intervention, Maximum Accuracy",
      description: "95%+ accuracy with up to 1000x as agreed faster turnaround. 85%+ of charts are auto coded with zero manual review needed."
    },
    {
      heading: "Built for Your Region, Ready for the World",
      description: "1. Pre-loaded with ICD-10-AM/CM, SBS, CPT/HCPCS coding guidelines. Fully aligned to CMS, NPHIES & global requirements."
    },
    {
      heading: "Full Specialty Coverage",
      description: "From outpatient encounters to inpatient stays—ready from day one."
    }
  ]

  const partnership = [
    {
      heading: "125M+ medical records",
      description: "Used in training our top-notch models"
    },
    {
      heading: "Compliance built-in",
      description: "Saudi & U.S. coding standards, HIPAA compliant"
    },
    {
      heading: "Plug & play integration",
      description: "With all HIS/EHRs"
    },
    {
      heading: "Continuous learning",
      description: "Supervised by certified coders and clinical experts."
    }
  ]
  return <div className="codeContainer">
    <HeaderSection
      backImg={ image2 }
      heading={ <h1>Medical Coding That Never Sleeps. <span style={ { color: "var(--primary-color)" } }>Accuracy You Can Trust</span>
      </h1> }
      subheading={ <p>Charts coded in seconds—clean, consistent, and compliant with ICD-10, CPT, and regional payer rules—so your experts can focus on the toughest cases. AccelonCode turns clinical documentation into revenue-ready codes, 24/7, across <strong> KSA/GCC, Egypt, the U.S., and beyond.</strong></p> }
      buttonTitle={ "Start Autonomous Medical Coding" }
    />

    <div className={ "momentYouFeelContainer" }>
      <div className={ "left" }>
        <ContentBox style={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "space-around",
        }}>
          <div>
          <h1 style={{
            paddingTop: 0
          }}>The Moment You Feel the Shift</h1>
          <p style={ {
            color: "#D8D8D8"
          } }>Backlogs stop breathing down your neck. Rejections stop ping-ponging. Cash stops waiting for medical
            coding
            delays.</p>
          </div>
          <div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 550
          }}>The work doesn’t get louder—it gets cleaner.</h3>
          <h5>That’s the AccelonCode effect.</h5>
          </div>
        </ContentBox>
      </div>
      <div className={ "right" }>
        <Image preview={ false } src={ `${ image1 }` } style={ {
          height: 600,
          width: "100%",
        } }/>
      </div>
    </div>
    <div className={ "marginFromTop" }/>

    <div className={ "contentWrapper" }>
      <div>
        <HeadingDescription
          heading={ <h1>Accuracy Shaped by Healthcare Experts. <span style={ { color: "var(--primary-color)" } }>Speed Scaled by AI</span>
          </h1> }
          description={ "AccelonCode blends deep healthcare expertise with cutting-edge AI—so routine charts code themselves and your team handles exceptions." }/>
        <Row gutter={ [24, 24] }>
          {
            data.map((item) => <Col xs={ 24 } md={ 8 }>
                <CardsWOBg heading={ item.heading }
                           description={ item.description }
                           background={ true }/>
              </Col>
            )
          }
        </Row>
      </div>
      <CodingMetrics/>

      <div>
        <HeadingDescription
          heading={ <h1>More Than AI—A <span style={ { color: "var(--primary-color)" } }>Partnership in Precision</span>
          </h1> }/>
        <Row gutter={ [24, 24] }>
          {
            partnership.map((item) => <Col xs={ 24 } md={ 6 }><CardsWOBg heading={ item.heading }
                                                                         description={ item.description }/></Col>)
          }
        </Row>
      </div>
    </div>
    <div className={ "marginFromTop" }/>
    <ContentBox>
      <div className={ "endToEndRcm" } style={ {
        marginTop: 0,
      } }>
        <i><h1>Ready to Code at the Speed of Thought?</h1></i>
        <p>
          Every day a claim sits in coding is a day you're voluntarily delaying your own cash flow. Every coding error
          is revenue you'll fight for months to recover, if you recover it at all.
        </p>
        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "white" }
                         size={ "large" }
                         style={ {
                           height: "60px",
                           backgroundColor: "white",
                           marginTop: 50,
                           color: "var(--primary-color)"
                         } }>Schedule Your AccelonCode Demo </ButtonComponent>
      </div>
    </ContentBox>

  </div>
}

export default Code;