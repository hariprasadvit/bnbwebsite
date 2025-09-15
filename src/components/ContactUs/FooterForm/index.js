"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";
import axios from "axios";
import Select from "react-select";

// Email validation helper
const emailRegex = (data) => {
  const emailReg = new RegExp(
    "^([\\w\\.\\+\\-]+\\@[a-zA-Z0-9\\.\\-]+\\.[a-zA-z0-9]{2,4})$"
  );
  return !emailReg.test(data.trim());
};

const InterestedTabs = [
  { id: "MVP Product Development", label: "MVP Product Development" },
  {
    id: "Custom Application Development",
    label: "Custom Application Development",
  },
  { id: "Agentic AI", label: "Agentic AI" },
  {
    id: "Web/Mobile Application Development",
    label: "Web/Mobile Application Development",
  },
  { id: "Others", label: "Others" },
];

// Convert to react-select { value, label } shape
const InterestedDropdownOptions = InterestedTabs.map((tab) => ({
  value: tab.id,
  label: tab.label,
}));

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
    phone_number: "Phone Number",
  };

  // Input change handler
  const onChange = (val, key) => {
    setDetails((prev) => {
      let data = { ...prev.data };
      let error = { ...prev.error };

      if (key === "service_list") {
        // The val here is always an array of values from react-select multi-select
        data[key] = val;
        error[key] =
          val && val.length > 0 ? false : `${ERR_NAMES[key]} is required`;
      } else {
        data[key] = val;
        error[key] = val
          ? false
          : KEYS_FOR_VALIDATION.includes(key) &&
            `${ERR_NAMES[key]} is required`;
      }

      return { data, error };
    });
  };

  // Submission handler
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

    if (filters.length > 0) {
      filters.forEach((d) => {
        detailsData.error[`${d}`] = ERR_NAMES[d] + " is required";
      });
      error = true;
      setDetails(detailsData);
    }

    let regexResponse = emailRegex(detailsData.data.email_id);
    if (regexResponse) {
      detailsData.error.email_id = "Enter Valid Email Address";
      setDetails(detailsData);
      error = true;
    }
    if (error) return;

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

        setTimeout(() => setSuccessMessage(""), 2000);
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
          err.response.data.error.forEach((item) => {
            detailsData.error[item.path] = item.message;
          });
          setDetails(detailsData);
          return;
        }
      });
  };

  return (
    <section className={styles.joinUs}>
      <div className={styles.joinUsTitle}>
        <h4>Lets connect & Help you for your Project</h4>
      </div>
      <div className={styles.contactUsForm}>
        <form
          className={styles.contactForm}
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          aria-label="Contact form"
        >
          <div className={styles.inputGrid}>
            <div className={styles.inputWrapper}>
              <label htmlFor="name">Your Full Name*</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. Jane Doe"
                onChange={(e) => onChange(e.target.value, "name")}
                value={details.data.name}
                aria-required="true"
                aria-describedby="error-name"
              />
              <span id="error-name" className={details.error.name ? styles.errorActive : ""}>{details.error.name}</span>
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="email">Your Email Address*</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="e.g. jane@company.com"
                onChange={(e) => onChange(e.target.value, "email_id")}
                value={details.data.email_id}
                aria-required="true"
                aria-describedby="error-email"
              />
              <span id="error-email" className={details.error.email_id ? styles.errorActive : ""}>{details.error.email_id}</span>
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="company">Company / Product Name*</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="e.g. Acme Inc"
                onChange={(e) => onChange(e.target.value, "company_name")}
                value={details.data.company_name}
                aria-required="true"
                aria-describedby="error-company"
              />
              <span id="error-company" className={details.error.company_name ? styles.errorActive : ""}>{details.error.company_name}</span>
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="phone">Mobile Number*</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                placeholder="e.g. +1 555 555 5555"
                onChange={(e) => onChange(e.target.value, "phone_number")}
                onKeyDown={(e) => {
                  if (
                    e.key === "ArrowUp" ||
                    e.key === "ArrowDown" ||
                    e.key === "-" ||
                    e.key === "+" ||
                    e.key === "e" ||
                    e.key === "E"
                  )
                    e.preventDefault();
                }}
                onWheel={(e) => e.target.blur()}
                value={details.data.phone_number}
                aria-required="true"
                aria-describedby="error-phone"
              />
              <span id="error-phone" className={details.error.phone_number ? styles.errorActive : ""}>{details.error.phone_number}</span>
            </div>
          </div>

          <div className={styles.interestedWrapper}>
            <h4>Choose Purpose</h4>
            <Select
              isMulti
              name="services"
              instanceId="footerServiceSelect"
              options={InterestedDropdownOptions}
              value={InterestedDropdownOptions.filter((option) =>
                details.data.service_list.includes(option.value)
              )}
              placeholder="Select services..."
              onChange={(selected) =>
                onChange(
                  Array.isArray(selected)
                    ? selected.map((item) => item.value)
                    : [],
                  "service_list"
                )
              }
              styles={{
                control: (base, state) => ({
                  ...base,
                  backgroundColor: "#1F1F1F",
                  borderRadius: 8,
                  border: "1px solid #707070",
                  boxShadow: "none",
                  minHeight: "48px",
                }),
                menu: (base) => ({
                  ...base,
                  zIndex: 9999,
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused ? "#111" : base.backgroundColor,
                  color: state.isFocused ? "#fff" : base.color,
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "#bbb",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "white",
                }),
                multiValue: (base) => ({
                  ...base,
                  backgroundColor: "#333",
                  borderRadius: "4px",
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  color: "white",
                }),
                multiValueRemove: (base) => ({
                  ...base,
                  color: "#999",
                }),
              }}
            />

            <div className={styles.inputWrapper}>
              <span id="error-service" className={details.error.service_list ? styles.errorActive : ""}>{details.error.service_list}</span>
            </div>
          </div>

          <div className={styles.textareaWrapper}>
            <label htmlFor="project_goal">Project Requirement / Goals*</label>
            <textarea
              id="project_goal"
              onChange={(e) => onChange(e.target.value, "project_goal")}
              value={details.data.project_goal}
              placeholder="Describe your project goals, timeline, and must-have features"
              aria-describedby="error-goal"
            />
            <span id="error-goal" className={details.error.project_goal ? styles.errorActive : ""}>{details.error.project_goal}</span>
          </div>

          <div className={styles.formActions}>
            <button
              type="submit"
              className={styles.submit}
              disabled={disabled}
              aria-disabled={disabled}
            >
              {disabled ? "Sending..." : "Start a Conversation"}
            </button>
            <div className={styles.helperText}>
              <small>We typically respond within 1 business day. By submitting you agree to our terms.</small>
            </div>
          </div>
        </form>

        {successMessage && (
          <div className={styles.successMessageWrapper} role="status" aria-live="polite">
            <span>
              <p>{successMessage}</p>
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
