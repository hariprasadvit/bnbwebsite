import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const HireExpertSection = () => {
  return (
    <section className={styles.hireExpertSection}>
      <div className={styles.container}>
        <div className={styles.illustrationColumn}>
          <div className={styles.illustrationContainer}>
            {/* Placeholder replaced with actual MVP image */}
            <div className={styles.illustration}>
              <Image
                src="/mvp.png"
                alt="MVP Illustration"
                width={500}
                height={500}
                className={styles.mvpImage}
                priority
              />
            </div>
          </div>
        </div>
        
        <div className={styles.contentColumn}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.sectionTitle}>
              MVP and Beyond
              <span className={styles.titleUnderline}></span>
            </h2>
            
            <p className={styles.sectionDescription}>
              At Boolean and Beyond, we specialize in MVP development services that help transform your ideas into functional, market-ready products with speed and precision.
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <h3>Rapid MVP Development</h3>
                <p>Quickly validate your business idea with our streamlined MVP development process that focuses on core functionality.</p>
              </div>
              
              <div className={styles.featureCard}>
                <h3>2 Features Per Week</h3>
                <p>Consistent delivery of high-quality features to keep your product evolving and improving rapidly.</p>
              </div>
              
              <div className={styles.featureCard}>
                <h3>AI + Human Perfection</h3>
                <p>Combining cutting-edge AI tools with expert human oversight for exceptional results.</p>
              </div>
            </div>
            
            <Link href="/contact" className={styles.ctaButton}>
              Hire Our Experts
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={styles.arrowIcon}>
                <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireExpertSection;
