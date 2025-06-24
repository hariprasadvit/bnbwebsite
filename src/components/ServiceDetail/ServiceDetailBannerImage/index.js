import React from "react";
import styles from "../serviceDetail.module.scss";
import Image from "next/image";

const ServiceDetailBannerImage = ({
  bannerImage,
  leftSections = [],
  rightParagraphs = [],
  altText = "Banner Image",
  removeRightMarginTop = false,
  isSecondBanner = false, // Pass from parent
}) => {
  return (
    <section className={styles.bannerImage}>
      {bannerImage && (
        <Image
          src={bannerImage}
          alt={altText}
          width={0}
          height={0}
          className={styles.image}
        />
      )}
      <div className={styles.bannerImageBottomContainer}>
        <div className={styles.leftContentContainer}>
          {leftSections.map((section, sectionIndex) => (
            <div className={styles.leftContentWrapper} key={sectionIndex}>
              {section.title && (
                <div className={styles.leftContentTitle}>{section.title}</div>
              )}
              {section.paragraphs.map((para, paraIndex) => (
                <p
                  key={paraIndex}
                  className={
                    isSecondBanner && sectionIndex === 1 && paraIndex === 0
                      ? styles.secondSectionFirstParagraphMargin
                      : ""
                  }
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div
          className={`${styles.rightContentContainer} ${
            removeRightMarginTop ? styles.noMarginTop : ""
          }`}
        >
          {rightParagraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailBannerImage;
