import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import BrainCircuit from "../../../../public/brain-circuit.svg";
import RealEstateWhite from "../../../../public/sign-real-estate-white.svg";
import RealEstate from "../../../../public/sign-real-estate.svg";
import personWhite from "../../../../public/personWhite.svg";

export default function ChatSection() {
  return (
    <div className={styles.ChatSection}>
      <div className={styles.ChatContainer}>
        <h2>
          Lets Build <strong> Something Amazing together</strong>
        </h2>
        <p>
          We help businesses turn bold ideas into functional, user-validated
          MVPs through a thoughtful, data-driven strategy.
        </p>
        <div className={styles.chatArea}>
          <div className={styles.chatReply}>
            <div className={styles.left}>
              <div className={styles.imgWrap}>
                <Image src={BrainCircuit} alt="chat" width={50} height={50} />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.para}>
                Our collaboration with Mahindra involved creating an experience
                for their users that reflected their brand values and
                eco-friendly services. Mahindra was seeking a design that
                embodied the principles of Glyd and enabled them to launch their
                first electric cab service, which we able to deliver
                successfully.
              </div>
              <div className={styles.para}>
                Our collaboration with Mahindra involved creating an experience
                for their users that reflected their brand values and
                eco-friendly services. Mahindra was seeking a design that
                embodied the principles of Glyd and enabled them to launch their
                first electric cab service, which we able to deliver
                successfully.
              </div>
              <div className={styles.quesWithOption}>
                <div className={styles.quesWithOptionContainer}>
                  <div className={styles.ques}>
                    Which Industry you are part of ?
                  </div>
                  <div className={styles.desc}>
                    Our collaboration with Mahindra involved creating an
                    experience for their users that reflected their brand values
                    and eco-friendly services. Mahindra was seeking a design
                    that embodied the principles of Glyd and enabled them to
                    launch their first electric cab service, which we able to
                    deliver successfully.
                  </div>
                  <div className={styles.options}>
                    <div className={styles.option}>
                      <Image
                        src={RealEstate}
                        alt="chat"
                        width={27}
                        height={27}
                        className={styles.iconDefault}
                      />
                      <Image
                        src={RealEstateWhite}
                        alt="chat"
                        width={27}
                        height={27}
                        className={styles.iconHover}
                      />
                      <span>Real Estate</span>
                    </div>
                    <div className={styles.option}>
                      <Image
                        src={RealEstate}
                        alt="chat"
                        width={27}
                        height={27}
                        className={styles.iconDefault}
                      />
                      <Image
                        src={RealEstateWhite}
                        alt="chat"
                        width={27}
                        height={27}
                        className={styles.iconHover}
                      />
                      <span>Real Estate</span>
                    </div>
                    <div className={styles.option}>
                      <Image
                        src={RealEstate}
                        alt="chat"
                        width={27}
                        height={27}
                        className={styles.iconDefault}
                      />
                      <Image
                        src={RealEstateWhite}
                        alt="chat"
                        width={27}
                        height={27}
                        className={styles.iconHover}
                      />
                      <span>Real Estate</span>
                    </div>
                    <div className={styles.option}>
                      <Image
                        src={RealEstate}
                        alt="chat"
                        width={27}
                        height={27}
                        className={styles.iconDefault}
                      />
                      <Image
                        src={RealEstateWhite}
                        alt="chat"
                        width={27}
                        height={27}
                        className={styles.iconHover}
                      />
                      <span>Real Estate</span>
                    </div>
                    <div className={styles.option}>
                      <Image
                        src={RealEstate}
                        alt="chat"
                        width={27}
                        height={27}
                        className={styles.iconDefault}
                      />
                      <Image
                        src={RealEstateWhite}
                        alt="chat"
                        width={27}
                        height={27}
                        className={styles.iconHover}
                      />
                      <span>Real Estate</span>
                    </div>
                    <div className={styles.option}>
                      <Image
                        src={RealEstate}
                        alt="chat"
                        width={27}
                        height={27}
                        className={styles.iconDefault}
                      />
                      <Image
                        src={RealEstateWhite}
                        alt="chat"
                        width={27}
                        height={27}
                        className={styles.iconHover}
                      />
                      <span>Real Estate</span>
                    </div>
                  </div>
                </div>
                <div className={styles.btnWrap}>
                  <button className={styles.redBtn}>Continue</button>
                  <button className={styles.linkBtn}>Something Else</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.chatRequest}>
            <div className={styles.left}>
              <div className={styles.para}>
                Our collaboration with Mahindra involved creating an experience
                for their users that reflected their brand values and
                eco-friendly services. Mahindra was seeking a design that
                embodied the principles of Glyd and enabled them to launch their
                first electric cab service, which we able to deliver
                successfully.
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.imgWrapchatRequest}>
                <Image src={personWhite} alt="chat" width={50} height={50} />
              </div>
            </div>
          </div>
          <div className={styles.chatBox}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              placeholder="Type your message here"
              res
            ></textarea>
            <button className={styles.redBtn}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
