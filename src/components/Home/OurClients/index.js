"use client";

import React from "react";
import styles from "./OurClients.module.scss";
import Image from "next/image";

export default function OurClients({ data = {}, addTopPadding, greyBG }) {
  let { clients = [], title = "Clients who trusted us" } = data;

  return (
    <section
      className={`${styles.OurClients} ${
        addTopPadding ? styles.addTopPadding : ""
      } ${greyBG ? styles.greyBG : ""}`}
    >
      {/* <h2>{title}</h2> */}
      {clients?.filter(item => {
        const excludeLogos = [
          'vida_1ef41cc527.png',
          'Portea_logo_08b8486aaf.png',
          'Rapidi_logo_70c7bbef97.png',
          'Kotak_mahindra_logo_633b4e92ae.png',
          'Nutrical_logo_714e0cfa19.png'
        ];
        return !excludeLogos.some(logo => item?.url?.includes(logo));
      }).map((item, index) => {
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
    </section>
  );
}
