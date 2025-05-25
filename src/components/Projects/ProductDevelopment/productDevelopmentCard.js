"use client";

import React from "react";
import styles from "./pdStyles.module.scss";
import Image from "next/image";
import plusIcon from "../../../../public/plusIcon.svg";
import minusIcon from "../../../../public/minusIcon.svg";

const ProductDevelopmentCard = ({
  number,
  title,
  description,
  isOpen,
  onToggle,
}) => {
  return (
    <div className={styles.productDevelopCard}>
      <div className={styles.topContainer}>
        <div className={styles.labelContainer}>
          <div className={styles.number}>{number}</div>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.iconWrapper} onClick={onToggle}>
          <div className={styles.iconContainer}>
            <Image
              src={isOpen ? minusIcon : plusIcon}
              alt={isOpen ? "Minus Icon" : "Plus Icon"}
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>

      {isOpen && <div className={styles.description}>{description}</div>}
    </div>
  );
};

export default ProductDevelopmentCard;
