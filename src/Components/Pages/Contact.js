import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import man from "../../Assets//Images/man standing on chats 1.png";
import AlignBg from "../AlignBg";
import "../css/Contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ligv2ib",
        "template_4clfrfw",
        form.current,
        "aUogLAApthdH1Y6Ao"
      )
      .then(
        (result) => {
          alert(
            "Thank you for reachout to me, I'd make sure I get back to you as soon as I can, Have a Great Day😁",
            result.text
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <AlignBg name={"Contact"} title={"Contact"} />
      <section className="Contact">
        <div className="Contact-img-div">
          <img alt="" src={man} className="Contact-image" />
        </div>
        <div className="Contact-word-div">
          <form ref={form} onSubmit={sendEmail}>
            <span className="justify-span">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                className="client-input"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email "
                className="client-input"
              />
            </span>
            <span className="justify-span">
              <input
                type="text"
                name="from_subject"
                placeholder="Subject"
                className="client-input"
              />
              <input
                type="tel"
                name="from_number"
                placeholder="Phone"
                className="client-input"
              />
            </span>
            <span className=" justify-span">
              <textarea name="message" className="textArea-message  " />
            </span>
            <span className="contact-button ">
              <input type="submit" value="Send" className="resume-button " />
            </span>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
