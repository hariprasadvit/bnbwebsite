import React from "react";
import styles from "../../../styles/page.module.scss";
import Link from "next/link";
export default function InsightsAndBlog() {
  const content = [
    {
      heading: "Scalable Search",
      subHead: "Discovery Engine for Sports Network",
      desc: "Our AI-driven intelligent agents enhance automation, decision-making, and personalization across industries",
      link: "#",
    },
    {
      heading: "Architecture Resilence",
      subHead: "Discovery Engine for Sports Network",
      desc: "Our AI-driven intelligent agents enhance automation, decision-making, and personalization across industries",
      link: "#",
    },
    {
      heading: "Blockchain Powered",
      subHead: "Discovery Engine for Sports Network",
      desc: "Our AI-driven intelligent agents enhance automation, decision-making, and personalization across industries",
      link: "#",
    },
  ];
  return (
    <section className={styles.InsightsAndBlog}>
      <div className={styles.container}>
        <h2>Our Insights and Blog</h2>
        <div className={styles.contentList}>
          {content.map((item, index) => (
            <div className={styles.content} key={index}>
              <div className={styles.heading}>{item.heading}</div>
              <div className={styles.desc}>
                <h4>{item.subHead}</h4>
                <p>{item.desc}</p>
              </div>
              <Link href={item.link} className="knowMoreLink">
                Know More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
