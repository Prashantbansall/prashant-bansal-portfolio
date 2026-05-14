import { motion } from "framer-motion";

function GradientBlob({
  className = "",
  color = "bg-violet-600/25",
  duration = 10,
  delay = 0,
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${color} ${className}`}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -25, 20, 0],
        scale: [1, 1.12, 0.95, 1],
        opacity: [0.45, 0.75, 0.55, 0.45],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default GradientBlob;
