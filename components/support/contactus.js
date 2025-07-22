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
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // Simple validation: all fields must be non-empty, email must be valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+\d{6,15}$/;
    const valid =
      form.firstname.trim().length > 0 &&
      form.lastname.trim().length > 0 &&
      emailRegex.test(form.email) &&
      form.nature.trim().length > 0 &&
      form.subject.trim().length > 0 &&
      phoneRegex.test(form.phone);
    setIsValid(valid);
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setShowDialog(true);
      // Optionally reset form here
      // setForm({ firstname: '', lastname: '', email: '', phone: '', nature: '', subject: '' });
    }
  };

  // Contact Us form JSX
  const contactForm = (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder=""
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
            placeholder=""
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
            placeholder=""
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
            onChange={(phone) => setForm({ ...form, phone })}
            inputClassName="label-medium"
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
            placeholder=""
            style={{ height: 200, resize: 'none' }}
            value={form.subject}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
      {showDialog && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialogBox}>
            <button className={styles.dialogClose} onClick={() => setShowDialog(false)} aria-label="Close">&times;</button>
            <div className={styles.dialogMessage}>
              Thanks for providing your contact details, We will be in touch soon.
            </div>
            <button className={styles.dialogAction} onClick={() => setShowDialog(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
    
      <div id="contactusform" className={cn("section", styles.section)}>
        <div className={cn("container")}>
        <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: 24 }}>Contact Us</h2>
          {contactForm}
        </div>
      </div>
      
    </>
  );
}
