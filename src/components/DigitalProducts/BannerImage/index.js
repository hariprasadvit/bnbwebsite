import Image from "next/image";
import React from "react";
import styles from "../../../styles/page.module.scss";
import dynamic from "next/dynamic";
import bannerImage from "../../../../public/DigitalProduct/bannerImage.png";
import { digitalProductoverviewData } from "@/components/data";
const OverViewCard = dynamic(() =>
  import("@/components/DigitalProducts/OverviewCard")
);
const DataDriven = dynamic(() => import("@/components/Home/DataDriven"));

const BannerImage = () => {
  return (
    <section className={styles.bannerImage}>
      <Image src={bannerImage} alt="Banner Image" width={0} height={0} />
      <div className={styles.bannerImageBottomContainer}>
        <OverViewCard overviewData={digitalProductoverviewData} />
        <DataDriven
          showDataDrivenImg={false}
          titleMaxWidth={"305px"}
          titleMarginBottom={"70px"}
        />
      </div>
    </section>
  );
};

export default BannerImage;
