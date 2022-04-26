import Image from "next/image";
import banner from "../../images/banner-large.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__image">
        <Image src={banner} alt="maritime composites banner" />
      </div>

      <div className="banner__content">
        <h1 className="banner__title">Maritime Composites Design</h1>
      </div>
    </div>
  );
};

export default Banner;
