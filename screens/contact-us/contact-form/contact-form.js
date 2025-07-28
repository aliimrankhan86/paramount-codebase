import React, { useState } from "react";
import cn from "classnames";
import styles from "./contact-form.module.css";
import { Dropdown, TextArea, TextField } from "@/components/ui";
import Socials from "@/components/socials/socials";
import mock from "@/constants/mock";

export default function ContactForm({ options = mock.options }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDropdownChange = (selectedOption) => {
    setFormData((prev) => ({ ...prev, option: selectedOption.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your make.com webhook URL
      const response = await fetch("YOUR_MAKE_COM_WEBHOOK_URL_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          option: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.col}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.wrapper}>
              <TextField
                name="name"
                placeholder="Name"
                className={styles.textfield}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <TextField
                name="email"
                placeholder="Email"
                className={styles.textfield}
                value={formData.email}
                onChange={handleInputChange}
                required
                type="email"
              />
            </div>

            <div className={styles.wrapper}>
              <TextField
                name="phone"
                placeholder="Phone number"
                className={styles.textfield}
                value={formData.phone}
                onChange={handleInputChange}
              />
              <Dropdown
                placeholder="Select an option"
                className={styles.dropdown}
                options={options}
                onChange={handleDropdownChange}
                value={
                  options.find((opt) => opt.value === formData.option) || null
                }
              />
            </div>

            <TextArea
              name="message"
              placeholder="Your message"
              className={styles.textarea}
              value={formData.message}
              onChange={handleInputChange}
              required
            />

            <button
              type="submit"
              className={cn("button", styles.button)}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>

            {submitStatus === "success" && (
              <p className={cn("paragraph-medium", styles.protected)}>
                Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p
                className={cn("paragraph-medium", styles.protected)}
                style={{ color: "red" }}
              >
                Error sending message. Please try again.
              </p>
            )}
          </form>

          <div className={cn("paragraph-medium", styles.protected)}>
            This site is protected by reCAPTCHA and the Google 
            <a className={styles.link}>Privacy Policy</a>
             and 
            <a className={styles.link}>Terms of Service</a>
             apply.
          </div>
        </div>
        <div className={styles.side_content}>
          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Address</div>
            <a className={cn("label-medium", styles.link)}>
              shop@yourstore.com
            </a>
          </div>

          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Email</div>
            <a className={cn("label-medium", styles.link)}>
              contact@yourstore.com
            </a>
            <a className={cn("label-medium", styles.link)}>
              sales@yourstore.com
            </a>
          </div>

          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Phone</div>
            <a className={cn("label-medium", styles.link)}>
              +33 (0) 31-305-210
            </a>
            <a className={cn("label-medium", styles.link)}>
              mon - fri: 09:00 - 17:00
            </a>
          </div>

          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Follow us</div>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
