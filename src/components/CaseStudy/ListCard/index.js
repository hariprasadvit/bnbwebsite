import React from "react";
import PlatformCard from "./PlatformCard";
import styles from "./platformCard.module.scss";

const ListCardContainer = ({ data = [] }) => {
  return (
    <div className={styles.platformCardWrapper}>
      {data.map((card, index) => {
        const imageUrl = card.thumnail?.url
          ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + card.thumnail?.url
          : "/fallback-image.png"; // fallback image
        return (
          <>
            <PlatformCard
              key={index}
              number={index + 1}
              label={card.type}
              title={card.title}
              image={imageUrl}
              description={card.description}
              link={card.case_study_detail.slug}
            />
          </>
        );
      })}
    </div>
  );
};

export default ListCardContainer;
