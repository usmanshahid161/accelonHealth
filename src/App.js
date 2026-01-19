import React, {useEffect} from 'react';
import './App.css';
import ScrollToTop                      from './components/ScrollToTop/ScrollToTop';
import AboutUs                          from './modules/AboutUs/AboutUs';
import Audit                            from './modules/Audit/Audit';
import Beauty                           from './modules/Beauty/Beauty';
import CaseStudies                      from './modules/CaseStudies/CaseStudies';
import Code                             from './modules/code/code';
import ContactCenter                    from './modules/ContactCenter/ContactCenter';
import ContactUs                        from './modules/contactUs/contactUs';
import Footer                           from './modules/footer/Footer';
import HealthCare                       from './modules/HealthCare/HealthCare';
import LandingPage                      from './modules/landingPage/landingPage';
import Navbar                           from './modules/Navbar/Navbar';
import Notes                            from './modules/Notes/Notes';
import RevenueCycle                     from './modules/RevenueCycle/RevenueCycle';
import Voice                            from './modules/Voice/voice';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from "aos";
import { useTranslation } from "react-i18next";


function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  useEffect(() => {
    // Set direction based on current language
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

    // Optional: change font if needed for Arabic
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <LandingPage/> }/>
      <Route path="/about" element={ <AboutUs/> }/>
      <Route path="/technology/audit" element={ <Audit/> }/>
      <Route path="/technology/beauty" element={ <Beauty/> }/>
      <Route path="/technology/notes" element={ <Notes/> }/>
      <Route path="/technology/voice" element={ <Voice/> }/>
      <Route path="/technology/code" element={ <Code/> }/>
      <Route path="/professional/healthCare" element={ <HealthCare/> }/>
      <Route path="/professional/contactCenter" element={ <ContactCenter/> }/>
      <Route path="/professional/revenue" element={ <RevenueCycle/> }/>
      <Route path="/case-studies" element={ <CaseStudies/> }/>
      <Route path="/contact" element={ <ContactUs/> }/>
    </Routes>
    <Footer/>
  </BrowserRouter>
}

export default App;
