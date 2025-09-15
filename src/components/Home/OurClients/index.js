"use client";

import React from "react";
import styles from "./OurClients.module.scss";
import Image from "next/image";
import CustomCarousel from "./CustomCarousel";

export default function OurClients({ data = {}, addTopPadding, greyBG }) {
  let { clients = [], title = "Clients who trusted us" } = data;

  return (
    <section
      className={`${styles.OurClients} ${
        addTopPadding ? styles.addTopPadding : ""
      } ${greyBG ? styles.greyBG : ""}`}
    >
      {/* <h2>{title}</h2> */}
      <CustomCarousel
        autoplay={true}
        autoplaySpeed={3000}
        speed={1200}
      >
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
      </CustomCarousel>
    </section>
  );
}
