// import { motion } from "framer-motion";

// interface BookingProps {
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// }

// export default function BookingHome({ handleSubmit }: BookingProps) {
//   return (
//     <motion.section
//       key="booking-home"
//       className="section booking"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2>🏡 Book Gas for Home</h2>
//       <form onSubmit={handleSubmit} className="form-container">
//         <label>📱 Phone Number</label>
//         <div className="phone-input">
//           <span className="prefix">+91</span>
//           <input type="tel" name="phone" placeholder="Enter phone number" required />
//         </div>

//         <label>🛢️ Booking Type</label>
//         <select name="type" required>
//           <option value="">Select</option>
//           <option value="refill">Refill</option>
//           <option value="new">New Connection</option>
//         </select>

//         <div className="kyc-box">
//           <h4>🔐 KYC Verification</h4>
//           <p>Please upload your ID proof (Aadhar/PAN)</p>
//           <input type="file" required />
//         </div>

//         <label>🏠 Address</label>
//         <textarea placeholder="Enter Address & Booking Details" required />

//         <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit">
//           ✅ Confirm Booking
//         </motion.button>
//       </form>
//     </motion.section>
//   );
// }
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// interface BookingProps {
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// }

// export default function BookingHome({ handleSubmit }: BookingProps) {
//   const { t } = useTranslation();

//   return (
//     <motion.section
//       key="booking-home"
//       className="section booking"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2>{t("BOOK FOR HOME")}</h2>
//       <form onSubmit={handleSubmit} className="form-container">
//         <label>{t("Phone number")}</label>
//         <div className="phone-input">
//           <span className="prefix">+91</span>
//           <input type="tel" name="phone" placeholder={t("enter your phone number")} required />
//         </div>

//         <label>{t("bookingType")}</label>
//         <select name="type" required>
//           <option value="">{t("select to refill or new connection")}</option>
//           <option value="refill">{t("bookingHome.refill")}</option>
//           <option value="new">{t("bookingHome.new")}</option>
//         </select>

//         <div className="kyc-box">
//           <h4>{t("KYC Documents")}</h4>
//           <p>{t("Upload your aadhar/Driving License/Passport ")}</p>
//           <input type="file" required />
//         </div>

//         <label>{t("Address")}</label>
//         <textarea placeholder={t("enter your correct address")} required />

//         <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit">
//           {t("Confirm Booking")}
//         </motion.button>
//       </form>
//     </motion.section>
//   );
// }
