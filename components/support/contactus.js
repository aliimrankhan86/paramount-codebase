"use client";

import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./support.module.css";
import mock from "@/constants/mock";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function Support({ support = mock.support }) {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    nature: "",
    subject: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'

  // Validate form on every change
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid =
      form.firstname.trim().length > 0 &&
      form.lastname.trim().length > 0 &&
      emailRegex.test(form.email) &&
      form.nature.trim().length > 0 &&
      form.subject.trim().length > 0 &&
      form.phone.startsWith("+") &&
      form.phone.length >= 6;

    setIsValid(valid);
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (phone) => {
    setForm((prev) => ({ ...prev, phone }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📩 Form submitted — handleSubmit triggered");
    console.log("📄 Form data:", form);

    if (!isValid) {
      console.warn("❌ Form is not valid. Please fill all fields correctly.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://hook.eu2.make.com/4l5jolaf766j3wtx3fcl5lxkfiprmyn7",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      console.log("📨 Response status:", response.status);
      const responseBody = await response.text();
      console.log("📦 Response body:", responseBody);

      if (response.ok) {
        console.log("✅ Success: Data sent to Make.com");
        setSubmitStatus("success");
        setForm({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          nature: "",
          subject: "",
        });
      } else {
        throw new Error(`HTTP ${response.status}: ${responseBody}`);
      }
    } catch (error) {
      console.error("🚨 Submission failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <h2
          className="heading-2"
          style={{ textAlign: "center", marginBottom: 24 }}
        >
          Contact Us
        </h2>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className="formRow">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="John"
                value={form.firstname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formRow">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Doe"
                value={form.lastname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formRow">
              <label htmlFor="email">Your Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formRow">
              <label htmlFor="phone">Your contact number</label>
              <PhoneInput
                defaultCountry="us"
                value={form.phone}
                onChange={handlePhoneChange}
                inputClassName={`${styles.phoneInput} label-medium`}
                required
              />
            </div>

            <div className="formRow">
              <label htmlFor="nature">Nature of Business</label>
              <select
                id="nature"
                name="nature"
                value={form.nature}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="consulting">Consulting</option>
                <option value="ecommerce">E-commerce</option>
                <option value="finance">Finance</option>
                <option value="technology">Technology</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="formRow">
              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="How can we help you?"
                style={{ height: "200px", resize: "none" }}
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={cn("button", styles.button)}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>

            {submitStatus === "success" && (
              <p
                className={cn("paragraph-medium", styles.successMessage)}
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                ✅ Thanks for reaching out! We’ll get back to you soon.
              </p>
            )}

            {submitStatus === "error" && (
              <p
                className={cn("paragraph-medium", styles.errorMessage)}
                style={{ color: "red", marginTop: "10px" }}
              >
                ❌ Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
