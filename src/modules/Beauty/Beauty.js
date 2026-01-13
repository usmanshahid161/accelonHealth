import { Col, Row, Image } from 'antd';
import React               from "react";
import "./Beauty.scss";
import ButtonComponent     from '../../components/button/Button';
import CardComponent       from '../../components/cardsComponents/cardsComponents';
import CardsWOBg           from '../../components/cardsWOBg/cardsWOBg';
import ContentBox          from '../../components/contentBox/contentBox';
import HeaderSection       from '../../components/header/HeaderSection';
import HeadingDescription  from '../../components/heading&description/heading&description';
import image1              from "./assets/unnamed (1).jpg";
import image2              from "./assets/unnamed (3).JPG";
import image3              from "./assets/unnamed (5).JPG";
import image4              from "./assets/unnamed (7).jpg";

const Beauty = () => {
  const data = [
    {
      heading: " 75-90% Conversion Rate Increase"
    },
    {
      heading: "~40% Reduction In Product Returns"
    },
    {
      heading: "Higher Basket size and repeat sales."
    },
    {
      heading: "Seconds, not minutes to integrate."
    }
  ]

  const data1 = [
    {
      heading: "Multilingual interface",
      description: "Supporting Arabic and English"
    },
    {
      heading: "Cultural customization",
      description: "For regional beauty preferences"
    },
    {
      heading: "Scalable from single stores",
      description: "To multi-location chains"
    },
    {
      heading: "Luxury-grade experience",
      description: "At accessible pricing"
    },
  ]

  const data2 = [
    {
      heading: "Plug-and-play setup ",
      description: "For growing beauty empires"
    },
    {
      heading: "No extra hardware",
      description: "Uses existing smart mirrors and tablets."
    },
    {
      heading: "Multi-store scalability",
      description: "Live in days, not months."
    }
  ]
  return <>
    <HeaderSection
      backImg={ image2 }
      heading={ <h1>Luxury Meets Intelligence. <span
        style={ { color: "var(--primary-color)" } }>Beauty Becomes Belief</span></h1> }
      subheading={ "Turn every mirror into a trusted advisor. AccelonBeauty blends AI diagnostics with AR try-on to deliver personalized purchase experiences and higher basket sizes—on smart mirrors and tablets, in-store or online." }
      buttonTitle={ "See AccelonBeauty Live" }
    />
    <div className={ "momentYouFeelContainer" }>
      <div className={ "left" }>
        <ContentBox>
          <h1>The Empty Aisle Problem Every Retailer Faces</h1>
          <p>Customers leave unsure. Returns stack up. Loyalty fades. In markets from Riyadh to Cairo to Dubai, beauty
            retail faces the same challenge: how to make every customer feel uniquely understood.</p>

          <p className={ "marginFromTop" }>
            We asked a better question: <strong>What if your store could become each customer's personal beauty
            advisor?</strong>
          </p>
        </ContentBox>
      </div>
      <div className={ "right" }>
        <Image preview={ false } src={ `${ image3 }` } style={ {
          height: 600,
          width: "100%",
        } }/>
      </div>
    </div>
    <div style={ {
      backgroundColor: "rgba(28, 36, 96, .05 )"
    } }>
      <div className={ "contentWrapper" }>
        <div>
          <div className={ "marginFromTop" }/>
          <HeadingDescription
            heading={ <h1>Two Technologies, <span style={ { color: "var(--primary-color)" } }>One Transformative Experience</span>
            </h1> }
          />
          <CardComponent
            image={ image4 }
            heading={ <h1>AI Facial Skin Analysis — Science, <span style={ { color: "var(--primary-color)" } }>Not Guesswork</span>
            </h1> }
            description={
              <>
                <ul style={ { paddingLeft: "1.2rem" } }>
                  <li>
                    <strong>
                      Instant diagnostics
                    </strong> scan for 10+ skin concerns—pore visibility, hydration cues, texture and more.
                  </li>
                  <li>
                    <strong>
                      Personalized product pathways</strong> aligned to each profile to move customers from “maybe” to
                    “mine.”
                  </li>
                  <li>
                    <strong>Omni-journey continuity</strong> start at a smart mirror, continue on tablet—keep the
                    routine,
                    keep
                    the sale.
                  </li>
                  <li>
                    Impact you can feel: higher trust → higher AOV and repeat visits.
                  </li>
                </ul>
              </>
            }
            index={ 0 }
          />
          <div className={ "marginFromTop" }/>
          <CardComponent
            image={ image1 }
            heading={ <h1>AR Virtual Try-On — <span
              style={ { color: "var(--primary-color)" } }>See It. Love It. Buy It.</span></h1> }
            description={
              <>
                <ul style={ { paddingLeft: "1.2rem" } }>
                  <li>
                    <strong>
                      Live try-on
                    </strong> for makeup, jewelry, glasses & more—no mess, all wow.
                  </li>
                  <li>
                    <strong>
                      Confident purchases</strong> reduce hesitation and cut returns.
                  </li>
                  <li>
                    <strong>Built for premium spaces</strong> elegant on smart mirrors and tablets.
                  </li>
                </ul>
              </>
            }
            index={ 0 }
          />
        </div>
      </div>
    </div>
    <div className={ "marginFromTop" }/>

    <div className={ "contentWrapper" }>
      <div>
        <HeadingDescription
          heading={ <h1>Beauty Retail Solutions That Adds <span style={ { color: "var(--primary-color)" } }>Zero Complexity, Only Results</span>
          </h1> }
        />

        <Row gutter={ [24, 24] }>
          {
            data.map((item, index) => <Col xs={ 24 } md={ 6 }><CardsWOBg heading={ item.heading }/></Col>)
          }
        </Row>
      </div>
    </div>
    <div className={ "marginFromTop" }/>

    <div style={ {
      backgroundColor: "rgba(28, 36, 96, .1)"
    } }>
      <div className={ "contentWrapper" } style={ {
        gap: 0
      } }>
        <HeadingDescription
          heading={ <h1>More Than Technology A <span
            style={ { color: "var(--primary-color)" } }>Retail Revolution</span></h1> }
          description={ "AccelonBeauty understands that beauty retail demands both technological sophistication and cultural nuance." }
        />

        <Row gutter={ [24, 24] }>
          {
            data1.map((item, index) => <Col xs={ 24 } md={ 6 }><CardsWOBg
              heading={ item.heading }
              description={ item.description }
            /></Col>)
          }
        </Row>
        <div className={ "marginFromTop" }/>
      </div>
    </div>
    <div className={ "marginFromTop" }/>

    <div className={ "contentWrapper" }>
      <div>
        <HeadingDescription
          heading={ "Beauty Tech That Works as Hard as You Do" }
        />

        <Row gutter={ [24, 24] }>
          {
            data2.map((item, index) => <Col xs={ 24 } md={ 8 }><CardsWOBg
              heading={ item.heading }
              description={ item.description }
            /></Col>)
          }
        </Row>
      </div>
    </div>
    <div className={ "marginFromTop" }/>
    <ContentBox>
      <div className={ "endToEndRcm" } style={ {
        marginTop: 0,
      } }>
        <i><h1>Ready to Transform Every Customer Visit into a Signature Beauty Experience?</h1></i>
        <h2>
          Put AI confidence and AR magic in front of every customer. AccelonBeauty makes your retail or clinic the place
          where beauty feels certain.
        </h2>
        <ButtonComponent className={ "endToEndRcmBtn" }
                         color={ "white" }
                         size={ "large" }
                         style={ {
                           height: "60px",
                           backgroundColor: "white",
                           marginTop: 50,
                           color: "var(--primary-color)"
                         } }>Schedule Your AccelonBeauty Demo</ButtonComponent>
      </div>
    </ContentBox>
  </>
}

export default Beauty;