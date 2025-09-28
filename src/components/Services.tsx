import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export default function Services() {
  const { t } = useTranslation();

  // Explicitly type key as string
  const renderGuidelineBox = (key: string) => {
    // Tell TypeScript that points is a string array
    const points = t(`services.${key}.points`, { returnObjects: true }) ;
const safePoints = Array.isArray(points) ? points : [];

    return (
      <div className="guideline-box">
        <h3>{t(`services.${key}.title`)}</h3>
        <ul>
          {safePoints.map((point: string, index: number) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="video-container">
          <h4>{t(`services.${key}.videoTitle`)}</h4>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/your-${key}-video-id`}
            title={t(`services.${key}.title`)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };

  return (
    <motion.section
      key="services"
      className="section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{t("services.title")}</h2>

      {/* Uncomment if needed */}
      {/* {renderGuidelineBox("homes")} */}

      {renderGuidelineBox("industries")}
      {renderGuidelineBox("hotels")}
      {renderGuidelineBox("hospitals")}
    </motion.section>
  );
}
