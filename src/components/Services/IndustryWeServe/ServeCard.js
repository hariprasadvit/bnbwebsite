import React from "react";
import styles from "../service.module.scss";
import Image from "next/image";

const ServeCard = ({ serveIcon, serveTitle, desc }) => {
  return (
    <div className={styles.ourServeCard}>
      <Image src={serveIcon} alt="Icon" />
      <div className={styles.serveTitle}>{serveTitle}</div>
      <div className={styles.overlay}>{desc}</div>
    </div>
  );
};

export default ServeCard;
