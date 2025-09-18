"use client";
import React, { useState, useRef } from "react";
import styles from "../serviceDetail.module.scss";

const OurProcessSmall = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  if (!data || !data.our_process_list) {
    return null;
  }

  const allCards = [];
  
  data.our_process_list.forEach((item, index) => {
    // Add first sub-card
    if (item.sub_title_one && item.desc_one) {
      allCards.push({
        type: 'sub',
        title: item.sub_title_one,
        description: item.desc_one,
        key: `sub1-${index}`
      });
    }
    
    // Add second sub-card
    if (item.sub_title_two && item.desc_two) {
      allCards.push({
        type: 'sub',
        title: item.sub_title_two,
        description: item.desc_two,
        key: `sub2-${index}`
      });
    }
  });

  const getVisibleCards = () => {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1200) return 3;
    return 4;
  };

  const nextSlide = () => {
    const visibleCards = getVisibleCards();
    if (currentIndex < allCards.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.deliverSection}>
      {/* Section Header */}
      <div className={styles.sectionHeader}>
        <div className={styles.headerContent}>
          <h2 className={styles.mainTitle}>What We Deliver</h2>
          <p className={styles.subTitle}>
            Innovative solutions that Boolean and Beyond can create to improve overall experience in Travel Sector
          </p>
        </div>
        <div className={styles.headerArrows}>
          <button 
            className={styles.sliderArrow}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <button 
            className={styles.sliderArrow}
            onClick={nextSlide}
            disabled={currentIndex >= allCards.length - getVisibleCards()}
          >
            →
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper}>
          <div 
            className={styles.sliderTrack}
            ref={sliderRef}
            style={{
              transform: `translateX(-${currentIndex * 350}px)`,
              transition: 'transform 0.3s ease'
            }}
          >
            {allCards.map((card) => (
              <div key={card.key} className={styles.slideCard}>
                <div className={styles.cardTitle}>{card.title}</div>
                <div className={styles.cardDescription}>{card.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcessSmall;
