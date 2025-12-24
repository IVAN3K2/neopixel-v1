import { services } from "../data/services";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-12 px-6 max-w-7xl mx-auto">
      <SectionTitle
        title={t('services.title')}
        subtitle={t('services.subtitle')}
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {services.map((service, index) => (
          <motion.div
            key={service.key} // utilisez la clé unique
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: index * 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <ServiceCard
              title={t(`services.items.${service.key}.title`, service.title)} // fallback si traduction manquante
              description={t(`services.items.${service.key}.description`, service.description)}
              icon={service.icon}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
