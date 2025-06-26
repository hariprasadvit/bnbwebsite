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

const IndustryWeServe = () => {
  return (
    <div className={styles.ourServeWrapper}>
      <div className={styles.ourServeTitle}>Industries We Serve</div>
      <div className={styles.ourServeCardContainer}>
        <ServeCard
          serveIcon={realEstate}
          serveTitle={"Real Estate & Hospitality"}
        />
        <ServeCard
          serveIcon={healthCare}
          serveTitle={"Healthcare & Wellness"}
        />
        <ServeCard serveIcon={retail} serveTitle={"Retail & Ecommerce"} />
        <ServeCard serveIcon={media} serveTitle={"Media & Entertainment"} />
        <ServeCard
          serveIcon={automobile}
          serveTitle={"Automobile & Transport"}
        />
        <ServeCard serveIcon={finance} serveTitle={"Finance & Fintech"} />
        <ServeCard serveIcon={agriculture} serveTitle={"Agritech"} />
        <ServeCard serveIcon={learning} serveTitle={"Edtech & Learning"} />
      </div>
    </div>
  );
};

export default IndustryWeServe;
