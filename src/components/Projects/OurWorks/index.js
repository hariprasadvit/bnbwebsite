// "use client";
// import React, { useRef } from "react";
// import Image from "next/image";
// import styles from "./OurWorks.module.scss";

// const workItems = [
//     {
//         image: "/ourwork.png",
//         text: "Mapping the Eco Friendly Route for Mahindra Glyd",
//         highlight: "Our collaboration with Mahindra involved creating an experience for their users that reflected their brand values and eco-friendly services. Mahindra was seeking a design that embodied the principles of Glyd and enabled them to launch their first electric cab service, which we able to deliver successfully.",

//     },
//     {
//         image: "/ourwork.png",
//         text: "Mapping the Eco Friendly Route for Mahindra Glyd",
//         highlight: "Our collaboration with Mahindra involved creating an experience for their users that reflected their brand values and eco-friendly services. Mahindra was seeking a design that embodied the principles of Glyd and enabled them to launch their first electric cab service, which we able to deliver successfully.",

//     },
//     {
//         image: "/ourwork.png",
//         text: "Mapping the Eco Friendly Route for Mahindra Glyd",
//         highlight: "Our collaboration with Mahindra involved creating an experience for their users that reflected their brand values and eco-friendly services. Mahindra was seeking a design that embodied the principles of Glyd and enabled them to launch their first electric cab service, which we able to deliver successfully.",

//     },
// ];

// const OurWorks = () => {
//     const scrollRef = useRef(null);

//     const scrollLeft = () => {
//         scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
//     };

//     const scrollRight = () => {
//         scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
//     };

//     return (
//         <section className={styles.ourWorks}>
//             <div className={styles.topHeader}>
//                 <div className={styles.heading}>
//                     <h2>
//                         Some of our <br />
//                         <strong>Impactful work</strong>
//                     </h2>
//                 </div>
//                 <div className={styles.arrows}>
//                     <button onClick={scrollLeft}>←</button>
//                     <button onClick={scrollRight}>→</button>
//                 </div>
//             </div>

//             <div className={styles.scrollWrapper} ref={scrollRef}>
//                 {workItems.map((item, index) => (
//                     <div
//                         className={styles.workCard}
//                         key={index}
//                         style={{ backgroundColor: item.bg }}
//                     >
//                         <div className={styles.imageWrap}>
//                             <Image src={item.image} alt="Work" width={582} height={431} />
//                         </div>
//                         <div className={styles.textContent}>
//                             <h3>{item.text}</h3>
//                             <p className={styles.highlight}>{item.highlight}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default OurWorks;



"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./OurWorks.module.scss"; // keep your original SCSS

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const workItems = [
    {
        image: "/ourwork.png",
        text: "Mapping the Eco Friendly Route for Mahindra Glyd",
        highlight:
            "Our collaboration with Mahindra involved creating an experience for their users that reflected their brand values and eco-friendly services. Mahindra was seeking a design that embodied the principles of Glyd and enabled them to launch their first electric cab service, which we were able to deliver successfully.",
    },
    {
        image: "/ourwork.png",
        text: "Mapping the Eco Friendly Route for Mahindra Glyd",
        highlight:
            "Our collaboration with Mahindra involved creating an experience for their users that reflected their brand values and eco-friendly services. Mahindra was seeking a design that embodied the principles of Glyd and enabled them to launch their first electric cab service, which we were able to deliver successfully.",
    },
    {
        image: "/ourwork.png",
        text: "Mapping the Eco Friendly Route for Mahindra Glyd",
        highlight:
            "Our collaboration with Mahindra involved creating an experience for their users that reflected their brand values and eco-friendly services. Mahindra was seeking a design that embodied the principles of Glyd and enabled them to launch their first electric cab service, which we were able to deliver successfully.",
    },
];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={`${className} ${styles.customArrow}`}
            style={{ ...style }}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="20"
                height="20"
            >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
        </div>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={`${className} ${styles.customArrow} ${styles.customArrowLeft}`}
            style={{ ...style }}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="20"
                height="20"
            >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
        </div>
    );
}

const OurWorks = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        centerMode: true,
        centerPadding: "0px",
    };


    return (
        <div className={styles.ourWorks}>
            <div className={styles.topHeader}>
                <h2>
                    Some of our <br />
                    <strong>Impactful work</strong>
                </h2>


            </div>

            <Slider {...settings}>
                {workItems.map((item, index) => (
                    <div key={index} className={styles.slide}>
                        <div className={styles.cardLayout}>
                            <div className={styles.imageSection}>
                                <Image src={item.image} alt="Our Work" width={582} height={431} />
                            </div>
                            <div className={styles.textSection}>
                                <h3>{item.text}</h3>
                                <p>{item.highlight}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>

    );
};

export default OurWorks;
