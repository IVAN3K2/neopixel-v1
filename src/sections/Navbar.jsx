import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const links = [
    { key: "home", href: "#hero" },
    { key: "services", href: "#services" },
    { key: "whyChoose", href: "#why-choose" },
    { key: "process", href: "#work-process" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ];

  const toggleLang = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.nav
      className="fixed w-full bg-black/90 backdrop-blur-md z-50 shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition">
          NEOpixel
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 items-center text-gray-300 font-semibold">
          {links.map((link) => (
            <motion.li key={link.key} whileHover={{ y: -2, scale: 1.05 }} transition={{ duration: 0.2 }}>
              <a href={link.href} className="hover:text-orange-500 transition">{t(`navbar.${link.key}`)}</a>
            </motion.li>
          ))}

          {/* Toggle langue */}
          <li>
            <button
              onClick={toggleLang}
              className="ml-4 relative inline-flex items-center h-8 w-20 bg-white rounded-full p-1 cursor-pointer transition-all"
            >
              <span
                className={`absolute left-1 w-8 h-6 bg-orange-500 rounded-full shadow-md transform transition-transform ${
                  i18n.language === "en" ? "translate-x-10" : "translate-x-0"
                }`}
              ></span>
              <span className="absolute left-2 text-sm text-black font-bold">FR</span>
              <span className="absolute right-2 text-sm text-black font-bold">EN</span>
            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="px-3 py-1 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-black transition"
          >
            {i18n.language.toUpperCase()}
          </button>
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu animé */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden flex flex-col space-y-4 bg-black/95 px-6 py-4 text-gray-300 font-semibold"
          >
            {links.map((link) => (
              <motion.li
                key={link.key}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href={link.href} onClick={() => setOpen(false)} className="hover:text-orange-500 transition">
                  {t(`navbar.${link.key}`)}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
