"use client"; // not necessary in Next 14, but for clarity

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/page.module.scss";
import client2 from "/public/Home/client2.png";
import Image from "next/image";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Testimonials() {
  const sliderItems = [
    {
      desc: "“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”",
      name: "Gaurav Saxena",
      position: "General Manager , Bcci",
      image: client2,
    },
    {
      desc: "“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”",
      name: "Gaurav Saxena",
      position: "General Manager , Bcci",
      image: client2,
    },
    {
      desc: "“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”",
      name: "Gaurav Saxena",
      position: "General Manager , Bcci",
      image: client2,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    className: "clientSlider",
  };

  return (
    <section className={styles.Testimonials}>
      <div className={styles.container}>
        <div className={styles.clientSlider}>
          <Slider {...settings}>
            {sliderItems.map((item, index) => (
              <div className={styles.testimonialItem} key={index}>
                <div>
                  <div className={styles.desc}>{item.desc}</div>
                  <div className={styles.profileData}>
                    <Image src={item.image} alt="client" />
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
