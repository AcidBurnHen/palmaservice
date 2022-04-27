import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleName = e => {
    setName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handleSubject = e => {
    setSubject(e.target.value);
  };

  const handleMessage = e => {
    setMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("sending");

    let data = {
      name,
      email,
      subject,
      message
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => {
      if (res.status === 200) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setBody("");
      }
    });
  };

  return (
    <div id="contact" className="contact-us">
      <div className="contact-us__title-container">
        <AiOutlineMail className="contact-us__icon" />
        <div className="contact-us__title">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="contact-us__form-container wrapper">
        <form className="contact-us__form">
          <div className="contact-us__labels">
            <label htmlFor="name">Name</label>
            <label htmlFor="email">Email</label>
            <label htmlFor="subject">Subject</label>
            <label htmlFor="message">Message</label>
          </div>
          <div className="contact-us__inputs">
            <input onChange={handleName} type="text" name="name" />
            <input onChange={handleEmail} type="email" name="email" />
            <input onChange={handleSubject} type="text" name="subject" />
            <input className="contact-us__inputs-message" onChange={handleMessage} type="text" name="message" />
          </div>
          <input className="contact-us__submit" onClick={handleSubmit} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
