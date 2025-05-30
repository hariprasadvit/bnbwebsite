"use client";

import React, { useState } from "react";
import ProductDevelopmentCard from "./productDevelopmentCard";
import styles from "./pdStyles.module.scss";

const ProductDevelopment = ({ title, productDevelopmentData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.productDevelopmentCardWrapper}>
      <div className={styles.pdCardTitle}>{title}</div>
      <div className={styles.productDevCardContainer}>
        <div className={styles.cardDetails}>
          {productDevelopmentData.map((item, index) => (
            <ProductDevelopmentCard
              key={index}
              number={item.number}
              title={item.title}
              description={item.description}
              isOpen={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDevelopment;
