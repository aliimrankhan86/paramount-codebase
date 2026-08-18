"use client";

import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./support.module.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import site from "@/constants/site";

const businessOptions = [
  { value: "consulting", label: "Consulting" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "finance", label: "Finance" },
  { value: "technology", label: "Technology" },
  { value: "other", label: "Other" },
];

export default function ContactUs() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    nature: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid =
    form.firstname.trim().length > 0 &&
    form.lastname.trim().length > 0 &&
    emailRegex.test(form.email) &&
    form.nature.trim().length > 0 &&
    form.subject.trim().length > 0 &&
    form.phone.startsWith("+") &&
    form.phone.length >= 6;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (phone) => {
    setForm((prev) => ({ ...prev, phone }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(site.contactWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error(`Request failed with ${response.status}`);

      setSubmitStatus("success");
      setForm({ firstname: "", lastname: "", email: "", phone: "", nature: "", subject: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGrid}>
          <div className={cn("formRow", styles.formRow)}>
            <label htmlFor="fname">First name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              autoComplete="given-name"
              placeholder="Jordan"
              value={form.firstname}
              onChange={handleChange}
              required
            />
          </div>

          <div className={cn("formRow", styles.formRow)}>
            <label htmlFor="lname">Last name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              autoComplete="family-name"
              placeholder="Blake"
              value={form.lastname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={cn("formRow", styles.formRow)}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="jordan@company.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={cn("formRow", styles.formRow)}>
          <label htmlFor="phone">Contact number</label>
          <PhoneInput
            defaultCountry="gb"
            value={form.phone}
            onChange={handlePhoneChange}
            inputProps={{ id: "phone", name: "phone", required: true }}
            inputClassName={cn(styles.phoneInput, "label-medium")}
          />
        </div>

        <div className={cn("formRow", styles.formRow)}>
          <label htmlFor="nature">Nature of business</label>
          <select
            id="nature"
            name="nature"
            value={form.nature}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            {businessOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={cn("formRow", styles.formRow)}>
          <label htmlFor="subject">How can we help?</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Tell us briefly what you're working on"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={!isValid || isSubmitting} className={cn("button", styles.button)}>
          {isSubmitting ? "Sending…" : "Send message"}
        </button>

        <div role="status" aria-live="polite" className={styles.status}>
          {submitStatus === "success" && (
            <p className={cn("paragraph-medium", styles.successMessage)}>
              Thanks for reaching out. We reply to every enquiry, usually within one business day.
            </p>
          )}
          {submitStatus === "error" && (
            <p className={cn("paragraph-medium", styles.errorMessage)}>
              Something went wrong sending that. Please try again in a moment.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
