import React from 'react';
import "./heroSection.scss";
import ButtonComponent from '../../../components/button/Button';

const HeroSection = () => {
  return <div className={"landingPageHeroSectionHero"}>
    <div className="landingPageHeroSection">
        <div className="heroSectionContent">
          <h4>#1 Healthcare Solutions Partner</h4>
          <h1>Accelon Health | End-to-End Healthcare Solutions & Precision RCM Partner</h1>
          <p>Leap beyond limits. Accelon Health fuses full-cycle RCM, BPO, consulting, and technology solutions to unlock revenue, ensure compliance, and scale operational excellence across Saudi Arabia, GCC, USA & Egypt. Book a demo.</p>
          <ButtonComponent
            style={{
              width: "100%",
              height: 60,
              background: "linear-gradient(to right, #1C2460, #0077C7)",
              marginTop:80
            }}
          >
            Unlock Your Growth Story
          </ButtonComponent>
        </div>
  </div>
  </div>
}

export default HeroSection;