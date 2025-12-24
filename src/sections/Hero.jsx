import { FaLayerGroup, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="min-h-screen flex items-center bg-black px-6 pt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* TEXTE À GAUCHE */}
        <div className="text-center lg:text-left">
          <motion.h1 
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            {t('hero.title1')}{' '}
            <span className="text-orange-500">{t('hero.highlight')}</span>
            <br />
            {t('hero.title2')}
          </motion.h1>

          <motion.p
            className="mt-6 text-gray-400 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start flex-wrap gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <a
              href="#services"
              className="inline-flex items-center gap-3 bg-orange-500 border border-orange-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition"
            >
              <FaLayerGroup />
              {t('hero.btnServices')}
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-3 border border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-black transition"
            >
              <FaRocket />
              {t('hero.btnProjects')}
            </a>
          </motion.div>
        </div>

        {/* IMAGE À DROITE */}
        <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
          <motion.div 
            className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-full"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          ></motion.div>

          <motion.img
            src="/hero-image.jpg"
            alt={t('hero.imageAlt')}
            className="relative rounded-2xl shadow-2xl max-w-full w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]"
            animate={{ y: [ -10, 10, -10 ] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Badge Trusted */}
          <motion.div
            className="absolute top-4 left-4 bg-orange-500 text-black font-bold px-4 py-2 rounded-full shadow-lg text-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }} 
            transition={{ delay: 1, duration: 0.5 }}
          >
            {t('hero.trusted')}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
