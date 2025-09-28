import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface HomeProps {
  setActiveSection: (section: string) => void;
  activeSection: string;
}

export default function Home({ setActiveSection, activeSection }: HomeProps) {
  const { t } = useTranslation();

  return (
    <motion.section
      key="home"
      className="section hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{t("home.title")}</h2>
      <p>{t("home.subtitle")}</p>

      <div className="points-container">
        {/* <div
          className={`point-box ${activeSection === "booking-home" ? "active" : ""}`}
          onClick={() => setActiveSection("booking-home")}
          style={{ cursor: "pointer" }}
        >
          <h3>{t("home.forHomes.title")}</h3>
          <p>{t("home.forHomes.desc")}</p>
        </div> */}
         <div
          className={`point-box ${activeSection === "booking-industries" ? "active" : ""}`}
          onClick={() => setActiveSection("booking-industries")}
          style={{ cursor: "pointer" }}
        >
          <h3>{t("home.forIndustries.title")}</h3>
          <p>{t("home.forIndustries.desc")}</p>
        </div>


        <div
          className={`point-box ${activeSection === "booking-hotel" ? "active" : ""}`}
          onClick={() => setActiveSection("booking-hotel")}
          style={{ cursor: "pointer" }}
        >
          <h3>{t("home.forHotels.title")}</h3>
          <p>{t("home.forHotels.desc")}</p>
        </div>

        <div
          className={`point-box ${activeSection === "booking-hospital" ? "active" : ""}`}
          onClick={() => setActiveSection("booking-hospital")}
          style={{ cursor: "pointer" }}
        >
          <h3>{t("home.forHospitals.title")}</h3>
          <p>{t("home.forHospitals.desc")}</p>
        </div>
      </div>

      <h3 className="tagline">{t("home.tagline")}</h3>
    </motion.section>
  );
}
