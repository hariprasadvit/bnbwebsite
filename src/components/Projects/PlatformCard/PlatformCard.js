// components/PlatformCard.jsx or .tsx if using TypeScript
import React from "react";
import styles from "./platformCard.module.scss";
import Image from "next/image";

const PlatformCard = ({ number, label, title, image, description }) => {
  return (
    <div className={styles.platformCardContent}>
      <div className={styles.platformCardLeft}>
        <h3>{number}</h3>
        <h4>({label})</h4>
      </div>
      <div className={styles.platformCardRight}>
        <h2>{title}</h2>
        <div className={styles.imageContainer}>
          <Image src={image} alt={title} width={100} height={250} />
        </div>
        <p>{description}</p>
        <div className={styles.bottomBorder}></div>
      </div>
    </div>
  );
};

export default PlatformCard;
