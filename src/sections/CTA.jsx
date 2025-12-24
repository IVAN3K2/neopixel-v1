import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-6 bg-orange-500 text-black">
      <div className="max-w-4xl mx-auto text-center">

        {/* Titre */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          {t("cta.title")}
        </motion.h2>

        {/* Sous-texte */}
        <motion.p
          className="text-lg text-black/80 mb-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {t("cta.subtitle")}
        </motion.p>

        {/* Bouton */}
        <motion.a
          href="https://wa.me/237652427807"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.6, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="text-xl"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaPaperPlane />
          </motion.span>

          {t("cta.button")}
        </motion.a>

      </div>
    </section>
  );
}
