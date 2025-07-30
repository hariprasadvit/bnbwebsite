import Image from "next/image";
import React from "react";
import styles from "../../../styles/page.module.scss";

const BannerImage = ({ url = "" }) => {
  return (
    <section className={styles.bannerImage}>
      <Image
        src={url}
        alt="Banner Image"
        width={1470}
        height={916}
        loading="lazy"
        fetchPriority="high"
      />
      {/* <div className={styles.bannerImageBottomContainer}>
        <OverViewCard overviewData={digitalProductoverviewData} />
        <DataDriven showDataDrivenImg={false} />
      </div> */}
    </section>
  );
};

export default BannerImage;
