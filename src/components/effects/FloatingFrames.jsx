import { motion } from "framer-motion";

const frames = [
  "left-[8%] top-[18%] h-24 w-24",
  "right-[10%] top-[22%] h-32 w-32",
  "bottom-[18%] left-[14%] h-28 w-28",
  "bottom-[12%] right-[18%] h-20 w-20",
];

function FloatingFrames() {
  return (
    <>
      {frames.map((frame, index) => (
        <motion.div
          key={frame}
          className={`absolute ${frame} rounded-3xl border border-cyan-300/10`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 8, 0],
            opacity: [0.12, 0.28, 0.12],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

export default FloatingFrames;
