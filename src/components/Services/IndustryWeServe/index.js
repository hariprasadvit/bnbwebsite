import React from "react";
import styles from "../service.module.scss";
import ServeCard from "./ServeCard";
import realEstate from "../../../../public/realEstate.svg";
import healthCare from "../../../../public/healthCare.svg";
import retail from "../../../../public/buildingRetail.svg";
import media from "../../../../public/media.svg";
import automobile from "../../../../public/car.svg";
import finance from "../../../../public/finance.svg";
import agriculture from "../../../../public/agricultureAnalytics.svg";
import learning from "../../../../public/educationOutline.svg";

const IndustryWeServe = ({ key, data }) => {
  return (
    <div className={styles.ourServeWrapper}>
      {console.log(data, "IndustryWeServe data")}
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
