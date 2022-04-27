import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__image">
        <Image src="https://sionaugb.sirv.com/palmaservice/logo/banner-large.svg" width="1920px" height="654px" objectFit="contain" alt="maritime composites banner" />
      </div>

      <div className="banner__content">
        <h1 className="banner__title">Maritime Composites Design</h1>
      </div>
    </div>
  );
};

export default Banner;
