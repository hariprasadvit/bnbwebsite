import React from "react";
import PlatformCard from "./PlatformCard";
import styles from "./platformCard.module.scss";
import platformCardImage from "../../../../public/platformCardImage.png";

const PlatformCardContainer = ({ platformCards }) => {
  return (
    <div className={styles.platformCardWrapper}>
      {platformCards.map((card, index) => (
        <PlatformCard
          key={index}
          number={card.number}
          label={card.label}
          title={card.title}
          image={card.image}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default PlatformCardContainer;
