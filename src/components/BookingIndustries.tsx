import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface BookingProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function BookingIndustries({ handleSubmit }: BookingProps) {
  const { t } = useTranslation();

  return (
    <motion.section
      key="booking-industries"
      className="section booking"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{t("BOOK FOR INDUSTRIES")}</h2>
      <p className="subtitle">{t("")}</p>

      <form onSubmit={handleSubmit} className="form-container">
        <label>{t("Phone Number")}</label>
        <div className="phone-input">
          <span className="prefix">+91</span>
          <input type="tel" name="phone" placeholder={t("Enter your phone number")} required />
        </div> 

        <label>{t("Quantity")}</label>
        <input type="number" name="qty" placeholder={t("Quantity Required")} required />

        <div className="kyc-box">
          <h4>{t("KYC Documents")}</h4>
          <p>{t("")}</p>
          <label>{t("business Certificate")}</label>
          <input type="file" required />
          <label>{t("Staff Id")}</label>
          <input type="file" required />
        </div>

        <label>{t("Address")}</label>
        <textarea placeholder={t("Enter the correct address ")} required />

        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit">
          {t("Confirm Booking")}
        </motion.button>
      </form>
    </motion.section>
  );
}
