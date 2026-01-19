import React from 'react';
import "./heroSection.scss";
import ButtonComponent from '../../../components/button/Button';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className={"landingPageHeroSectionHero"}>
      <div className="landingPageHeroSection">
        <div data-aos="fade-right" className="heroSectionContent">
          <h4>{t('landingPage.heroSection.tagline')}</h4>
          <h1>{t('landingPage.heroSection.heading')}</h1>
          <p>{t('landingPage.heroSection.description')}</p>
          <ButtonComponent>
            {t('landingPage.heroSection.buttonText')}
          </ButtonComponent>
        </div>
        <h5 className={"scrollDown"}>
          {t('landingPage.heroSection.scrollDown')} <ChevronDown />
        </h5>
      </div>
    </div>
  );
}

export default HeroSection;
