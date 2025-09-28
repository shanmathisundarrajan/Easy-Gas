// import { motion } from "framer-motion";

// interface BookingProps {
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// }

// export default function BookingHospital({ handleSubmit }: BookingProps) {
//   return (
//     <motion.section
//       key="booking-hospital"
//       className="section booking"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2>🏥 Book Gas for Hospitals & Healthcare</h2>
//       <p className="subtitle">
//         Medical oxygen, nitrogen & LPG delivery with priority service.  
//         Booking requires <strong>KYC Verification</strong>.
//       </p>

//       <form onSubmit={handleSubmit} className="form-container">
//         <label>📱 Hospital Phone</label>
//         <div className="phone-input">
//           <span className="prefix">+91</span>
//           <input type="tel" name="phone" placeholder="Hospital contact number" required />
//         </div>

//         <label>💨 Select Gas Type</label>
//         <select name="gasType" required>
//           <option value="">-- Select Gas Type --</option>
//           <option value="oxygen">Oxygen</option>
//           <option value="nitrogen">Nitrogen</option>
//           <option value="lpg">LPG (Kitchen)</option>
//           <option value="other">Other</option>
//         </select>

//         <label>📦 Quantity</label>
//         <input type="number" placeholder="Liters / Cylinders" required />

//         <label className="checkbox-label">
//           <input type="checkbox" /> 🚨 Emergency Requirement
//         </label>

//         <div className="kyc-box">
//           <h4>🔐 KYC Verification</h4>
//           <p>Please upload valid hospital authorization documents</p>
//           <label>🏥 Hospital Registration Certificate:</label>
//           <input type="file" required />
//           <label>🧑 Authorized Staff ID:</label>
//           <input type="file" required />
//         </div>

//         <label>🏠 Delivery Address</label>
//         <textarea placeholder="Enter complete delivery address" required />

//         <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit">
//           ✅ Confirm Booking
//         </motion.button>
//       </form>
//     </motion.section>
//   );
// }
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface BookingProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function BookingHospital({ handleSubmit }: BookingProps) {
  const { t } = useTranslation();

  return (
    <motion.section
      key="booking-hospital"
      className="section booking"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{t("BOOK FOR HOSPITAL")}</h2>
      <p className="subtitle">{t("")}</p>

      <form onSubmit={handleSubmit} className="form-container">
        <label>{t("Phone Number")}</label>
        <div className="phone-input">
          <span className="prefix">+91</span>
          <input type="tel" name="phone" placeholder={t("Enter Your Phone Number")} required />
        </div>

        <label>{t("GasType")}</label>
        <select name="gasType" required>
          <option value="">{t("Select")}</option>
          <option value="oxygen">{t("Oxygen")}</option>
          <option value="nitrogen">{t("Nitrogen")}</option>
          <option value="lpg">{t("LPG")}</option>
          <option value="other">{t("Other")}</option>
        </select>

        <label>{t("Quantity")}</label>
        <input type="number" placeholder={t("Enter the Quantity")} required />

        <label className="checkbox-label">
          <input type="checkbox" /> {t("emergency")}
        </label>

        <div className="kyc-box">
          <h4>{t("KYC Documents")}</h4>
          <p>{t("")}</p>
          <label>{t("HospitalCertificate")}</label>
          <input type="file" required />
          <label>{t("Staff Id")}</label>
          <input type="file" required />
        </div>

        <label>{t("Address")}</label>
        <textarea placeholder={t("Enter Correct Address")} required />

        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit">
          {t("Confirm Booking")}
        </motion.button>
      </form>
    </motion.section>
  );
}
