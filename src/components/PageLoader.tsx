import { motion } from "motion/react";
import { Home } from "lucide-react";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-primary mb-4"
      >
        <Home size={64} strokeWidth={1.5} />
      </motion.div>
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-primary font-serif text-xl font-bold tracking-widest"
      >
        GENADE <span className="text-secondary">HOMES</span>
      </motion.div>
      <div className="mt-8 w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-full bg-secondary"
        />
      </div>
    </motion.div>
  );
}
