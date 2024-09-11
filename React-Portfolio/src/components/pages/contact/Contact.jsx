import React, {  useRef } from "react";
import emailjs from "@emailjs/browser";
import "../contact/contact.css";

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xl3notm", "template_t567kyh", form.current, {
        publicKey: "CLflmPBfOSB00ziww",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Enter name" />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="Enter email" />
        <label>Message</label>
        <textarea name="message" placeholder="Enter message"/>
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Contact;
