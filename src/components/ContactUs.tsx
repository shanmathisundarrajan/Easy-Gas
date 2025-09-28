import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ContactProps {
  formData: {
    name: string;
    phone: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function ContactUs({ formData, handleChange, handleSubmit }: ContactProps) {
  const { t } = useTranslation();

  return (
    <motion.section
      key="contact"
      className="section contact"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{t("contact.title")}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={t("Contact Name")}
          value={formData.name}
          onChange={handleChange}
          required
        />

        <div className="phone-input">
          <span className="prefix">+91</span>
          <input
            type="tel"
            name="phone"
            placeholder={t("Enter Your Phone NUmber")}
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder={t("Message here!")}
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">{t("Submit")}</button>
      </form>
    </motion.section>
  );
}
