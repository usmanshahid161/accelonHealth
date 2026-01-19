import React              from 'react';
import ButtonComponent    from '../../components/button/Button';
import CardComponent      from '../../components/cardsComponents/cardsComponents';
import ContentBox         from '../../components/contentBox/contentBox';
import ContentImageBox    from '../../components/ContentImageBox/ContentImageBox';
import HeaderSection      from '../../components/header/HeaderSection';
import "./voice.scss";
import HeadingDescription from '../../components/heading&description/heading&description';
import image1             from "./assets/b1fe4ac6-b361-4a43-ae6b-f1961b90258d.PNG";
import image2             from "./assets/unnamed (7).JPG"
import image3             from "./assets/d3823ad9-9ddd-4830-93f1-eaa66d0af869.jpg"
import image4             from "./assets/unnamed (9).JPG"

const Voice = () => {
  return <div className={ "voiceContainer" }>
    <HeaderSection
      heading={ <h1>Your Clients Prefer to Talk. <span style={ { color: "var(--primary-color)" } }>Now Your Business Can Listen—24/7.</span>
      </h1> }
      subheading={ <div className="voice-content">
        <p className="stat-line">
          <strong className="highlight">70%</strong> of customers and patients still prefer
          voice over apps or chat.
        </p>

        <p className="description">
          <strong>AccelonVoice</strong> picks up every time, understands Arabic and
          English dialects, books and confirms, follows up, and hands off complex
          issues to your team—
          <strong>day or night.</strong>
        </p>
      </div>
      }
      buttonTitle={ "Experience AccelonVoice" }
      backImg={ image3 }
      directionFromLeft={ true }
    />

    <ContentImageBox shaded={ true }>
      <div className={ "endToEndRcm" }>
        <h1>The Communication Gap</h1>
        <p>Silence Costs Revenue. We Bring Back the Voice.</p>
        <p>Missed calls and long holds translate into lost bookings, late follow-ups, and preventable customer
          attrition. Whether you run a clinic, a retail, or a service operation, voice is still the trust channel.
          AccelonVoice makes it scalable.</p>

        <ul style={ {
          marginTop: 40,
          fontWeight: 500,
          fontSize: 24,
        } }>
          <li>Unanswered calls → lost appointments and sales</li>
          <li>Repetitive queries → front-desk fatigue and higher costs</li>
          <li>Weak follow-through → no-shows and low satisfaction</li>
        </ul>
      </div>
    </ContentImageBox>
    <ContentImageBox>
      <div className={ "endToEndRcm" } style={ {
        color: "var(--primary-text-color)"
      } }>
        <h1>Fluent in <span style={ { color: "var(--primary-color)" } }>Business</span>, Fluent in <span
          style={ { color: "var(--primary-color)" } }>Culture</span>
        </h1>
        <p style={ {
          fontSize: "3rem",
          fontWeight: 500,
          color: "var(--primary-color)",
        } }>Your 24/7 Multilingual Partner</p>
        <p style={ {
          fontWeight: 500,
        } }>Hears the words, understands the meaning—intent, tone, urgency across Arabic dialects and English.</p>

        <div className={ "fluent" }>
          <p>
            <strong>Dialect personalization</strong> → higher engagement and fewer hang-ups
          </p>
          <p>
            <strong>Adaptive script engine</strong> → fewer escalations as the agent learns in real time
          </p>
          <p>
            <strong>Auto-logging + EHR/CRM sync</strong> → dramatically reduced admin time
          </p>
          <p>
            <strong>Predictive routing</strong> → faster answers, happier callers
          </p>
          <p>
            <strong>Elastic availability</strong> → zero wait time, scales with demand
          </p>
        </div>


      </div>
    </ContentImageBox>

    <div style={ {
      backgroundColor: "rgba(28, 36, 96, .05 )"
    } }>
      <div className={ "contentWrapper" } style={ {
        paddingTop:80
      } }>
        <div>
          <HeadingDescription
            heading={ <h1><span style={ { color: "var(--primary-color)" } }>Cross-Industry Use Cases</span></h1> }
          />
          <CardComponent
            heading={ <h1><span style={ { color: "var(--primary-color)" } }>Healthcare</span></h1> }
            description={ <ul className={ "voiceUl" }>
              <li>
                <strong>Appointment scheduling & confirmations</strong> reclaim missed visits.
              </li>
              <li>
                <strong>Medication adherence & refills</strong> personalized reminders that lift satisfaction and
                adherence.
              </li>
              <li>
                <strong>Insurance & authorization updates</strong> handle repetitive status checks and questions, easing
                staff load.
              </li>
              <li>
                <strong>Post-visit check-ins</strong> empathetic follow-through that builds loyalty and strengthens
                continuity.
              </li>
            </ul>
            }
            image={ image2 }
            index={ 0 }
          />
        </div>
        <CardComponent
          heading={ <h1><span style={ { color: "var(--primary-color)" } }>Service & Retail</span></h1> }
          description={ <ul className={ "voiceUl" }>
            <li>
              <strong>Customer service & inquiry lines</strong> instant answers, fewer queues
            </li>
            <li>
              <strong>Order & delivery notifications</strong> proactive voice call updates.
            </li>
            <li>
              <strong>IPayment & subscription reminders</strong> reduced attrition and late payments
            </li>
            <li>
              <strong>Public Services</strong> automated citizen hotlines and emergency alerts
            </li>
          </ul>
          }
          image={ image1 }
          index={ 0 }
        />
      </div>
    </div>

    <div className={ "marginFromTop" }/>

    <div className={ "contentWrapper" }>
      <CardComponent
        heading={ "Why AccelonVoice Feels Like Part of Your Team" }
        description={ <div>
          <p>Technology That Serves With Empathy</p>
          <p style={ {
            color: "var(--primary-text-color)",
            fontSize: "1rem"
          } }>While others can sell automation, we deliver empathy at scale. AccelonVoice extends your team’s capacity
            without sacrificing the human touch.</p>
          <br/>
          <p style={ {
            color: "var(--primary-text-color)",
            fontWeight: 500,
          } }>
            ✅ 2–4-week plug-and-play implementation <br/> ✅ Omnichannel integration (EHR, CRM, WhatsApp, SMS) <br/> ✅
            ISO 27001 & HIPPAA compliance <br/> ✅ 99.5% SLA uptime <br/> ✅ 9× ROI in 3 months, 50% cost savings
          </p>
        </div> }
        image={ image4 }
        index={ 0 }
      />
    </div>
    <div className={ "marginFromTop" }/>

    <ContentBox>
      <div className={ "endToEndRcm" }>
        <i><h1>Answer Every Moment. With Zero Wait.</h1></i>
        <p>
          When people feel heard, they choose you. AccelonVoice keeps lines open, calendars full, and teams calm—across
          healthcare and beyond.
        </p>


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

export default Voice;