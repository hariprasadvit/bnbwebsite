"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";
import axios from "axios";

const emailRegex = (data) => {
  const emailReg = new RegExp(
    "^([\\w\\.\\+\\-]+\\@[a-zA-Z0-9\\.\\-]+\\.[a-zA-z0-9]{2,4})$"
  );
  return !emailReg.test(data.trim());
};

const InterestedTabs = [
  {
    id: "MVP Product development",
    label: "MVP Product development",
  },
  {
    id: "Custom Application Development",
    label: "Custom Application Development",
  },
  {
    id: "Agentic AI",
    label: "Agentic AI",
  },
  {
    id: "Web/Mobile Application Development",
    label: "Web/Mobile Application Development",
  },
  {
    id: "Others",
    label: "Others",
  },
];

export default function FooterForm() {
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
    // "phone_number",
  ];
  const ERR_NAMES = {
    project_goal: "Project Goal",
    name: "Name",
    company_name: "Company Name",
    email_id: "Email ID",
    service_list: "Service",
    budget: "Budget",
    // phone_number: "Mobile Number",
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
    <>
      <section className={styles.joinUs}>
        <div className={styles.joinUsTitle}>
          <h4>Lets connect & Help you for your Project</h4>
        </div>

        <div className={styles.contactUsForm}>
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

            <div className={styles.interestedWrapper}>
              <h4>I'm Interested in :</h4>
              <div style={{ marginBottom: 20 }}>
                <div
                  className={styles.interestedTabWrapper}
                  style={{ marginBottom: 0 }}
                >
                  {InterestedTabs.map((list) => (
                    <div
                      className={`${styles.interestedTabs} ${
                        details.data.service_list.includes(list.id)
                          ? styles.selected
                          : styles.interestedTabSelected
                      }`}
                      key={list.id}
                      onClick={() => onChange(list.id, "service_list")}
                    >
                      <span>{list.label}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.inputWrapper}>
                  <span style={{ opacity: 1 }}>
                    {details.error.service_list}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className={styles.submit}
              disabled={disabled}
              onClick={onSubmit}
            >
              Start a Conversation
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
    </>
  );
}
