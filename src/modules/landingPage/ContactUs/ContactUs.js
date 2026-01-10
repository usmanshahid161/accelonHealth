import { Image, Input } from 'antd';
import React            from 'react';
import "./ContactUs.scss";
import contactUsBg      from '../assets/letsConnect.png';
import ButtonComponent  from '../../../components/button/Button';

const { TextArea } = Input;

const ContactUs = () => {
  return <div className="contactUsContainer">
    <div className={ "left" }>
      <Image preview={ false } src={ contactUsBg } style={ {
        width: "100%",
        backgroundSize: "cover",
        height: "100%",
      } }/>
    </div>
    <div className={ "right" }>
      <div>
        <p>Contact Us</p>
        <h3>Send Us <span style={ { color: "var(--primary-color)" } }>A Message</span></h3>
      </div>
      <div className={ "contactUsForm" }>
        <Input placeholder={ "Your Name" } size={ "large" } style={ {
          height: 48,
          borderRadius: 24
        } }/>

        <Input placeholder={ "Your Email" } size={ "large" } style={ {
          height: 48,
          borderRadius: 24
        } }/>

        <TextArea style={ {
          height: 300,
        } } rows={ 4 } placeholder="Your Message"/>

        <ButtonComponent
        >Send
        </ButtonComponent>
      </div>
    </div>
  </div>
}

export default ContactUs;