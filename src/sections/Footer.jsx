import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const socialIcons = [
    { icon: FaWhatsapp, href: "https://wa.me/237652427807" },
    { icon: FaFacebookF, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
  ];

  return (
    <motion.footer
      className="bg-black text-gray-400 py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Logo & Description */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2 className="text-2xl font-extrabold text-orange-500 mb-4">
            NEOpixel
          </h2>
          <p>
            {t("footer.description")}
          </p>
        </motion.div>

        {/* Liens rapides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            {t("footer.quickLinks")}
          </h3>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:text-orange-500 transition">{t("footer.links.services")}</a></li>
            <li><a href="#projects" className="hover:text-orange-500 transition">{t("footer.links.projects")}</a></li>
            <li><a href="#work-process" className="hover:text-orange-500 transition">{t("footer.links.process")}</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition">{t("footer.links.contact")}</a></li>
          </ul>
        </motion.div>

        {/* Réseaux & Contact */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            {t("footer.contactTitle")}
          </h3>

          <ul className="flex gap-4 mb-4">
            {socialIcons.map(({ icon: Icon, href }, idx) => (
              <motion.li
                key={idx}
                whileHover={{ y: -4, scale: 1.1, color: "#f97316" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon size={24} />
                </a>
              </motion.li>
            ))}
          </ul>

          <p>
            {t("footer.emailLabel")} :{" "}
            <a
              href="mailto:contact@neopixel.com"
              className="hover:text-orange-500 transition"
            >
              contact@neopixel.com
            </a>
          </p>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="mt-12 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        &copy; {new Date().getFullYear()} NEOpixel. {t("footer.rights")}
      </motion.div>
    </motion.footer>
  );
}
