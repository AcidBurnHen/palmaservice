import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { SiMinutemailer } from 'react-icons/si';
import { BiMailSend } from 'react-icons/bi';
import ErrorMessage from './ErrorMessage';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoaded] = useState('');

  let errorMessages = {};
  const [error, setError] = useState(errorMessages);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  function checkIfErrors(data) {
    if (data.name === '') {
      Object.defineProperty(errorMessages, 'nameErr', {
        value: 'Name field cannot be empty',
      });
      setError(errorMessages);
    }

    if (data.email === '') {
      Object.defineProperty(errorMessages, 'emailErr', {
        value: 'Email field cannot be empty',
      });
      setError(errorMessages);
    }

    if (data.subject === '') {
      Object.defineProperty(errorMessages, 'subjectErr', {
        value: 'Subject field cannot be empty',
      });
      setError(errorMessages);
    }

    if (data.message === '') {
      Object.defineProperty(errorMessages, 'msgErr', {
        value: 'Message field cannot be empty',
      });
      setError(errorMessages);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('sending');
    setLoaded('loading');

    let data = {
      name,
      email,
      subject,
      message,
    };

    checkIfErrors(data);

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setLoaded('loaded');
        }

        if (res.status === 406 || res.status === 405) {
          setLoaded('');
        }
      })
      .catch((error) => {
        setLoaded('');
        console.log(error);
      });
  };


  function checkErrorMsg(errorMsg) {
    if (errorMsg === undefined) {
      return '';
    }

    return 'error-message__show';
  }

  return (
    <div id='contact' className='contact-us'>
      <div className='contact-us__title-container'>
        <AiOutlineMail className='contact-us__icon' />
        <div className='contact-us__title'>
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className='contact-us__form-container wrapper'>
        {loading === '' ? (
          <form className='contact-us__form'>
            <div className='contact-us__labels'>
              <label htmlFor='name'>Name</label>
              <label htmlFor='email'>Email</label>
              <label htmlFor='subject'>Subject</label>
              <label htmlFor='message'>Message</label>
            </div>
            <div className='contact-us__inputs'>
              <ErrorMessage
                msg={error.nameErr}
                show={checkErrorMsg(error.nameErr)}
              />
              <input onChange={handleName} type='text' name='name' />
              <ErrorMessage
                msg={error.emailErr}
                show={checkErrorMsg(error.emailErr)}
              />
              <input onChange={handleEmail} type='email' name='email' />
              <ErrorMessage
                msg={error.subjectErr}
                show={checkErrorMsg(error.subjectErr)}
              />
              <input onChange={handleSubject} type='text' name='subject' />
              <ErrorMessage
                msg={error.msgErr}
                show={checkErrorMsg(error.msgErr)}
                textarea="error-message__textarea"
              />
              <textarea
                className='contact-us__message'
                onChange={handleMessage}
                type='text'
                name='message'
              />
            </div>
            <input
              className='contact-us__submit'
              onClick={handleSubmit}
              type='submit'
            />
          </form>
        ) : (
          ''
        )}
        {loading === 'loading' ? (
          <div className='loader'>
            <BiMailSend className='loader__icon' />
          </div>
        ) : (
          ''
        )}
        {loading === 'loaded' ? (
          <div className='alert'>
            <div className='alert__container'>
              <div className='alert__icon--container'>
                <SiMinutemailer className='alert__icon' />
              </div>
              <div className='alert__text'>
                <p>Email Sent!</p>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Contact;
