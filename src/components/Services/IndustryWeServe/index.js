import React from "react";
import styles from "../service.module.scss";
import ServeCard from "./ServeCard";
import Image from "next/image";

// Map industry titles to their corresponding images
const industryImages = {
  'Fintech & Banking': '/fintech.png',
  'Education & Skilling': '/Education.png',
  'Healthcare & Wellness': '/medical.png',
  'Media, Content & OTT': '/media.png',
  'Retail & E-commerce': '/retail.png',
  'Logistics & Supply Chain': '/logistics.png'
};

const IndustryWeServe = ({ key, data }) => {
  return (
    <div className={styles.ourServeWrapper}>
      <div className={styles.ourServeTitle}>{data?.title}</div>
      <div className={styles.ourServeCardContainer}>
        {data?.industry_card?.map((item, index) => {
          // Use the mapped image if available, otherwise fall back to the logo from CMS
          const imageSrc = industryImages[item?.title] || 
                         (item?.logo?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + item.logo.url : "/fallback-image.png");
          
          return (
            <ServeCard
              key={index}
              serveIcon={imageSrc}
              serveTitle={item?.title}
              desc={item?.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IndustryWeServe;
