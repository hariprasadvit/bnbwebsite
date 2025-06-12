import React from "react";
import PlatformCard from "./PlatformCard";
import styles from "./platformCard.module.scss";
import platformCardImage from "../../../../public/platformCardImage.png";
import { formatIndex } from "@/lib/utils";

const PlatformCardContainer = ({ data = {} }) => {
  let { listing_card = [] } = data;
  return (
    <div className={styles.platformCardWrapper}>
      {listing_card.map((card, index) => {
        const imageUrl = card?.thumbnail?.url
          ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + card.thumbnail?.url
          : "/fallback-image.png"; // fallback image
        return (
          <>
            <PlatformCard
              key={index}
              number={formatIndex(index)}
              label={card.type}
              title={card.title}
              image={imageUrl}
              description={card.description}
            />
          </>
        );
      })}
    </div>
  );
};

export default PlatformCardContainer;
