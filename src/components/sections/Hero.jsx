import { motion } from "framer-motion";
import AnimatedButton from "../ui/AnimatedButton";

function Hero() {
  return (
    <section
      id="home"
      className="portfolio-container flex min-h-screen items-center pt-24"
    >
      <div className="max-w-4xl">
        <motion.p
          className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          B.Tech CS Graduate · Full-Stack Developer
        </motion.p>

        <motion.h1
          className="text-4xl font-bold tracking-tight text-white md:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Hi, I&apos;m Prashant Bansal.
          <span className="block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
            I build modern digital products for the web.
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          A B.Tech Computer Science graduate building scalable full-stack
          applications, polished interfaces, and practical software solutions
          with modern web technologies.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <AnimatedButton href="#projects">View Projects</AnimatedButton>
          <AnimatedButton href="#resume" variant="secondary">
            Download Resume
          </AnimatedButton>
          <AnimatedButton href="#contact" variant="ghost">
            Contact Me
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
