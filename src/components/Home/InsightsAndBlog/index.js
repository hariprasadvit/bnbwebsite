import React from "react";
import styles from "../../../styles/page.module.scss";
import Link from "next/link";
export default function InsightsAndBlog({ data = {}, showKnowMore = true }) {
  let { insights_blogs_card, title = "Our Insights and Blog" } = data;

  return (
    <section className={styles.InsightsAndBlog}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.contentList}>
          {insights_blogs_card?.map((item, index) => (
            <div className={styles.content} key={index}>
              <div className={styles.heading}>{item.title}</div>
              <div className={styles.desc}>
                <h4>{item.sub_title}</h4>
                <p>{item.description}</p>
              </div>
              {showKnowMore && (
                <Link href={item.link} className="knowMoreLink">
                  {item.link.button_text}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
