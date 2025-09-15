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
      style={{ 
        ...style,
        background: '#ffffff',
        border: '1px solid #e0e0e0',
        borderRadius: '50px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#f5f5f5';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#ffffff';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="20"
        height="20"
      >
        <path 
          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" 
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styles.customArrow} ${styles.customArrowLeft}`}
      style={{ 
        ...style,
        background: '#ffffff',
        border: '1px solid #e0e0e0',
        borderRadius: '50px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#f5f5f5';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#ffffff';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="20"
        height="20"
      >
        <path 
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" 
          fill="#ffffff"
        />
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
      style={{
        background: '#ffffff',
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className={styles.topHeader}>
        <h2
          style={{
            color: '#333333',
            fontSize: '48px',
            fontWeight: '300'
          }}
        >
          Some of our <br />
          <strong
            style={{
              color: '#000000',
              fontWeight: '700'
            }}
          >
            Impactful work
          </strong>
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
                href={'/case-study/' + item?.case_study_detail?.slug}
                className={styles.cardLayout}
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 26px rgba(16,16,16,0.08)';
                }}
              >
                <div 
                  className={styles.imageSection}
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <Image
                    src={imageUrl}
                    alt="Our Work"
                    width={582}
                    height={431}
                    style={{
                      transition: 'transform 0.4s ease',
                      borderRadius: '16px'
                    }}
                  />
                </div>
                <div className={styles.textSection}>
                  <h3
                    style={{
                      color: '#0b0b0b',
                      fontSize: '36px',
                      fontWeight: '700',
                      lineHeight: '1.2',
                      marginBottom: '16px'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: '#2b2b2b',
                      fontSize: '18px',
                      lineHeight: '1.7',
                      fontWeight: '400'
                    }}
                  >
                    {item.description}
                  </p>
                  <span className="knowMoreLink" role="link">Read More</span>
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
