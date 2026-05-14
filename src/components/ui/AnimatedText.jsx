import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const defaultWords = [
  "Full-Stack Applications",
  "AI-Powered Projects",
  "Modern React Interfaces",
  "Scalable Web Solutions",
  "Recruiter-Ready Products",
];

function AnimatedText({ words = defaultWords, interval = 2200 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="relative inline-flex min-h-[1.25em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="inline-block bg-gradient-to-r from-violet-400 via-cyan-300 to-violet-300 bg-clip-text text-transparent"
          initial={{ y: 24, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -24, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default AnimatedText;
