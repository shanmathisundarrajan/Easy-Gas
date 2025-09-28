import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import logo from "../assets/logos.png"; 
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
// import BookingHome from "./components/BookingHome";
import BookingHotel from "./components/BookingHotel";
import BookingHospital from "./components/BookingHospital";

import { useTranslation } from "react-i18next"; 
import BookingIndustries from "./components/BookingIndustries";

function App() {
  const { t, i18n } = useTranslation(); 

  const [formData, setFormData] = useState<any>({
    name: "",
    phone: "",
    message: "",
  });

  const [activeSection, setActiveSection] = useState("home");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(t("form.success")); 
    setFormData({ name: "", phone: "", message: "" });
  };

  // 🔄 Language switcher
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
         <img height={100} width={150} src={logo} alt="Logo" />
        <nav>
          <button onClick={() => setActiveSection("home")}>{t("nav.home")}</button>
          <button onClick={() => setActiveSection("about")}>{t("nav.about")}</button>
          <button onClick={() => setActiveSection("services")}>{t("nav.services")}</button>
          <button onClick={() => setActiveSection("contact")}>{t("nav.contact")}</button>
        </nav>

        {/* 🌐 Language Selector */}
        <div className="lang-switch">
          <button onClick={() => changeLanguage(i18n.language === "en" ? "ta" : "en")}>
            {i18n.language === "en" ? "தமிழ்" : "English"}
          </button>
        </div>
      </header>

      {/* Sections */}
      <AnimatePresence mode="wait">
        {activeSection === "home" && (
          <Home setActiveSection={setActiveSection} activeSection={activeSection} />
        )}

        {activeSection === "about" && (
          <AboutUs setActiveSection={setActiveSection} />   // <-- updated here
        )}

        {activeSection === "services" && <Services setActiveSection={setActiveSection} />}
        {activeSection === "contact" && (
          <ContactUs
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setActiveSection={setActiveSection}
          />
        )}

        {/* Optional Booking Sections */}
        {/* {activeSection === "booking-home" && <BookingHome handleSubmit={handleSubmit} />} */}
        {activeSection === "booking-industries" && <BookingIndustries handleSubmit={handleSubmit} />}
        {activeSection === "booking-hotel" && <BookingHotel handleSubmit={handleSubmit} />}
        {activeSection === "booking-hospital" && <BookingHospital handleSubmit={handleSubmit} />}
      </AnimatePresence>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} {t("app.footer")}</p>
      </footer>
    </div>
  );
}

export default App;
