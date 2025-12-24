import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div
      className="
        bg-neutral-900 border border-neutral-800
        rounded-2xl p-8
        hover:border-orange-500
        hover:-translate-y-2
        transition-all duration-300
        flex flex-col justify-between
        min-h-[300px]  /* <-- Hauteur minimale identique */
      "
    >
      {/* Icône flottante */}
      <motion.div
        className="text-4xl text-orange-500 mb-4"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon />
      </motion.div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
