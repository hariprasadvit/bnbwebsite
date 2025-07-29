import React from "react";
import styles from "../service.module.scss";
import ServeCard from "./ServeCard";

const IndustryWeServe = ({ key, data }) => {
  return (
    <div className={styles.ourServeWrapper}>
      <div className={styles.ourServeTitle}>{data?.title}</div>
      <div className={styles.ourServeCardContainer}>
        {data?.industry_card?.map((item, index) => {
          const imageUrl = item?.logo?.url
            ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + item?.logo?.url
            : "/fallback-image.png";
          return (
            <ServeCard
              key={index}
              serveIcon={imageUrl}
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
