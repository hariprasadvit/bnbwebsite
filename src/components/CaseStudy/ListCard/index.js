import React from "react";
import PlatformCard from "./PlatformCard";
import styles from "./platformCard.module.scss";
import platformCardImage from "../../../../public/platformCardImage.png";

export const platformCards = [
  {
    number: "01",
    label: "Case Study",
    title: "SaaS products, B2C platforms, marketplaces",
    image: platformCardImage,
    description:
      "From SaaS tools to consumer platforms and marketplaces, we shape MVPs that are lean, testable, and launch-ready. Our focus: build what matters, validate fast, and adapt with insight. Because the first version should do more than exist—it should perform.",
  },
  {
    number: "02",
    label: "Case Study",
    title: "SaaS products, B2C platforms, marketplaces",
    image: platformCardImage,
    description:
      "From SaaS tools to consumer platforms and marketplaces, we shape MVPs that are lean, testable, and launch-ready. Our focus: build what matters, validate fast, and adapt with insight. Because the first version should do more than exist—it should perform.",
  },
  {
    number: "03",
    label: "Case Study",
    title: "SaaS products, B2C platforms, marketplaces",
    image: platformCardImage,
    description:
      "From SaaS tools to consumer platforms and marketplaces, we shape MVPs that are lean, testable, and launch-ready. Our focus: build what matters, validate fast, and adapt with insight. Because the first version should do more than exist—it should perform.",
  },
];

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
