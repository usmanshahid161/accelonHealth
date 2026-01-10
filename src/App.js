import './App.css';
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

function App() {
  return <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <LandingPage/> }/>
      <Route path="/about" element={ <AboutUs/> }/>
      <Route path="/outsourcing/audit" element={ <Audit/> }/>
      <Route path="/outsourcing/beauty" element={ <Beauty/> }/>
      <Route path="/outsourcing/notes" element={ <Notes/> }/>
      <Route path="/outsourcing/healthCare" element={ <HealthCare/> }/>
      <Route path="/outsourcing/contactCenter" element={ <ContactCenter/> }/>
      <Route path="/outsourcing/voice" element={ <Voice/> }/>
      <Route path="/outsourcing/revenue" element={ <RevenueCycle/> }/>
      <Route path="/outsourcing/code" element={ <Code/> }/>
      {/*<Route path="/technology" element={<div>Technology</div>} />*/ }
      <Route path="/case-studies" element={ <CaseStudies/> }/>
      <Route path="/contact" element={ <ContactUs/> }/>
    </Routes>
    <Footer/>
  </BrowserRouter>
}

export default App;
