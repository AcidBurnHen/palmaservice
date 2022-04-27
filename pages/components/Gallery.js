import { useState } from "react";
import { galleryData } from "../../helpers/GalleryData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { AiFillCamera } from "react-icons/ai";
import Image from "next/image";

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const length = galleryData.length;

  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div id="gallery" className="gallery-section wrapper">
      <div className="gallery-section__title-container">
        <AiFillCamera className="gallery-section__icon" />
        <div className="gallery-section__title">
          <h2>Gallery</h2>
        </div>
      </div>
      <section className="gallery-section__slider">
        <FaArrowAltCircleLeft className="gallery-section__left-arrow" onClick={prevImg} />
        <FaArrowAltCircleRight className="gallery-section__right-arrow" onClick={nextImg} />
        {galleryData.map((image, index) => {
          return (
            <div key={index} className={`gallery-section__slide ${index === current ? "gallery-section__slide--active" : ""}`}>
              {index === current && <Image src={image.src} alt={image.alt} height={image.height} width={image.width} objectFit="contain" />}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Gallery;
