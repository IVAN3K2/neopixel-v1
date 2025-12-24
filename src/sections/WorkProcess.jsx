import { FaLightbulb, FaLaptopCode, FaUsers, FaRocket } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function WorkProcess() {
  const { t } = useTranslation();

  const steps = [
    {
      key: "idea",
      icon: FaLightbulb,
      title: t("workProcess.steps.idea.title"),
      description: t("workProcess.steps.idea.description")
    },
    {
      key: "design",
      icon: FaLaptopCode,
      title: t("workProcess.steps.design.title"),
      description: t("workProcess.steps.design.description")
    },
    {
      key: "development",
      icon: FaUsers,
      title: t("workProcess.steps.development.title"),
      description: t("workProcess.steps.development.description")
    },
    {
      key: "delivery",
      icon: FaRocket,
      title: t("workProcess.steps.delivery.title"),
      description: t("workProcess.steps.delivery.description")
    }
  ];

  return (
    <section id="work-process" className="py-6 px-6 bg-black text-white">
      <SectionTitle
        title={t("workProcess.title")}
        subtitle={t("workProcess.subtitle")}
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mt-8">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.key}
              className="bg-neutral-900 rounded-2xl p-8 text-center transition-transform flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-orange-500 text-4xl mb-4 flex justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
