"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function HireWithForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [details, setDetails] = useState({
    data: {
      service_list: [],
      project_goal: "",
      name: "",
      company_name: "",
      email_id: "",
      phone_number: "",
      budget: "Can't Reveal",
      platform: "BNB",
    },
    error: {},
  });
  const KEYS_FOR_VALIDATION = [
    "project_goal",
    "name",
    "company_name",
    "email_id",
    "service_list",
    "budget",
    "phone_number",
  ];
  const ERR_NAMES = {
    project_goal: "Project Goal",
    name: "Name",
    company_name: "Company Name",
    email_id: "Email ID",
    service_list: "Service",
    budget: "Budget",
    phone_number: "Mobile Number",
  };

  const onChange = (val, key) => {
    let detailsData = { ...details };
    if (key === "service_list") {
      let serviceList = [...detailsData.data[key]];
      if (serviceList.includes(val)) {
        serviceList.splice(serviceList.indexOf(val), 1);
      } else {
        serviceList.push(val);
      }
      detailsData.data[key] = serviceList;
    } else detailsData.data[key] = val;
    detailsData.error = detailsData.error || {};
    detailsData.error[key] = val
      ? false
      : KEYS_FOR_VALIDATION.includes(key) && `${ERR_NAMES[key]} is required`;
    setDetails(detailsData);
  };

  const onSubmit = () => {
    let detailsData = { ...details };
    const keys = Object.keys(detailsData.data);
    let error = false;
    let filters = keys.filter(
      (d) =>
        KEYS_FOR_VALIDATION.includes(d) &&
        (Array.isArray(details.data[d])
          ? !details.data[d].length
          : !details.data[d])
    );
    console.log(detailsData.data);

    if (filters.length > 0) {
      filters.map((d) => {
        detailsData.error[`${d}`] = ERR_NAMES[d] + " is required";
      });
      error = true;
      setDetails(detailsData);
    }
    console.log(detailsData.data);

    let regexResponse = emailRegex(detailsData.data.email_id);
    if (regexResponse) {
      detailsData.error.email_id = "Enter Valid Email Address";
      setDetails(detailsData);
      error = true;
    }
    console.log(detailsData.data);
    if (error) {
      return;
    }
    setDisabled(true);
    axios
      .post(
        "https://nlbfiimoxl.execute-api.ap-south-1.amazonaws.com/dev/contactus",
        detailsData.data
      )
      .then((res) => {
        setDetails({
          data: {
            service_list: [],
            project_goal: "",
            name: "",
            company_name: "",
            email_id: "",
            phone_number: "",
            budget: "",
          },
          error: {},
        });
        setSuccessMessage(
          "Thanks for Contacting Us. Our Team Will Get Back to You Shortly"
        );
        setDisabled(false);

        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
        return res.data.data;
      })
      .catch((err) => {
        setDisabled(false);
        if (
          err.response &&
          err.response.data &&
          err.response.data.error &&
          Object.keys(err.response.data.error) &&
          Object.keys(err.response.data.error).length
        ) {
          detailsData.error = detailsData.error || {};
          err.response.data.error.map((item) => {
            detailsData.error[item.path] = item.message;
          });
          setDetails(detailsData);
          return;
        }
        // responseToast(err || "Something went wrong");
      });
  };
  return (
    <section className={styles.contactBannerWithForm}>
      <div className={`${styles.contactBannerLeft}`}>
        <div className={styles.contactBannerWithFormTitle}>
          Hire Our Experts
        </div>
        <div className={styles.contactBannerWithFormDescription}>
          <p>Need hands-on talent to speed up your roadmap?</p>
          <p>
            Embed our developers, designers, and AI engineers into your team. We
            bring deep expertise in modern stacks, so you can ship faster,
            without the hiring overhead.
          </p>
        </div>
      </div>
      <div className={`${styles.contactBannerRight}`}>
        <form className={styles.contactForm}>
          <div className={styles.inputWidth}>
            <div className={styles.inputWrapper}>
              <input
                placeholder="Name*"
                type="text"
                // required
                onChange={(e) => onChange(e.target.value, "name")}
                value={details.data.name}
              />
              <span style={{ opacity: 1 }}>{details.error.name}</span>
            </div>
            <div className={styles.inputWrapper}>
              <input
                placeholder="Email*"
                type="email"
                // required
                onChange={(e) => onChange(e.target.value, "email_id")}
                value={details.data.email_id}
              />
              <span style={{ opacity: 1 }}>{details.error.email_id}</span>
            </div>
          </div>

          <div className={styles.inputWidth}>
            <div className={styles.inputWrapper}>
              <input
                placeholder="Company/Product Name*"
                type="text"
                onChange={(e) => onChange(e.target.value, "company_name")}
                value={details.data.company_name}
              />
              <span style={{ opacity: 1 }}>{details.error.company_name}</span>
            </div>
            <div className={styles.inputWrapper}>
              <input
                placeholder="Mobile Number"
                type="number"
                onChange={(e) => onChange(e.target.value, "phone_number")}
                onKeyDown={(e) => {
                  if (
                    e.key === "ArrowUp" ||
                    e.key === "ArrowDown" ||
                    e.key === "-" ||
                    e.key === "+" ||
                    e.key === "e" ||
                    e.key === "E"
                  ) {
                    e.preventDefault();
                  }
                }}
                onWheel={(e) => e.target.blur()}
                value={details.data.phone_number}
              />
              <span style={{ opacity: 1 }}>{details.error.phone_number}</span>
            </div>
          </div>
          <div className={styles.textareaWrapper}>
            <textarea
              placeholder="Project Requirements and Goals"
              type="text"
              onChange={(e) => onChange(e.target.value, "project_goal")}
              value={details.data.project_goal}
            />
            <span style={{ opacity: 1 }}>{details.error.project_goal}</span>
          </div>

          <button
            type="button"
            className={styles.submit}
            disabled={disabled}
            onClick={onSubmit}
          >
            Submit
          </button>
        </form>
        {successMessage && (
          <div className={styles.successMessageWrapper}>
            <span>
              <p>{successMessage}</p>
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
