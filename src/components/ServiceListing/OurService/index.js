import React from "react";
import styles from "../service.module.scss";
import Image from "next/image";
import serviceImage1 from "../../../../public/ourService.png";
import serviceImage2 from "../../../../public/ourwork.png";
import serviceImage3 from "../../../../public/platformCardImage.png";
import serviceImage4 from "../../../../public/designImage.png";

const services = [
  {
    id: "research",
    leftTitle: "Our Services",
    rightTitle: "Research",
    description:
      "The methodical study of users to derive user insights in order to validate hypotheses, generate new product ideas, & identify new market opportunities that lay the groundwork for empathy-driven designs.",
    lists: [
      "Qualitative Research",
      "Qualitative Research",
      "Usability Testing",
      "Usability Testing",
      "Competitor Analysis",
      "Competitor Analysis",
    ],
    exploreText: "Explore Research",
    images: [
      {
        src: serviceImage1,
        alt: "Service Image",
        detail: "Digital Product Development for BCCI to Engage Cricket Fans",
      },
      {
        src: serviceImage2,
        alt: "Service Image",
        detail: "Mapping the Eco Friendly Route for Mahindra Glyd",
      },
    ],
    wrapClassName: "",
    imageWrapClassName: "",
  },
  {
    id: "design",
    leftTitle: "",
    rightTitle: "Design",
    description:
      "The methodical study of users to derive user insights in order to validate hypotheses, generate new product ideas, & identify new market opportunities that lay the groundwork for empathy-driven designs.",
    lists: [
      "Qualitative Research",
      "Qualitative Research",
      "Usability Testing",
      "Usability Testing",
      "Competitor Analysis",
      "Competitor Analysis",
    ],
    exploreText: "Explore Design",
    images: [
      {
        src: serviceImage3,
        alt: "Service Image",
        detail: "Digital Product Development for BCCI to Engage Cricket Fans",
      },
      {
        src: serviceImage4,
        alt: "Service Image",
        detail: "Creating a Digital Storefront for a Wholesale Expert",
      },
    ],
    wrapClassName: styles.ourServiceWrapSecond,
    imageWrapClassName: styles.ourServiceImageWrapSecond,
  },
];

const OurService = () => {
  return (
    <div className={styles.ourServiceWrapper}>
      {services.map(
        ({
          id,
          leftTitle,
          rightTitle,
          description,
          lists,
          exploreText,
          images,
          wrapClassName,
          imageWrapClassName,
        }) => (
          <React.Fragment key={id}>
            <div className={`${styles.ourServiceWrap} ${wrapClassName}`}>
              <div className={styles.ourServiceLeft}>
                <div className={styles.ourServiceTitle}>{leftTitle}</div>
              </div>
              <div className={styles.ourServiceRight}>
                <div className={styles.ourServiceContentTitle}>
                  {rightTitle}
                </div>
                <div className={styles.ourServiceContentDescription}>
                  {description}
                </div>
                <div className={styles.ourServiceContentListContainer}>
                  {lists.map((listItem, index) => (
                    <div
                      className={styles.ourServiceContentList}
                      key={`${id}-list-${index}`}
                    >
                      {listItem}
                    </div>
                  ))}
                </div>
                <div className={styles.exploreButton}>{exploreText}</div>
              </div>
            </div>
            <div
              className={`${styles.ourServiceImageWrap} ${imageWrapClassName}`}
            >
              <div className={styles.ourServiceLeft}></div>
              <div className={styles.ourServiceImageWrapper}>
                {images.map(({ src, alt, detail }, idx) => (
                  <div
                    className={styles.ourServiceImageContainer}
                    key={`${id}-img-${idx}`}
                  >
                    <div className={styles.ourServiceImage}>
                      <Image src={src} alt={alt} />
                    </div>
                    <div className={styles.ourServiceImageDetail}>{detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default OurService;
