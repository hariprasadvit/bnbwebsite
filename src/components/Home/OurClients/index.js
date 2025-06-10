"use client"; // not necessary in Next 14, but for clarity

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/page.module.scss";
import client1 from "/public/Home/client1.png";
import client2 from "/public/Home/client2.png";
import client3 from "/public/Home/client3.png";
import client4 from "/public/Home/client4.png";
import client5 from "/public/Home/client5.png";
import Image from "next/image";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function OurClients({ data = {} }) {
  let { clients = [], title = "Clients who trusted us" } = data;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    className: "clientSlider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.OurClients}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.clientSlider}>
          <Slider {...settings}>
            {clients?.map((item, index) => {
              const imageUrl = item?.url
                ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + item?.url
                : "/fallback-image.png"; // fallback image
              return (
                <div className={styles.clientItem} key={index}>
                  <div>
                    <div className={styles.imageWrap}>
                      <Image
                        src={imageUrl}
                        alt="Our Works"
                        width={300}
                        height={51}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
