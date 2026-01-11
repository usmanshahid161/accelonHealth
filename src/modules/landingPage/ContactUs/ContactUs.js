import { Image, Input, notification } from 'antd';
import React, { useState } from 'react';
import "./ContactUs.scss";
import { sendEmail } from '../../../api/api';
import contactUsBg from '../assets/letsConnect.png';
import ButtonComponent from '../../../components/button/Button';

const { TextArea } = Input;

const ContactUs = () => {
  const [state, setState] = useState({
    email: "",
    name: "",
    message: "",
    disable: false, // consistent naming
  });

  // Success notification
  const openSuccessNotification = (message = "Success!", description = "") => {
    notification.success({
      message,
      description,
      placement: "bottomRight",
      duration: 3,
    });
  };

  // Error notification
  const openFailureNotification = (message = "Error!", description = "") => {
    notification.error({
      message,
      description,
      placement: "bottomRight",
      duration: 3,
    });
  };

  // Submit handler
  const submit = async () => {
    try {
      setState(prev => ({ ...prev, disable: true }));

      const response = await sendEmail({
        name: state.name.trim(),
        email: state.email.trim(),
        message: state.message.trim(),
      });

      if (response) {
        openSuccessNotification(
          "Email sent successfully!",
          "We will contact you shortly. Thank you!"
        );

        // Reset form
        setState({
          email: "",
          name: "",
          message: "",
          disable: false,
        });
      } else {
        openFailureNotification(
          "Email not sent!",
          "Please try again."
        );
        setState(prev => ({ ...prev, disable: false }));
      }
    } catch (e) {
      openFailureNotification(
        "Error!",
        "Something went wrong. Please try again."
      );
      setState(prev => ({ ...prev, disable: false }));
      console.error(e);
    }
  };

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Check if form is valid
  const isFormInvalid = !state.name.trim() || !state.email.trim() || !state.message.trim() || state.disable || !isValidEmail(state.email);


  return (
    <div className="contactUsContainer">
      <div className="left">
        <Image
          preview={false}
          src={contactUsBg}
          style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
        />
      </div>
      <div className="right">
        <div>
          <p>Contact Us</p>
          <h3>
            Send Us <span style={{ color: "var(--primary-color)" }}>A Message</span>
          </h3>
        </div>
        <div className="contactUsForm">
          <Input
            disabled={state.disable}
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            placeholder="Your Name"
            size="large"
            style={{ height: 48, borderRadius: 24 }}
          />

          <Input
            disabled={state.disable}
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            placeholder="Your Email"
            size="large"
            style={{ height: 48, borderRadius: 24 }}
            status={state.email && !isValidEmail(state.email) ? "error" : ""}
          />

          <TextArea
            disabled={state.disable}
            value={state.message}
            onChange={(e) => setState({ ...state, message: e.target.value })}
            style={{ height: 300 }}
            rows={4}
            placeholder="Your Message"
          />

          <ButtonComponent
            actionFunc={submit}
            disabled={isFormInvalid}
          >
            {state.disable ? "Sending..." : "Send"}
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
