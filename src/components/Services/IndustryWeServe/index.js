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
          desc={
            "Real Estate Application UX design streamlines property transactions through refined property search engines, virtual tour applications, and real estate CRM systems."
          }
        />
        <ServeCard
          serveIcon={healthCare}
          serveTitle={"Healthcare & Wellness"}
          desc={
            "Healthcare Application UX design enhances patient engagement through patient portals, telehealth apps, and EMR systems."
          }
        />
        <ServeCard
          serveIcon={retail}
          serveTitle={"Retail & Ecommerce"}
          desc={
            "E-commerce Application UX design optimizes online shopping experiences, boosting conversion rates and seamless navigation flow."
          }
        />
        <ServeCard
          serveIcon={media}
          serveTitle={"Media & Entertainment"}
          desc={
            "Entertainment Application UX design captivates audiences via interactive video platforms, streaming apps, and digital magazines."
          }
        />
        <ServeCard
          serveIcon={automobile}
          serveTitle={"Automobile & Transport"}
          desc={
            "Supply Chain Application UX design enhances operational efficiency through simplified warehouse management software, GPS tracking systems, and logistics dashboards."
          }
        />
        <ServeCard
          serveIcon={finance}
          serveTitle={"Finance & Fintech"}
          desc={
            "Fintech Application UX design streamlines digital banking, mobile payment solutions, and robo-advisor platforms."
          }
        />

        <ServeCard
          serveIcon={agriculture}
          serveTitle={"Agritech"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fuga totam minus animi facere mollitia voluptatum sit optio reiciendis! Sit tempore eligendi iure fuga hic, possimus reiciendis sapiente odio quibusdam."
          }
        />
        <ServeCard
          serveIcon={learning}
          serveTitle={"Edtech & Learning"}
          desc={
            "EdTech Application UX design enhances interactive learning experiences through e-learning platforms, student portals, and MOOCs."
          }
        />
      </div>
    </div>
  );
};

export default IndustryWeServe;
