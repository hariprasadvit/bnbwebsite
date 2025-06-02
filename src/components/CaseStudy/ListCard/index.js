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

const ListCardContainer = () => {
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

export default ListCardContainer;
