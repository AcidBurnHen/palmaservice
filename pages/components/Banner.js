import Image from "next/image";
import banner from "../../images/banner-large.png";

const Banner = () => {
  return (
    <div>
      <h1>Maritime Composites Design</h1>
      <Image src={banner} alt="maritime composites banner" />
    </div>
  );
};

export default Banner;
