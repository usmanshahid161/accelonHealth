import React           from 'react';
import "./heroSection.scss";
import ButtonComponent from '../../../components/button/Button';
import {ChevronDown}   from 'lucide-react';

const HeroSection = () => {
  return <div className={"landingPageHeroSectionHero"}>
    <div className="landingPageHeroSection">
        <div data-aos="fade-right"  className="heroSectionContent">
          <h4>#1 Healthcare Solutions Partner</h4>
          <h1>Accelon Health | End-to-End Healthcare Solutions & Precision RCM Partner</h1>
          <p>Leap beyond limits. Accelon Health fuses full-cycle RCM, BPO, consulting, and technology solutions to unlock revenue, ensure compliance, and scale operational excellence across Saudi Arabia, GCC, USA & Egypt. Book a demo.</p>
          <ButtonComponent>
            Unlock Your Growth Story
          </ButtonComponent>
        </div>
      <h5 className={"scrollDown"}>Scroll Down <ChevronDown/></h5>
  </div>
  </div>
}

export default HeroSection;