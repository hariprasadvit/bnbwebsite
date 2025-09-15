"use client";

import React, { useEffect, useState } from "react";
import styles from "../../../styles/page.module.scss";
import Image from "next/image";
import Select from "react-select";
import { formatIndex } from "@/lib/utils";
import { getIndustryImage, getImageForCard } from "./images";

export default function DataDriven({
  data = {},
  showDataDrivenImg = true,
  titleMaxWidth,
  titleMarginBottom,
  whiteBg,
  industryPage = false,
  industrySlug = '',
}) {
  let { title = "Make data driven decisions with real - Time insights", card } =
    data;
  
  // Debug log to verify component is receiving industryPage prop and industrySlug
  console.log('DataDriven rendering with:', {
    industryPage,
    industrySlug,
    title,
    'card data': card,
    'card type': typeof card,
    'is array': Array.isArray(card),
    'card keys': card ? Object.keys(card) : 'no card data',
    'first card': card?.[0] ? {
      id: card[0].id,
      slug: card[0].slug,
      title: card[0].title,
      'has image': !!card[0].image,
      'image type': typeof card[0]?.image,
      'all keys': Object.keys(card[0] || {})
    } : 'no first card'
  });
  
  const [activeMenu, setActiveMenu] = useState("");
  const [mobile, setMobile] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  
  const isMobileView = () => window.innerWidth <= 978;

  // Get the active card based on the current context
  const activeCard = React.useMemo(() => {
    console.log('Finding active card with:', { industryPage, industrySlug, activeMenu, card });
    if (industryPage && industrySlug && card?.length) {
      const found = card.find(c => c.slug === industrySlug) || card[0];
      console.log('Industry page - found card:', found);
      return found;
    }
    const found = card?.find(item => item.id === activeMenu) || card?.[0];
    console.log('Home page - found card:', found);
    return found;
  }, [card, industryPage, industrySlug, activeMenu]);

  useEffect(() => {
    const handleResize = () => setMobile(isMobileView());
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set initial active menu based on the context
  useEffect(() => {
    if (card?.length) {
      // On industry pages, find the matching card by slug
      if (industryPage && industrySlug) {
        const matchingCard = card.find(c => c.slug === industrySlug);
        if (matchingCard) {
          console.log('Found matching card for industry:', matchingCard);
          setActiveMenu(matchingCard.id);
          return;
        }
      }
      // Default to first card if no match or on home page
      if (card[0]?.id) {
        setActiveMenu(card[0].id);
      }
    }
  }, [card, industryPage, industrySlug]);
  
  // Debug effect for active menu changes and trigger flash animation
  useEffect(() => {
    console.log('Active menu changed to:', activeMenu);
    const activeCard = card?.find(item => item.id === activeMenu);
    if (activeCard) {
      console.log('Active card details:', activeCard);
      // Trigger flash animation when menu changes
      setIsFlashing(true);
      const timer = setTimeout(() => setIsFlashing(false), 600);
      return () => clearTimeout(timer);
    }
  }, [activeMenu, card]);

  const selectOptions = card?.map((item) => ({
    id: item.id,
    value: item.id,
    label: item.title,
  }));

  const selectedOption = selectOptions?.find(
    (option) => option.id === activeMenu
  );

  return (
    <section
      className={`${styles.dataDriven} ${whiteBg ? styles.whiteBg : ""} ${industryPage ? styles.industryEnhanced : ""}`}
      style={industryPage ? {
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
        position: 'relative',
        overflow: 'hidden'
      } : {}}
    >
      <div className={styles.container}>
        <div
          className={styles.sectionTop}
          style={
            mobile
              ? {}
              : { maxWidth: titleMaxWidth, marginBottom: titleMarginBottom }
          }
        >
          <h2 style={industryPage ? {
            color: '#ffffff',
            background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          } : {}}>{title}</h2>
        </div>
        <div className={styles.sectionBottom}>
          <div
            className={`${styles.sectionBottomContainer} ${
              !showDataDrivenImg ? styles.noImage : ""
            }`}
          >
            <div className={styles.points}>
              {mobile ? (
                <div className={styles.mobilePoints}>
                  <Select
                    instanceId="dataDrivenMobileSelect"
                    options={selectOptions}
                    value={selectedOption}
                    onChange={(selected) => {
                      setActiveMenu(selected.id);
                      setIsFlashing(true);
                      setTimeout(() => setIsFlashing(false), 400);
                    }}
                    getOptionValue={(option) => option.id}
                    styles={{
                      option: (base, state) => ({
                        ...base,
                        backgroundColor:
                          state.isSelected || state.isFocused ? "#000" : "#fff",
                        color:
                          state.isSelected || state.isFocused ? "#fff" : "#000",
                        cursor: "pointer",
                      }),
                      container: (base) => ({
                        ...base,
                        width: "100%",
                      }),
                      control: (base) => ({
                        ...base,
                        borderColor: "#000",
                        boxShadow: "none",
                        "&:hover": {
                          borderColor: "#000",
                        },
                      }),
                      singleValue: (base) => ({
                        ...base,
                        color: "#000",
                      }),
                    }}
                  />
                </div>
              ) : (
                card?.map((item, index) => (
                  <div
                    key={item.id}
                    className={
                      activeMenu === item.id
                        ? styles.showPoints + " " + styles.pointList
                        : styles.pointList
                    }
                    style={industryPage ? {
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '20px',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      color: '#ffffff'
                    } : {}}
                    onMouseEnter={() => {
                      console.log('Hover triggered for:', item.title);
                      setActiveMenu(item.id);
                      setIsFlashing(true);
                      console.log('isFlashing set to true');
                      setTimeout(() => {
                        setIsFlashing(false);
                        console.log('isFlashing set to false');
                      }, 800);
                    }}
                    onClick={() => {
                      setActiveMenu(item.id);
                      setIsFlashing(true);
                      setTimeout(() => setIsFlashing(false), 800);
                    }}
                  >
                    <span>{formatIndex(index)}</span>
                    {/* <strong>{item.label.replace(`${item.value} `, "")}</strong> */}
                    <strong>{item.title}</strong>
                  </div>
                ))
              )}
            </div>
            <div className={styles.desc} style={industryPage ? {
              color: '#cccccc',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            } : {}}>
              {card?.map((_item, index) => (
                <div
                  className={activeMenu === _item.id ? styles.showDesc : null}
                  key={_item.id}
                  style={industryPage ? { color: '#cccccc' } : {}}
                >
                  {_item.description}
                </div>
              ))}
            </div>
            {showDataDrivenImg && (
              <div className={styles.imgWrap}>
                {/* Render videos for select industries for richer visuals */}
                {activeCard?.title?.includes('Fintech') ? (
                  <video
                    className={isFlashing ? styles.flashAnimation : ''}
                    src={"https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2F7174d9bbe43448dd8cdefa897b8ad976?alt=media&token=49237d6d-ff18-40d5-9459-9743dce9ac3a&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '900px',
                      display: 'block',
                      margin: '0 auto',
                      transition: 'all 0.3s ease',
                      borderRadius: '12px'
                    }}
                  />
                ) : activeCard?.title?.includes('Education') ? (
                  <video
                    className={isFlashing ? styles.flashAnimation : ''}
                    src={"https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2Ff6bbb28e48fc4bb6883c800dc19ef87e?alt=media&token=5e77f6f2-786d-4f10-8eb1-17c832d8fb1e&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '900px',
                      display: 'block',
                      margin: '0 auto',
                      transition: 'all 0.3s ease',
                      borderRadius: '12px'
                    }}
                  />
                ) : activeCard?.title?.includes('Healthcare') || activeCard?.title?.includes('Wellness') ? (
                  <video
                    className={isFlashing ? styles.flashAnimation : ''}
                    src={"https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2Ff8ab582318854e5eaba070306f2be69d?alt=media&token=30831a78-9ad0-4328-aa28-7b0b707df97c&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '900px',
                      display: 'block',
                      margin: '0 auto',
                      transition: 'all 0.3s ease',
                      borderRadius: '12px'
                    }}
                  />
                ) : activeCard?.title?.includes('Retail') || activeCard?.title?.includes('E-commerce') ? (
                  <video
                    className={isFlashing ? styles.flashAnimation : ''}
                    src={"https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2Fb4776f61634d44569033ee091cea67be?alt=media&token=8fb323c3-e9f9-4b10-a3e6-33b9a4c668e2&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '900px',
                      display: 'block',
                      margin: '0 auto',
                      transition: 'all 0.3s ease',
                      borderRadius: '12px'
                    }}
                  />
                ) : (
                  // Render video for Media and Logistics, otherwise a fallback image
                  activeCard?.title?.includes('Media') || activeCard?.title?.includes('Content') ? (
                    <video
                      className={isFlashing ? styles.flashAnimation : ''}
                      src={"https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2F5ab152a3f19b48d8b7eb172aa15621aa?alt=media&token=64c8c1f2-e635-450a-9474-e66b3622c410&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"}
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: '900px',
                        display: 'block',
                        margin: '0 auto',
                        transition: 'all 0.3s ease',
                        borderRadius: '12px'
                      }}
                    />
                  ) : activeCard?.title?.includes('Logistics') || activeCard?.title?.includes('Supply') ? (
                    <video
                      className={isFlashing ? styles.flashAnimation : ''}
                      src={"https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2Fb6602e5f1f0d48fb99ebd570f251f6e5?alt=media&token=55207958-3585-4511-ae21-317b179bf8a8&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"}
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: '900px',
                        display: 'block',
                        margin: '0 auto',
                        transition: 'all 0.3s ease',
                        borderRadius: '12px'
                      }}
                    />
                  ) : (
                    <img
                      className={isFlashing ? styles.flashAnimation : ''}
                      src={'/Home/dataDriven.svg'}
                      alt={activeCard?.title || 'Industry Image'}
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: '900px',
                        display: 'block',
                        margin: '0 auto',
                        transition: 'all 0.3s ease',
                        borderRadius: '12px'
                      }}
                      onError={(e) => {
                        e.target.src = '/Home/dataDriven.svg';
                      }}
                    />
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
