import { FaLightbulb, FaRocket, FaHandshake } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function WhyChoose() {
  const { t } = useTranslation();

  const reasons = [
    {
      key: "innovation",
      icon: FaLightbulb,
      title: t("whyChoose.items.innovation.title"),
      description: t("whyChoose.items.innovation.description")
    },
    {
      key: "performance",
      icon: FaRocket,
      title: t("whyChoose.items.performance.title"),
      description: t("whyChoose.items.performance.description")
    },
    {
      key: "reliability",
      icon: FaHandshake,
      title: t("whyChoose.items.reliability.title"),
      description: t("whyChoose.items.reliability.description")
    }
  ];

  return (
    <section id="why-choose" className="py-6 px-6 bg-black text-white">
      <SectionTitle
        title={t("whyChoose.title")}
        subtitle={t("whyChoose.subtitle")}
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={reason.key}
              className="bg-neutral-900 rounded-2xl p-8 text-center transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-orange-500 text-4xl mb-4 mx-auto"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-sm">{reason.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
