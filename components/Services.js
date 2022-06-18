import Image from "next/image";
import { MdDirectionsBoatFilled } from "react-icons/md";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services__title-section">
        <MdDirectionsBoatFilled className="services__icon" />
        <div className="services__title">
          <h2>Our Services</h2>
        </div>
      </div>
      <div className="services__container wrapper">
        <div className="services__image">
          <Image src="https://sionaugb.sirv.com/palmaservice/logo/our-services.svg" width="350px" height="426px" alt="Servicing a boat" />
        </div>
        <div className="services__items">
          <ul>
            <li>Gel Coat Repairs</li>
            <li>Structural GRP Repairs</li>
            <li>Polishing and Refurbishing</li>
            <li>Electrical Installations and Upgrades</li>
            <li>Upholstery Repairs and Upgrades</li>
            <li>Bow and Stern Thrusters</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
