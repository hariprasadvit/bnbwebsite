"use client"; // not necessary in Next 14, but for clarity

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/page.module.scss";
import workImg1 from "/public/Home/ourworks1.png";
import workImg2 from "/public/Home/ourworks2.png";
import Image from "next/image";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function OurWorks() {
  const workItems = [
    {
      image: workImg1,
      text: "Digital Product Development for",
      highlight: "BCCI to Engage Cricket Fans",
      bg: "#E7F2E7",
      highlightMaxWidth: "240px",
    },
    {
      image: workImg2,
      text: "Teaming Up with the Global FMCG Chain",
      highlight: "for Creating a Digital Platform",
      bg: "#FFFFFF",
      highlightMaxWidth: "275.5px",
    },
    {
      image: workImg2,
      text: "Teaming Up with the Global FMCG Chain",
      highlight: "for Creating a Digital Platform",
      bg: "#ECE3DA",
      highlightMaxWidth: "275.5px",
    },
    {
      image: workImg2,
      text: "Teaming Up with the Global FMCG Chain",
      highlight: "for Creating a Digital Platform",
      bg: "#E7F2E7",
      highlightMaxWidth: "275.5px",
    },
    {
      image: workImg1,
      text: "Digital Product Development for",
      highlight: "BCCI to Engage Cricket Fans",
      bg: "#FFFFFF",
      highlightMaxWidth: "240px",
    },
  ];

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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className={styles.ourWorks}>
      <div className={styles.container}>
        <div className={styles.topContent}>
          <h2>
            Some of our <br />
            Pride Works
          </h2>
          <p>
            Our AI-driven intelligent agents enhance automation,
            decision-making, and personalization across industries. At Boolean
            and Beyond, we design AI agents that integrate NLP, knowledge
            graphs, and machine learning to provide context-aware solutions.
          </p>
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.scrollDown}>
            <span>(Scroll Down)</span>
          </div>
          <div className={styles.workSlider}>
            <Slider {...settings}>
              {workItems.map((item, index) => (
                <div className={styles.workItem} key={index}>
                  <div
                    style={{
                      background: item.bg,
                    }}
                  >
                    <div className={styles.imageWrap}>
                      <Image src={item.image} alt="Our Works" />
                    </div>
                    <div>
                      <p style={{ maxWidth: item.highlightMaxWidth }}>
                        {item.text} <strong>{item.highlight}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
