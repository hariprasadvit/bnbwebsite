import React from "react";
import styles from "./styles.module.scss";
import BrainCircuit from "../../../../public/brain-circuit.svg";
import Image from "next/image";
export default function WhyChoose() {
  const data = [
    {
      title: "Rapid MVP Development",
      description: "2 features per week with ai assisted Rapid development",
      image: BrainCircuit,
      alt: "brain-circuit",
    },
    {
      title: "AI Powered Development",
      description: "2 features per week with ai assisted Rapid development",
      image: BrainCircuit,
      alt: "brain-circuit",
    },
    {
      title: "AI Powered Development",
      description: "2 features per week with ai assisted Rapid development",
      image: BrainCircuit,
      alt: "brain-circuit",
    },
  ];
  return (
    <div className={styles.WhyChooseSection}>
      <div className={styles.WhyChooseContainer}>
        <div className={styles.title}>
          <h2>
            SHIP MAP’S FASTER WITH
            <span>AI + HUMAN EXPERTISE</span>
          </h2>
          <p>
            We help businesses turn bold ideas into functional, user-validated
            MVPs through a thoughtful, data-driven strategy. From initial
            discovery to launch, our approach ensures every feature supports
            your core value proposition and business goals.
          </p>
        </div>
        <div className={styles.CardContainer}>
          {data.map((item, index) => (
            <div className={styles.cardItem} key={index}>
              <div className={styles.imageContainer}>
                <Image src={item.image} alt={item.alt} width={35} height={35} />
              </div>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
