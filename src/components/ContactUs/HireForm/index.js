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
  { id: "MVP Product development", label: "MVP Product development" },
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
    console.log(detailsData.data, "Form Data Submitted");
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
          }}
        >
          <div className={styles.inputWidth}>
            <div className={styles.inputWrapper}>
              <label>Your Full Name*</label>
              <input
                type="text"
                onChange={(e) => onChange(e.target.value, "name")}
                value={details.data.name}
              />
              <span style={{ opacity: 1 }}>{details.error.name}</span>
            </div>
            <div className={styles.inputWrapper}>
              <label>Your Email Id*</label>
              <input
                onChange={(e) => onChange(e.target.value, "email_id")}
                value={details.data.email_id}
              />
              <span style={{ opacity: 1 }}>{details.error.email_id}</span>
            </div>
          </div>

          <div className={styles.inputWidth}>
            <div className={styles.inputWrapper}>
              <label>Your Company/Product Name*</label>
              <input
                type="text"
                onChange={(e) => onChange(e.target.value, "company_name")}
                value={details.data.company_name}
              />
              <span style={{ opacity: 1 }}>{details.error.company_name}</span>
            </div>
            <div className={styles.inputWrapper}>
              <label>Your Mobile Number*</label>
              <input
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
                  )
                    e.preventDefault();
                }}
                onWheel={(e) => e.target.blur()}
                value={details.data.phone_number}
              />
              <span style={{ opacity: 1 }}>{details.error.phone_number}</span>
            </div>
          </div>
          <div className={styles.interestedWrapper}>
            <h4>Choose Purpose</h4>
            <Select
              isMulti
              name="services"
              options={InterestedDropdownOptions}
              value={InterestedDropdownOptions.filter((option) =>
                details.data.service_list.includes(option.value)
              )}
              // placeholder="Select Services..."
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
                  boxShadow: "none", // optionally remove default box-shadow
                  "&:hover": {
                    borderColor: "#707070", // keep the same border color on hover
                  },
                }),
                menu: (base) => ({
                  ...base,
                  zIndex: 9999,
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused
                    ? "black"
                    : base.backgroundColor,
                  color: state.isFocused ? "white" : base.color,
                  cursor: "pointer",
                }),
                // optionally style the placeholder text
                placeholder: (base) => ({
                  ...base,
                  color: "#bbb", // lighter text color to contrast dark bg
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
                  ":hover": {
                    backgroundColor: "red",
                    color: "white",
                  },
                }),
              }}
            />

            <div className={styles.inputWrapper}>
              <span style={{ opacity: 1 }}>{details.error.service_list}</span>
            </div>
          </div>

          <div className={styles.textareaWrapper}>
            <label>Project Requirement / Goals*</label>
            <textarea
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
            {/* Start a Conversation */}
            Submit Form
          </button>
        </form>
        {/* 
        <div className={styles.successMessageWrapper}>
          <span>
            <p>
              Thanks for Contacting Us. Our Team Will Get Back to You Shortly
            </p>
          </span>
        </div> */}

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
