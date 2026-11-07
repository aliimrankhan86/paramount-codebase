"use client";

import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import dynamic from "next/dynamic";
import styles from "./support.module.css";
import "react-international-phone/style.css";
import site from "@/constants/site";

/*
  The country picker is 252 KB of JavaScript and it is not needed to paint the
  form. Load it only when the visitor actually reaches the field, so it never
  lands in the first load or on the main thread's busy window.
*/
const PhoneInput = dynamic(
  () => import("react-international-phone").then((mod) => mod.PhoneInput),
  { ssr: false },
);

const businessOptions = [
  { value: "consulting", label: "Consulting" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "finance", label: "Finance" },
  { value: "technology", label: "Technology" },
  { value: "other", label: "Other" },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* The message prompt follows the chosen practice so the brief arrives in the
   right shape. The visible label stays constant; this is supporting text only. */
const practicePrompts = {
  technology: "Tell us briefly what you're building and what's in the way",
  accounting: "Tell us what you run, what's behind, and what needs filing",
};

const emptyForm = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  practice: "technology",
  nature: "",
  subject: "",
};

function getErrors(form) {
  return {
    firstname: form.firstname.trim() ? "" : "Please add your first name.",
    lastname: form.lastname.trim() ? "" : "Please add your last name.",
    email: !form.email.trim()
      ? "Please add an email address."
      : emailRegex.test(form.email)
        ? ""
        : "That email address doesn't look right.",
    phone:
      form.phone.startsWith("+") && form.phone.length >= 6
        ? ""
        : "Please add a contact number with a country code.",
    nature: form.nature ? "" : "Please choose the closest match.",
    subject: form.subject.trim() ? "" : "Tell us briefly what you're working on.",
  };
}

export default function ContactUs() {
  const [form, setForm] = useState(emptyForm);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [phoneReady, setPhoneReady] = useState(false);
  const focusedPhone = useRef(false);
  const errors = getErrors(form);

  /*
    Switching from the plain input to the picker must not drop the caret. The
    picker is a lazily-loaded chunk, so it mounts some time after this effect
    runs — retry until the input exists rather than focusing a missing node.
  */
  useEffect(() => {
    if (!phoneReady || !focusedPhone.current) return;
    let cancelled = false;
    let attempts = 0;
    const focusWhenReady = () => {
      if (cancelled) return;
      const el = document.getElementById("phone");
      if (el) {
        el.focus();
        const end = el.value.length;
        el.setSelectionRange?.(end, end);
        return;
      }
      if (attempts++ < 60) setTimeout(focusWhenReady, 50);
    };
    focusWhenReady();
    return () => {
      cancelled = true;
    };
  }, [phoneReady]);
  const isValid = Object.values(errors).every((error) => !error);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handlePhoneChange = (phone) => {
    setForm((prev) => ({ ...prev, phone }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const allTouched = {
      firstname: true,
      lastname: true,
      email: true,
      phone: true,
      nature: true,
      subject: true,
    };
    setTouched(allTouched);

    if (!isValid) {
      const order = ["firstname", "lastname", "email", "phone", "nature", "subject"];
      const firstInvalid = order.find((field) => errors[field]);
      if (firstInvalid) {
        const map = { firstname: "fname", lastname: "lname" };
        const el = document.getElementById(map[firstInvalid] || firstInvalid);
        el?.focus();
      }
      return;
    }

    if (isSubmitting) return;

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
      setForm(emptyForm);
      setTouched({});
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <span className={styles.successIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="m5 12.5 4.5 4.5L19 7.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className={cn("heading-4", styles.successTitle)}>Message received</h3>
        <p className={cn("paragraph-medium", styles.successText)}>
          Thanks for reaching out. We reply to every enquiry, usually within one working day, Monday to Friday.
        </p>
        <button
          type="button"
          className={cn("button", "button-stroke")}
          onClick={() => setSubmitStatus(null)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <div className={styles.formGrid}>
        <Field
          id="fname"
          name="firstname"
          label="First name"
          placeholder="Jordan"
          autoComplete="given-name"
          value={form.firstname}
          error={touched.firstname && errors.firstname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Field
          id="lname"
          name="lastname"
          label="Last name"
          placeholder="Blake"
          autoComplete="family-name"
          value={form.lastname}
          error={touched.lastname && errors.lastname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      <Field
        id="email"
        name="email"
        type="email"
        label="Email address"
        placeholder="jordan@company.com"
        autoComplete="email"
        value={form.email}
        error={touched.email && errors.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <div className={styles.formRow}>
        <label htmlFor="phone">Contact number</label>
        <div
          className={cn(styles.phoneWrap, {
            [styles.phoneWrapError]: touched.phone && errors.phone,
          })}
        >
          {phoneReady ? (
            <PhoneInput
              defaultCountry="gb"
              value={form.phone}
              onChange={handlePhoneChange}
              onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
              inputProps={{
                id: "phone",
                name: "phone",
                required: true,
                "aria-invalid": Boolean(touched.phone && errors.phone),
                "aria-describedby": touched.phone && errors.phone ? "phone-error" : undefined,
              }}
            />
          ) : (
            /* Plain input until the visitor reaches the field; it looks and
               validates identically and swaps in the picker on focus. */
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+44 7700 900000"
              value={form.phone}
              onChange={(event) => handlePhoneChange(event.target.value)}
              onFocus={() => {
                focusedPhone.current = true;
                setPhoneReady(true);
              }}
              onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
              required
              aria-invalid={Boolean(touched.phone && errors.phone)}
              aria-describedby={touched.phone && errors.phone ? "phone-error" : undefined}
            />
          )}
        </div>
        <FieldError id="phone-error" show={touched.phone && errors.phone}>
          {errors.phone}
        </FieldError>
      </div>

      <div className={styles.formRow}>
        <label htmlFor="practice">Which service</label>
        <div className={styles.selectWrap}>
          <select
            id="practice"
            name="practice"
            value={form.practice}
            onChange={handleChange}
          >
            <option value="technology">Technology &amp; AI</option>
            <option value="accounting">Accounting</option>
          </select>
          <Chevron />
        </div>
      </div>

      <div className={styles.formRow}>
        <label htmlFor="nature">Nature of business</label>
        <div className={styles.selectWrap}>
          <select
            id="nature"
            name="nature"
            value={form.nature}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-invalid={Boolean(touched.nature && errors.nature)}
            aria-describedby={touched.nature && errors.nature ? "nature-error" : undefined}
          >
            <option value="">Select...</option>
            {businessOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <Chevron />
        </div>
        <FieldError id="nature-error" show={touched.nature && errors.nature}>
          {errors.nature}
        </FieldError>
      </div>

      <div className={styles.formRow}>
        <div className={styles.labelRow}>
          <label htmlFor="subject">How can we help?</label>
          <span className={styles.counter} aria-hidden="true">
            {form.subject.length}/1000
          </span>
        </div>
        <textarea
          id="subject"
          name="subject"
          placeholder={practicePrompts[form.practice] || practicePrompts.technology}
          value={form.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          maxLength={1000}
          aria-invalid={Boolean(touched.subject && errors.subject)}
          aria-describedby={touched.subject && errors.subject ? "subject-error" : undefined}
        />
        <FieldError id="subject-error" show={touched.subject && errors.subject}>
          {errors.subject}
        </FieldError>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn("button", "button-accent", styles.button)}
      >
        {isSubmitting ? (
          <>
            <span className={styles.spinner} aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4.75 12h14.5" strokeWidth="1.6" strokeLinecap="round" />
              <path
                d="M13.75 6.75 19.25 12l-5.5 5.25"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        )}
      </button>

      <p className={styles.hint}>
        We never share your details, and there&rsquo;s no mailing list.
      </p>

      <div role="status" aria-live="polite" className={styles.status}>
        {submitStatus === "error" && (
          <p className={cn("paragraph-medium", styles.errorMessage)}>
            Something went wrong sending that. Please try again in a moment.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({ id, label, error, ...inputProps }) {
  return (
    <div className={styles.formRow}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...inputProps}
      />
      <FieldError id={`${id}-error`} show={error}>
        {error}
      </FieldError>
    </div>
  );
}

function FieldError({ id, show, children }) {
  return (
    <p id={id} className={cn(styles.fieldError, { [styles.fieldErrorVisible]: show })}>
      {show ? children : ""}
    </p>
  );
}

function Chevron() {
  return (
    <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 9 6 6 6-6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
