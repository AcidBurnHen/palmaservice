import Image from "next/image";
import serviceMan from "../../images/our-services.png";

const Services = () => {
  return (
    <div id="services">
      <h2>Our Services:</h2>
      <div className="services-section">
        <div className="services-section__image">
          <Image src={serviceMan} alt="Servicing a boat" />
        </div>
        <div className="services-section__services">
          <ul>
            <li>Gel Coat Repairs</li>
            <li>Structural Grip Repairs</li>
            <li>Polishing and Refurbishing</li>
            <li>Electircal Installations and Upgrades</li>
            <li>Upholstery Repairs and Upgrades</li>
            <li>Bow and Stern Thrusters</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
