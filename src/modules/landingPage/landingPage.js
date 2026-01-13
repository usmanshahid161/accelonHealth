import { Image }          from 'antd';
import React              from 'react';
import ButtonComponent    from '../../components/button/Button';
import CardComponent      from '../../components/cardsComponents/cardsComponents';
import CardsWOBg          from '../../components/cardsWOBg/cardsWOBg';
import ContentBox         from '../../components/contentBox/contentBox';
import ContentImageBox    from '../../components/ContentImageBox/ContentImageBox';
import HeadingDescription from '../../components/heading&description/heading&description';
import LongButton         from '../../components/longButton/LongButton';
import ContactUs          from './ContactUs/ContactUs';
import HeroSection        from './heroSection/heroSection';
import "./landingPage.scss";
import one                from "../../assets/images/One.png";
import two                from "../../assets/images/two.png";
import three              from "../../assets/images/three.png";
import four               from "../../assets/images/four.png";
import five               from "../../assets/images/five.png";
import six                from "../../assets/images/six.png";
import seven              from "../../assets/images/seven.png";
import eight              from "../../assets/images/eight.png";
import nine               from "../../assets/images/nine.png";
import ten                from "../../assets/images/10.png";
import eleven             from "../../assets/images/11.png";
import twelve             from "../../assets/images/12.png";
import thirteen           from "../../assets/images/13.png";
import fourteen           from "../../assets/images/14.png";
import fifteen            from "../../assets/images/15.png";
import sixteen            from "../../assets/images/16.png";
import contentImg         from "../../assets/images/ContentImageBg.png";
import image1             from "./assets/Profit Killer.png"
import image2             from "./assets/2 1.jpg"
import image3             from "./assets/3 1.jpg"
import successImage       from "./assets/Celebrated Success.PNG";
import LogoSlider         from './logoWrapper/LogoWrapper';

const LandingPage = () => {
  const cardsData = [
    {
      heading: <h1>
        Every Healthcare Provider Faces the Same Invisible{ " " }
        <span style={ { color: "var(--primary-color)" } }>
    Profit Killer
  </span>
      </h1>
      ,
      description: "You’re not losing money for lack of patients—you’re losing it to a payment ecosystem of delays, denials, and administrative drag. From Riyadh to Dubai, Cairo to New York, the pattern is universal: administrative work expands, denials persist, revenue turns uncertain. Different markets—one revenue choke point. We cut it loose.",
      image: image1
    },
    {
      heading: <h1> The Accelon Difference: Beyond Ordinary. <span style={ { color: "var(--primary-color)" } }>An Operational DNA.</span>
      </h1>
      ,
      description: "RCM has long been fragmented with uncertain returns. We ended that. Accelon Health installs a seamless revenue engine—not a cost center, but the operating backbone that sharpens efficiency, lifts net collections, and accelerates profitability. You’re not paying for another service. You’re investing in guaranteed operational transformation.",
      image: image2
    },
    {
      heading: <h1>The Accelon <span style={ { color: "var(--primary-color)" } }>Healthcare Engine</span></h1>
      ,
      description: "Our operating framework isn’t static; it’s a living ecosystem built to scale. It adapts and expands with you—whether you’re a single clinic optimizing flow or a multi-region network pursuing global ambitions.",
      image: image3
    }

  ]
  const quiteAutomation = [
    {
      heading: "AccelonNote",
      description: "Faster clinical notes and pre-visit abstracts with zero disruption to patient care."
    },
    {
      heading: "AccelonCode",
      description: "Autonomous coding at 95%+ accuracy, delivering consistent, 1000x faster turnarounds."
    },
    {
      heading: "AccelonAudit",
      description: "Re-submission checks that prevent rejections before they happen."
    },
    {
      heading: "AccelonVoice",
      description: "24/7 patient communication automation in Arabic/English across 20+ dialects."
    },

  ]
  const whyUs = [
    {
      heading: "Born Native. Built for Scale",
      description: "Our teams live and breathe the regulatory landscapes of the MENA region and key global markets. We have deep knowledge of every local payer’s rule, ensuring every claim is compliant by design. This multinational expertise is baked into everything we do."
    },
    {
      heading: "We Drive Financial Thrive, Not Just Operational Survival.",
      description: "Our goal is to make you more profitable. We are never an added cost. Our model is built on delivering a clear, measurable ROI—higher collections, reduced administrative hassle, and significant cost savings. We measure success in your gains."
    },
    {
      heading: `The Power of "And": Deep Expertise AND Cutting-Edge Tech.`,
      description: "You don’t have to choose between a seasoned consulting or BPO firm and a flashy AI startup. Accelon Health delivers both. Our certified RCM team are empowered by our proprietary AI, creating an unbeatable combination of expertise and unmatched speed."
    }

  ]
  const logos = [
    one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve
  ]

  const secondLogos = [
    thirteen, fourteen, fifteen, sixteen
  ]
  return <div className="landingPageContainer">

    <HeroSection/>

    <div className={ "contentWrapper" } style={ {
      marginTop: 80,
      marginBottom: 80
    } }>
      <div className={ "cardComponentContainer" }>
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

    <ContentBox>
      <div className={ "endToEndRcm" }>
        <h5>The Heartbeat of Your Revenue</h5>
        <h1>End-to-End RCM</h1>
        <p>Most vendors handle pieces of the puzzle. We run the whole board—end to end, from first appointment to cash
          in bank. Our all-inclusive RCM outsourcing works across the entire flow: patient scheduling and real-time
          eligibility, precision medical coding, pre-submission auditing and clean claim submission, payment
          reconciliation, and denial recovery.</p>

        <div className={ "numbers" }>
          <div>
            <h3>99+</h3>
            <p>Clean Claims</p>
          </div>

          <div>
            <h3>95%+</h3>
            <p>Net Collections</p>
          </div>

          <div>
            <h3>40–50%</h3>
            <p>Reduction in A/R</p>
          </div>
        </div>

        <i>These are real operational results from field deployments — not hypothetical projections.</i>
      </div>
    </ContentBox>

    <ContentImageBox backImg={ contentImg }>
      <div className={ "endToEndRcm" }>
        <h1 style={ {
          color: "var(--primary-text-color)"
        } }>Strategic Consulting for <span
          style={ { color: "var(--primary-color)" } }> Compliance & Operational Growth</span>
        </h1>
        <p style={ {
          color: "var(--secondary-text-color)",
          fontWeight: 400
        } }>Navigate accreditation and compliance with confidence. Our consultants deliver gap analyses, CDI training,
          and RCM improvement programs tailored to local payer rules and regulatory bodies across your markets—so
          operational excellence becomes a habit, not a milestone.</p>
      </div>
    </ContentImageBox>

    <div className={ "contentWrapper" }>
      <div>
        <HeadingDescription
          heading={ <h1>Quiet Automation, <span style={ { color: "var(--primary-color)" } }>Loud Results</span></h1> }
          description={ "Invisible, on-purpose automation that lifts every workflow" }/>
        <div className={ "quiteAutomationContainer" }>
          {
            quiteAutomation.map(item => <CardsWOBg heading={ item?.heading } description={ item?.description }/>)
          }
        </div>
        <div style={ {
          color: "#008925",
          backgroundColor: "#BFFFE1",
          borderRadius: 10,
          margin: "auto",
          padding: "10px",
          width: "fit-content",
          marginTop: 60
        } }>
          Clinicians lead. Autopilot Automation powers performance.
        </div>
        <LongButton text={"Which solution fits your operation?"} buttonTitle={"Find Out Now"}/>
      </div>
    </div>

    <div className={ "marginFromTop" }/>
    <ContactUs/>
    <div className={ "marginFromTop" }/>
    <div className={ "contentWrapper" } style={ {
      marginBottom: 80
    } }>
      <div>
        <HeadingDescription heading={ <h1>Why Leading Providers Choose <span
          style={ { color: "var(--primary-color)" } }>Accelon Health?</span>
        </h1> }/>
        <div className={ "quiteAutomationContainer" } style={ {
          justifyContent: "center"
        } }>
          {
            whyUs.map(item => <CardsWOBg background={ true } heading={ item?.heading }
                                         description={ item?.description }/>
            )
          }
        </div>
      </div>

      <CardComponent
        heading={ <h1>From Operational Headaches to <span style={ { color: "var(--primary-color)" } }>Celebrated Successes</span>
        </h1> }
        description={ <div>A leading polyclinic in Riyadh was struggling with over 40% claim rejections and stagnant
          revenue. Within months of partnering with Accelon Health, they saw a 25% monthly revenue uplift and a 50%
          reduction in backlog. Staff workload eased; patient access improved.
          <div>
            <br/>
            <b style={ {
              color: "var(--primary-text-color)",
              fontWeight: 500,
            } }>Benchmarks We Deliver:</b>
            <ul style={ {
              color: "var(--primary-text-color)",
              fontWeight: 500,
            } }>
              <li>Net Collection Rate: 95%+</li>
              <li>Clean Claim Ratio: 99%+</li>
              <li>Monthly Revenue Increase: ~25%+</li>
            </ul>
          </div>
        </div>
        }
        image={ successImage }
        index={ 0 }
      />


      <div>
        <HeadingDescription
          heading={ <h1>Experience <span style={ { color: "var(--primary-color)" } }>Across Borders</span></h1> }/>
        <div className={ "logos" }>
          {
            logos.map(item => <Image preview={ false } src={ item } style={ {
              backgroundSize: "cover",
              padding: "10px",
            } }/>)
          }
        </div>

        {/*<LogoSlider/>*/ }
      </div>
      <div>
        <HeadingDescription heading={ <h1>Powered By Innovation <span style={ { color: "var(--primary-color)" } }>Backed By Compliance</span>
        </h1> }/>
        <div className={ "logos" }>
          {
            secondLogos.map(item => <Image preview={ false } src={ item } style={ {
              backgroundSize: "cover",
              padding: "10px",
            } }/>)
          }
        </div>
      </div>

    </div>

    <ContentBox>
      <div className={ "endToEndRcm" }>
        <h1><i>Ready to Leap Beyond Limits of Traditional Healthcare Operations?</i></h1>
        <h2>
          Stop settling for incremental fixes. Build the engine—once and for all.
        </h2>
        <p>Your teams and patients will feel the difference immediately.</p>

        <ButtonComponent className={ "endToEndRcmBtn" }
                         size={ "large" }
                         color={ "rgba(255,255,255,.2)" }
                         style={ {
                           marginTop: 100
                         } }>Speak with Our Solutions Team Today</ButtonComponent>
        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "white" }
                         size={ "large" }
                         style={ {
                           marginTop: 10,
                           color: "var(--primary-color)"
                         } }>Book Your Free Operational Health Scan</ButtonComponent>
      </div>
    </ContentBox>
  </div>
}

export default LandingPage;