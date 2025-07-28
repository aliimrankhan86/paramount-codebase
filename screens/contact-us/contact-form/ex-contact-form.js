// // Add this as the very first line
// "use client";

// import React, { useState } from "react";
// import cn from "classnames";
// import styles from "./contact-form.module.css";
// import Socials from "@/components/socials/socials";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     option: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   // 🔁 Confirm component renders
//   console.log("🔄 ContactForm: Component rendered");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     console.log(`📝 Input changed: ${name} = ${value}`);
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("📩 handleSubmit triggered!");
//     console.log("📄 Form Data:", formData);

//     // 🔍 Basic validation
//     if (!formData.name.trim()) {
//       alert("Please enter your name.");
//       return;
//     }
//     if (!formData.email.includes("@")) {
//       alert("Please enter a valid email.");
//       return;
//     }
//     if (!formData.message.trim()) {
//       alert("Please write a message.");
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const response = await fetch(
//         "https://hook.eu2.make.com/9trj16zagsvq8ie873yyqytx2c04kjrl",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       console.log("📨 Response Status:", response.status);

//       const responseBody = await response.text();
//       console.log("📦 Response Body:", responseBody);

//       if (response.ok) {
//         console.log("✅ Success: Message sent!");
//         setSubmitStatus("success");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           option: "",
//           message: "",
//         });
//       } else {
//         console.error("❌ Webhook error:", responseBody);
//         setSubmitStatus("error");
//       }
//     } catch (error) {
//       console.error("🚨 Fetch failed:", error);
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className={cn("section")}>
//       <div className={cn("container", styles.container)}>
//         {/* Left Column: Form */}
//         <div className={styles.col}>
//           <form onSubmit={handleSubmit} className={styles.form}>
//             <div className={styles.wrapper}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//                 className={styles.textfield}
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "12px",
//                   width: "100%",
//                 }}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 className={styles.textfield}
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "12px",
//                   width: "100%",
//                 }}
//               />
//             </div>

//             <div className={styles.wrapper}>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone number"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className={styles.textfield}
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "12px",
//                   width: "100%",
//                 }}
//               />
//               <select
//                 name="option"
//                 value={formData.option}
//                 onChange={handleInputChange}
//                 className={styles.dropdown}
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "12px",
//                   width: "100%",
//                 }}
//               >
//                 <option value="">Select an option</option>
//                 <option value="aem">Adobe Experience Manager</option>
//                 <option value="agile">Agile Project Delivery</option>
//                 <option value="development">Full-Stack Development</option>
//                 <option value="marketing">Digital Marketing</option>
//               </select>
//             </div>

//             <textarea
//               name="message"
//               placeholder="Your message"
//               value={formData.message}
//               onChange={handleInputChange}
//               required
//               className={styles.textarea}
//               rows="5"
//               style={{
//                 border: "1px solid #ccc",
//                 padding: "12px",
//                 width: "100%",
//                 resize: "vertical",
//               }}
//             />

//             <button
//               type="submit"
//               className={cn("button", styles.button)}
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Sending..." : "Submit"}
//             </button>

//             {submitStatus === "success" && (
//               <p
//                 className={cn("paragraph-medium", styles.protected)}
//                 style={{ color: "green", fontWeight: "bold" }}
//               >
//                 Message sent successfully!
//               </p>
//             )}
//             {submitStatus === "error" && (
//               <p
//                 className={cn("paragraph-medium", styles.protected)}
//                 style={{ color: "red" }}
//               >
//                 Error sending message. Please try again.
//               </p>
//             )}
//           </form>

//           <div className={cn("paragraph-medium", styles.protected)}>
//             This site is protected by reCAPTCHA and the Google
//             <a
//               href="https://policies.google.com/privacy"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={styles.link}
//             >
//               Privacy Policy
//             </a>
//              and
//             <a
//               href="https://policies.google.com/terms"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={styles.link}
//             >
//               Terms of Service
//             </a>
//              apply.
//           </div>
//         </div>

//         {/* Right Column: Contact Info */}
//         <div className={styles.side_content}>
//           <div className={styles.block}>
//             <div className={cn("paragraph-medium", styles.text)}>Address</div>
//             <a className={cn("label-medium", styles.link)}>
//               shop@yourstore.com
//             </a>
//           </div>

//           <div className={styles.block}>
//             <div className={cn("paragraph-medium", styles.text)}>Email</div>
//             <a className={cn("label-medium", styles.link)}>
//               contact@yourstore.com
//             </a>
//             <a className={cn("label-medium", styles.link)}>
//               sales@yourstore.com
//             </a>
//           </div>

//           <div className={styles.block}>
//             <div className={cn("paragraph-medium", styles.text)}>Phone</div>
//             <a className={cn("label-medium", styles.link)}>
//               +33 (0) 31-305-210
//             </a>
//             <a className={cn("label-medium", styles.link)}>
//               mon - fri: 09:00 - 17:00
//             </a>
//           </div>

//           <div className={styles.block}>
//             <div className={cn("paragraph-medium", styles.text)}>Follow us</div>
//             <Socials />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
