import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-violet-500 to-cyan-400"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default ScrollProgress;
