"use client";

import React, { useState } from "react";
import ProductDevelopmentCard from "./productDevelopmentCard";
import styles from "./pdStyles.module.scss";
import { formatIndex } from "@/lib/utils";

const ProductDevelopment = ({ data = {} }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  let { title, expansion_card } = data;
  return (
    <div className={styles.productDevelopmentCardWrapper}>
      <div className={styles.pdCardTitle}>{title}</div>
      <div className={styles.productDevCardContainer}>
        <div className={styles.cardDetails}>
          {expansion_card.map((item, index) => (
            <ProductDevelopmentCard
              key={index}
              number={formatIndex(index)}
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
