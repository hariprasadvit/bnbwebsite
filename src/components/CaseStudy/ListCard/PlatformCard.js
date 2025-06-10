// components/PlatformCard.jsx or .tsx if using TypeScript
import React from "react";
import styles from "./platformCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const PlatformCard = ({
  number,
  label,
  title,
  image,
  description,
  link,
  hideBorderBottom,
}) => {
  return (
    <div className={styles.platformCardContent}>
      <div className={styles.platformCardLeft}>
        <h1>{number}</h1>
        <h2>({label})</h2>
      </div>
      <Link href={`/case-study/${link}`}>
        <div className={styles.platformCardRight}>
          <h2>{title}</h2>
          <div className={styles.imageContainer}>
            <Image src={image} alt={title} width={314} height={250} />
          </div>
          <p>{description}</p>
          {!hideBorderBottom && <div className={styles.bottomBorder}></div>}
        </div>
      </Link>
    </div>
  );
};

export default PlatformCard;
