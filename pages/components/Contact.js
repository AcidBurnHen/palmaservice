import { useState } from "react";

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
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setBody("");
      }
    });
  };

  return (
    <div id="contact" className="contact-us">
      <div className="contact-us__title">
        <h2>Contact Us Section</h2>
      </div>
      <div className="contact-us__form-container wrapper">
        <form className="contact-us__form">
          <div className="contact-us__section">
            <label htmlFor="name">Name</label>
            <input onChange={handleName} type="text" name="name" />
          </div>
          <div className="contact-us__section">
            <label htmlFor="email">Email</label>
            <input onChange={handleEmail} type="email" name="email" />
          </div>
          <div className="contact-us__section">
            <label htmlFor="subject">Subject</label>
            <input onChange={handleSubject} type="text" name="subject" />
          </div>
          <div className="contact-us__section">
            <label htmlFor="message">Message</label>
            <input onChange={handleMessage} type="text" name="message" />
          </div>
          <input onClick={handleSubmit} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
