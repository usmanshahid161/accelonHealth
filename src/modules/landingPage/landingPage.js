import { Image }          from 'antd';
import React              from 'react';
import { useTranslation } from 'react-i18next';
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
import thirteen           from "../../assets/images/13.png";
import fourteen           from "../../assets/images/14.png";
import fifteen            from "../../assets/images/15.png";
import sixteen            from "../../assets/images/16.png";
import contentImg         from "../../assets/images/ContentImageBg.png";
import image1             from "./assets/Profit Killer.png";
import image2             from "./assets/2 1.jpg";
import image3             from "./assets/3 1.jpg";
import successImage       from "./assets/Celebrated Success.PNG";
import LogoSlider         from './logoWrapper/LogoWrapper';
import Counter            from '../../components/Counter/Counter';

const LandingPage = () => {
  const { t } = useTranslation();

  const cardsData = [
    {
      heading: (
        <h1>
          { t('landingPage.cards.card1_headingPart1') }{ ' ' }
          <span style={ { color: 'var(--primary-color)' } }>
            { t('landingPage.cards.card1_headingPart2') }
          </span>
        </h1>
      ),
      description: t('landingPage.cards.card1_description'),
      image: image1
    },
    {
      heading: (
        <h1>
          { t('landingPage.cards.card2_headingPart1') }{ ' ' }
          <span style={ { color: 'var(--primary-color)' } }>
            { t('landingPage.cards.card2_headingPart2') }
          </span>
        </h1>
      ),
      description: t('landingPage.cards.card2_description'),
      image: image2
    },
    {
      heading: (
        <h1>
          { t('landingPage.cards.card3_headingPart1') }{ ' ' }
          <span style={ { color: 'var(--primary-color)' } }>
            { t('landingPage.cards.card3_headingPart2') }
          </span>
        </h1>
      ),
      description: t('landingPage.cards.card3_description'),
      image: image3
    }
  ];

  const quiteAutomation = [
    {
      heading: t('landingPage.quietAutomation.heading1'),
      description: t('landingPage.quietAutomation.description1')
    },
    {
      heading: t('landingPage.quietAutomation.heading2'),
      description: t('landingPage.quietAutomation.description2')
    },
    {
      heading: t('landingPage.quietAutomation.heading3'),
      description: t('landingPage.quietAutomation.description3')
    },
    {
      heading: t('landingPage.quietAutomation.heading4'),
      description: t('landingPage.quietAutomation.description4')
    }
  ];

  const whyUs = [
    {
      heading: t('landingPage.whyUs.heading1'),
      description: t('landingPage.whyUs.description1')
    },
    {
      heading: t('landingPage.whyUs.heading2'),
      description: t('landingPage.whyUs.description2')
    },
    {
      heading: t('landingPage.whyUs.heading3'),
      description: t('landingPage.whyUs.description3')
    }
  ];

  const secondLogos = [
    { img: thirteen, link: "https://www.chi.gov.sa/en/Pages/home.aspx" },
    { img: fourteen, link: "https://nphies.sa/" },
    { img: fifteen, link: "https://www.aapc.com/?srsltid=AfmBOopSBbzNO1JcndX0YdmWBWaVtbhDi7O0itN8qslx8os21_Oqh0vP" },
    { img: sixteen, link: "https://www.hhs.gov/hipaa/index.html" }
  ];

  return (
    <div className="landingPageContainer">
      <HeroSection/>

      <div className="contentWrapper" style={ { marginTop: 80, marginBottom: 80 } }>
        <div className="cardComponentContainer">
          { cardsData.map((card, index) => (
            <CardComponent
              heading={ card.heading }
              description={ card.description }
              image={ card.image }
              index={ index }
            />
          )) }
        </div>
      </div>

      <ContentBox>
        <div className="endToEndRcm">
          <h5>{ t('landingPage.endToEndRcm.subHeading') }</h5>
          <h1>{ t('landingPage.endToEndRcm.heading') }</h1>
          <p>{ t('landingPage.endToEndRcm.description') }</p>

          <div className="numbers">
            <div>
              <Counter end={ 99 } suffix="+"/>
              <p>{ t('landingPage.endToEndRcm.cleanClaims') }</p>
            </div>
            <div>
              <Counter end={ 95 } suffix="%+"/>
              <p>{ t('landingPage.endToEndRcm.netCollections') }</p>
            </div>
            <div>
              <Counter end={ 40 } suffix={ <Counter end={ 50 } suffix="%"/> } addBetween=" - "/>
              <p>{ t('landingPage.endToEndRcm.reductionInAR') }</p>
            </div>
          </div>

          <div className="marginFromTop"/>
          <i>{ t('landingPage.endToEndRcm.footerNote') }</i>
        </div>
      </ContentBox>

      <ContentImageBox backImg={ contentImg }>
        <div className="endToEndRcm">
          <h1 style={ { color: "var(--primary-text-color)" } }>
            { t('landingPage.strategicConsulting.headingPart1') }{ ' ' }
            <span style={ { color: 'var(--primary-color)' } }>
              { t('landingPage.strategicConsulting.headingPart2') }
            </span>
          </h1>
          <p style={ { color: "var(--secondary-text-color)", fontWeight: 400 } }>
            { t('landingPage.strategicConsulting.description') }
          </p>
        </div>
      </ContentImageBox>

      <div className="marginFromTop"/>
      <div className="contentWrapper">
        <div>
          <HeadingDescription
            heading={
              <h1>
                { t('landingPage.quietAutomationSection.headingPart1') }{ ' ' }
                <span style={ { color: 'var(--primary-color)' } }>
                  { t('landingPage.quietAutomationSection.headingPart2') }
                </span>
              </h1>
            }
            description={ t('landingPage.quietAutomationSection.description') }
          />
          <div className="quiteAutomationContainer">
            { quiteAutomation.map(item => (
              <CardsWOBg heading={ item.heading } description={ item.description }/>
            )) }
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
            { t('landingPage.quietAutomationSection.greenBox') }
          </div>
          <LongButton
            text={ t('landingPage.quietAutomationSection.longButton_text') }
            buttonTitle={ t('landingPage.quietAutomationSection.longButton_title') }
          />
        </div>
      </div>

      <ContactUs/>
      <div className="contentWrapper" style={ { marginBottom: 80 } }>
        <div>
          <HeadingDescription
            heading={
              <h1>
                { t('landingPage.whyUs.headingWoSpan') } {/* Optional if you want static title */ }
                <span style={ { color: 'var(--primary-color)' } }>
                  { t('landingPage.whyUs.headingWSpan') }
                </span>
              </h1>
            }
          />
          <div className="quiteAutomationContainer" style={ { justifyContent: "center" } }>
            { whyUs.map(item => (
              <CardsWOBg background={ true } heading={ item.heading } description={ item.description }/>
            )) }
          </div>
        </div>

        <CardComponent
          heading={
            <h1>
              { t('landingPage.fromHeadachesToSuccess.headingPart1') }{ ' ' }
              <span style={ { color: 'var(--primary-color)' } }>
                { t('landingPage.fromHeadachesToSuccess.headingPart2') }
              </span>
            </h1>
          }
          description={
            <div>
              { t('landingPage.fromHeadachesToSuccess.description') }
              <div>
                <br/>
                <b style={ { color: 'var(--primary-text-color)', fontWeight: 500 } }>
                  { t('landingPage.fromHeadachesToSuccess.benchmarks') }
                </b>
                <ul style={ { color: 'var(--primary-text-color)', fontWeight: 500 } }>
                  { t('landingPage.fromHeadachesToSuccess.benchmark_list', { returnObjects: true }).map((item, idx) => (
                    <li key={ idx }>{ item }</li>
                  )) }
                </ul>
              </div>
            </div>
          }
          image={ successImage }
          index={ 0 }
        />

        <div>
          <HeadingDescription
            heading={
              <h1>
                { t('landingPage.experienceAcrossBorders.part1') }{ ' ' }
                <span style={ { color: 'var(--primary-color)' } }>
    { t('landingPage.experienceAcrossBorders.part2') }
  </span>
              </h1>
            }
          />
          <LogoSlider/>
        </div>

        <div>
          <HeadingDescription
            heading={
              <h1>
                { t('landingPage.poweredByInnovation.part1') }{ ' ' }
                <span style={ { color: 'var(--primary-color)' } }>
    { t('landingPage.poweredByInnovation.part2') }
  </span>
              </h1>
            }
          />
          <div className="logos">
            { secondLogos.map((item, idx) => (
              <a key={ idx } href={ item.link } target="_blank" rel="noreferrer"
                 style={ { display: "flex", justifyContent: idx === 0 ? "end" : "start" } }>
                <Image preview={ false } src={ item.img }
                       style={ { padding: "10px", height: 120, objectFit: "contain" } }/>
              </a>
            )) }
          </div>
        </div>
      </div>

      <ContentBox>
        <div className="endToEndRcm">
          <h1><i>{ t('landingPage.readyToLeap.heading') }</i></h1>
          <h2>{ t('landingPage.readyToLeap.subHeading') }</h2>
          <p>{ t('landingPage.readyToLeap.description') }</p>

          <ButtonComponent className="endToEndRcmBtn" size="large" color="rgba(255,255,255,.2)"
                           style={ { marginTop: 100 } }>
            { t('common.buttons.speakWithTeam') }
          </ButtonComponent>
          <ButtonComponent className="endToEndRcmBtn" color="white" size="large"
                           style={ { marginTop: 10, color: "var(--primary-color)" } }>
            { t('common.buttons.bookScan') }
          </ButtonComponent>
        </div>
      </ContentBox>
    </div>
  );
};

export default LandingPage;
