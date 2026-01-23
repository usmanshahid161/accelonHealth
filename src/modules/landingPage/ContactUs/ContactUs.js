import { Image, Input, notification } from 'antd';
import React, { useState }            from 'react';
import "./ContactUs.scss";
import { sendEmail }                  from '../../../api/api';
import contactUsBg                    from '../assets/letsConnect.png';
import ButtonComponent                from '../../../components/button/Button';
import {useTranslation}                  from 'react-i18next';

const { TextArea } = Input;

const ContactUs = () => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    email: "",
    name: "",
    message: "",
    phone: "",
    title: "",
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
        phone: state.phone.trim(),
        title: state.title.trim(),
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
      }
      else {
        openFailureNotification(
          "Email not sent!",
          "Please try again."
        );
        setState(prev => ({ ...prev, disable: false }));
      }
    }
    catch (e) {
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
  const isFormInvalid = !state.name.trim() || !state.email.trim() || !state.message.trim() || !state.phone.trim() || !state.title.trim() || state.disable || !isValidEmail(state.email);


  return (
    <div className="contactUsContainer">
      <div className="left">
        <Image
          preview={ false }
          src={ contactUsBg }
          style={ { width: "100%", height: "100%", objectFit: "cover" } }
        />
      </div>
      <div className="right">
        <div>
          <p>{ t("landingPage.contactUs.heading") }</p>
          <h3>
            { t("landingPage.contactUs.subHeadingPart1") }{ " " }
            <span style={ { color: "var(--primary-color)" } }>
            { t("landingPage.contactUs.subHeadingPart2") }
          </span>
          </h3>
        </div>
        <div className="contactUsForm">
          <Input
            disabled={ state.disable }
            value={ state.name }
            onChange={ (e) => setState({ ...state, name: e.target.value }) }
            placeholder={ t("landingPage.contactUs.placeholders.name") }
            size="large"
            style={ { height: 48, borderRadius: 24 } }
          />

          <Input
            disabled={ state.disable }
            value={ state.title }
            onChange={ (e) => setState({ ...state, title: e.target.value }) }
            placeholder={ t("landingPage.contactUs.placeholders.title") }
            size="large"
            style={ { height: 48, borderRadius: 24 } }
          />

          <Input
            disabled={ state.disable }
            value={ state.phone }
            onChange={ (e) => setState({ ...state, phone: e.target.value }) }
            placeholder={ t("landingPage.contactUs.placeholders.phone") }
            size="large"
            style={ { height: 48, borderRadius: 24 } }
          />

          <Input
            disabled={ state.disable }
            value={ state.email }
            onChange={ (e) => setState({ ...state, email: e.target.value }) }
            placeholder={ t("landingPage.contactUs.placeholders.email") }
            size="large"
            style={ { height: 48, borderRadius: 24 } }
            status={ state.email && !isValidEmail(state.email) ? "error" : "" }
          />

          <TextArea
            disabled={ state.disable }
            value={ state.message }
            onChange={ (e) => setState({ ...state, message: e.target.value }) }
            style={ { height: 300 } }
            rows={ 4 }
            placeholder={ t("landingPage.contactUs.placeholders.message") }
          />

          <ButtonComponent
            actionFunc={ submit }
            disabled={ isFormInvalid }
            style={{
              background: isFormInvalid ? "lightGrey" : "linear-gradient(to right, var(--primary-color), #0077C7)",
              color: isFormInvalid &&  "darkGrey"
            }}
          >
            { state.disable
              ? t("landingPage.contactUs.button.sending")
              : t("landingPage.contactUs.button.send") }
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
