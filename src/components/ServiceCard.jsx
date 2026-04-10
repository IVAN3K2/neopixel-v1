import { motion } from "framer-motion";

export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-8 text-center border border-neutral-800 hover:border-orange-500 transition h-full flex flex-col">
      <motion.div
        className="text-orange-500 text-4xl mb-4 mx-auto flex justify-center"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {Icon ? <Icon /> : null}
      </motion.div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm flex-1">{description}</p>
    </div>
  );
}
