"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./OurWorks.module.scss"; // keep your original SCSS
import Link from "next/link";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styles.customArrow}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="20"
        height="20"
      >
        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
      </svg>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styles.customArrow} ${styles.customArrowLeft}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="20"
        height="20"
      >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </svg>
    </div>
  );
}

const OurWorks = ({ data = {} }, addTopPadding) => {
  let { card = [] } = data;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div
      className={`${styles.ourWorks} ${
        addTopPadding ? styles.addTopPadding : ""
      }`}
    >
      <div className={styles.topHeader}>
        <h2>
          Some of our <br />
          <strong>Impactful work</strong>
        </h2>
      </div>
      <Slider {...settings}>
        {card?.map((item, index) => {
          const imageUrl = item.image?.url
            ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + item.image?.url
            : "/fallback-image.png"; // fallback image
          return (
            <div key={index} className={styles.slide}>
              <Link
                href={"/case-study/" + item?.case_study_detail?.slug}
                className={styles.cardLayout}
              >
                <div className={styles.imageSection}>
                  <Image
                    src={imageUrl}
                    alt="Our Work"
                    width={582}
                    height={431}
                  />
                </div>
                <div className={styles.textSection}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default OurWorks;
