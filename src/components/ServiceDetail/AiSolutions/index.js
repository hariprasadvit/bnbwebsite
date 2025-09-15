"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "../serviceDetail.module.scss";

export default function AiSolutions({ data, whiteBG }) {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.aiSolutionsSection} ${
        whiteBG ? styles.whiteBG : ""
      }`}
      style={{
        background: '#000000',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 0'
      }}
    >
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(212, 65, 22, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 20s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(255, 107, 61, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 25s ease-in-out infinite reverse'
      }}></div>
      
      <div className={styles.container} style={{
        background: 'transparent',
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px'
      }}>
        <h2
          style={{
            color: '#ffffff',
            fontSize: '42px',
            fontWeight: '700',
            lineHeight: '48px',
            marginBottom: '30px',
            maxWidth: '590px'
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: '24px',
              fontWeight: '300',
              color: '#868585',
              lineHeight: '32px',
              marginBottom: '8px'
            }}
          >
            {data.pre_title}
          </span>
          {data.title}
        </h2>
        <div 
          className={styles.description}
          style={{
            color: '#cccccc',
            fontSize: '21px',
            lineHeight: '36px',
            marginBottom: '40px',
            fontWeight: '300'
          }}
        >
          {data.desc}
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px'
        }}>
          {data?.second_section_list.map((item, index) => (
            <div 
              key={index} 
              data-index={index}
              className={styles.solutionListContainer}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '32px 24px',
                transition: 'all 0.3s ease',
                transform: visibleItems.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleItems.includes(index) ? 1 : 0,
                transitionDelay: `${index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = visibleItems.includes(index) ? 'translateY(0)' : 'translateY(30px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div 
                className={styles.title}
                style={{
                  color: '#ffffff',
                  fontWeight: '600',
                  fontSize: '27px',
                  lineHeight: '1.4',
                  marginBottom: '16px'
                }}
              >
                {item.title}
              </div>
              <div
                className={`${styles.description} ${styles.descriptionWidth}`}
                style={{
                  color: '#cccccc',
                  fontSize: '18px',
                  lineHeight: '1.6',
                  fontWeight: '300',
                  margin: 0
                }}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
