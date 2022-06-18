import { useState } from 'react';

const ErrorMessage = ({ msg, show, textarea }) => {
  const [hideAlert, setHideAlert] = useState(false);

  const closeAlert = (e) => {
    e.preventDefault();
    setHideAlert(true);
  };

  return (
    <div className={`error-message ${show}`}>
      <div
        className={`error-message__container ${
          hideAlert ? 'error-message__hide' : ''
        } ${textarea === undefined ? "" : textarea}`}>
        <p className='error-message__msg'>{msg}</p>
        <button onClick={closeAlert} className='error-message__btn'>
          x
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
