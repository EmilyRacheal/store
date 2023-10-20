import React, { useState, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import styles from "./image.module.css";
import slider from "@/assets/prod.png";
import Image from "next/image";

interface Prop {
  imgList?: any;
  hasImageIndicator?: boolean;
}

const ImageCarousel: React.FC<Prop> = ({ imgList, hasImageIndicator }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<any>([]);

  useEffect(() => {
    setAllImages([...imgList]);
  }, []);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`${styles.carouselContainer}`}>
      <div className={`${styles.mainImage}`}>
        <Image src={allImages[currentImageIndex]} alt="Main Image" className="rounded-[5px] md:rounded-none" />
      </div>

      {imgList.length > 1 && (
        <div
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={goToPreviousImage}
        >
          <MdArrowBackIosNew color="#000" />
        </div>
      )}

      {imgList.length > 1 && (
        <div
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={goToNextImage}
        >
          <MdArrowForwardIos color="#000" />
        </div>
      )}

      {imgList.length > 1 && (
        <div className={`${styles.dotList}`}>
          {imgList?.map((image: any, index: number) => (
            <div
              key={index}
              // className={`${styles.imageItem} ${index === currentImageIndex ? 'active' : 'inactive'}`}

              className={`${styles.dot} ${
                index === currentImageIndex ? "activedot" : "inactivedot"
              }`}
            ></div>
          ))}
        </div>
      )}

      {hasImageIndicator && (
        <div className={`${styles.imageList}`}>
          {imgList?.map((image: any, index: number) => (
            <div
              key={index}
              className={`${styles.imageItem} ${
                index === currentImageIndex ? "active" : "inactive"
              }`}
            >
              <img
                src={image}
                className={`${styles.smallImg}`}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
