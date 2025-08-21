import React from "react";
import styles from "./styles.module.scss";
import BrainCircuit from "../../../../public/brain-circuit.svg";
import Image from "next/image";
export default function CardSection() {
  const data = [
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
    {
      title: "AI Powered Development",
      description: "2 features per week with ai assisted Rapid development",
      image: BrainCircuit,
      alt: "brain-circuit",
    },
  ];
  return (
    <div className={styles.CardSection}>
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
  );
}
