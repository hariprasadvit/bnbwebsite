"use client";

import React, { useState, useEffect, useRef } from 'react';

const CustomCarousel = ({ children, autoplay = true, autoplaySpeed = 3000, speed = 1200 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const autoplayRef = useRef(null);

  const totalItems = React.Children.count(children);
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setItemsPerView(2);
      } else if (width <= 768) {
        setItemsPerView(3);
      } else if (width <= 1024) {
        setItemsPerView(4);
      } else {
        setItemsPerView(5);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!autoplay) return;

    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => {
          if (prevIndex >= maxIndex) {
            return 0; // Reset to beginning
          }
          return prevIndex + 1;
        });
      }, autoplaySpeed);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    startAutoplay();

    // Pause on hover
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseenter', stopAutoplay);
      container.addEventListener('mouseleave', startAutoplay);
    }

    return () => {
      stopAutoplay();
      if (container) {
        container.removeEventListener('mouseenter', stopAutoplay);
        container.removeEventListener('mouseleave', startAutoplay);
      }
    };
  }, [autoplay, autoplaySpeed, maxIndex]);

  // Handle transition
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, speed);
    return () => clearTimeout(timer);
  }, [currentIndex, speed]);

  // Calculate transform
  const getTransform = () => {
    const itemWidth = 100 / itemsPerView;
    const translateX = -(currentIndex * itemWidth);
    return `translateX(${translateX}%)`;
  };

  return (
    <div 
      ref={containerRef}
      className={styles.carousel}
    >
      <div 
        className={styles.track}
        style={{
          transform: getTransform(),
          transition: isTransitioning ? `transform ${speed}ms ease-in-out` : 'none',
          width: `${(totalItems / itemsPerView) * 100}%`
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div 
            key={index}
            className={styles.slide}
            style={{ width: `${100 / totalItems}%` }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
