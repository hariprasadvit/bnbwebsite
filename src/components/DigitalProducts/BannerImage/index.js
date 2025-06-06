import Image from "next/image";
import React from "react";
import styles from "../../../styles/page.module.scss";

const BannerImage = ({ url = "" }) => {
  return (
    <section className={styles.bannerImage}>
      <Image src={url} alt="Banner Image" width={0} height={0} />
      {/* <div className={styles.bannerImageBottomContainer}>
        <OverViewCard overviewData={digitalProductoverviewData} />
<<<<<<< HEAD
        <DataDriven showDataDrivenImg={false} />
      </div> */}
=======
        <DataDriven
          showDataDrivenImg={false}
          titleMaxWidth={"305px"}
          titleMarginBottom={"70px"}
        />
      </div>
>>>>>>> f3af4b5ff724800d92cc50cc3349a3552434b8f7
    </section>
  );
};

export default BannerImage;
