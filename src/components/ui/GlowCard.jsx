function GlowCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07] ${className}`}
    >
      {children}
    </div>
  );
}

export default GlowCard;
