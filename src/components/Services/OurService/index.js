import React from "react";
import styles from "../service.module.scss";
import Image from "next/image";
import serviceImage1 from "../../../../public/ourService.png";
import serviceImage2 from "../../../../public/ourwork.png";
import serviceImage3 from "../../../../public/platformCardImage.png";
import serviceImage4 from "../../../../public/designImage.png";
import Link from "next/link";

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

const OurService = ({ key, data }) => {
  return (
    <div className={styles.ourServiceWrapper} key={key}>
      {data.service_list_item.map((item, id) => (
        <React.Fragment key={id}>
          <div className={styles.ourServiceGroup}>
            <div className={`${styles.ourServiceWrap}`}>
              <div className={styles.ourServiceLeft}>
                <div className={styles.ourServiceTitle}>
                  {id === 0 ? data?.title : ""}
                </div>
              </div>

              <div className={styles.ourServiceRight}>
                <div className={styles.ourServiceContentTitle}>
                  {item?.title}
                </div>
                <div className={styles.ourServiceContentDescription}>
                  {item?.desc}
                </div>
                <div className={styles.ourServiceContentListContainer}>
                  {item?.points.map((points, index) => (
                    <div className={styles.ourServiceContentList} key={index}>
                      {points?.points}
                    </div>
                  ))}
                </div>
                <Link
                  href={item?.link?.link_url}
                  className={styles.exploreButton}
                >
                  {item?.link?.link_text}
                </Link>
              </div>
            </div>
            <div className={`${styles.ourServiceImageWrap} `}>
              <div className={styles.ourServiceLeft}></div>
              <div className={styles.ourServiceImageWrapper}>
                {item?.card?.map((item, index) => {
                  const imageUrl = item?.image?.url
                    ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + item?.image?.url
                    : "/fallback-image.png";
                  return (
                    <div
                      className={styles.ourServiceImageContainer}
                      key={index}
                    >
                      <div className={styles.ourServiceImage}>
                        <Image
                          src={imageUrl}
                          alt={""}
                          width={300}
                          height={51}
                        />
                      </div>
                      <div className={styles.ourServiceImageDetail}>
                        {item?.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default OurService;
