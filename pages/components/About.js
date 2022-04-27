import { MdPeople } from "react-icons/md";

const About = () => {
  return (
    <div id="about" className="about-us">
      <div className="about-us__title-container">
        <MdPeople className="about-us__icon" />
        <div className="about-us__title">
          <h2>About Us</h2>
        </div>
      </div>
      <hr className="about-us__break" />
      <div className="about-us__container wrapper">
        <div className="about-us__section">
          <h3 className="about-us__section-title">We started doing this in..</h3>
          <span className="about-us__section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam turpis est, rhoncus at fringilla vel, semper quis arcu.</span>
        </div>
        <div className="about-us__section">
          <h3 className="about-us__section-title">Who we are?</h3>
          <span className="about-us__section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam turpis est, rhoncus at fringilla vel, semper quis arcu.</span>
        </div>
        <div className="about-us__section">
          <h3 className="about-us__section-title">What do we do?</h3>
          <span className="about-us__section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam turpis est, rhoncus at fringilla vel, semper quis arcu.</span>
        </div>
      </div>
    </div>
  );
};

export default About;
