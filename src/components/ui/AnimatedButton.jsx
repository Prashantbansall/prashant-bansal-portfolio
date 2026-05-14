function AnimatedButton({ children, href = "#", variant = "primary" }) {
  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-950/40 hover:shadow-cyan-500/20",
    secondary:
      "border border-white/10 bg-white/5 text-white backdrop-blur hover:border-cyan-400/50 hover:bg-white/10",
    ghost: "text-slate-300 hover:text-cyan-300",
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

export default AnimatedButton;
