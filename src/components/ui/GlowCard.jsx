function GlowCard({ children, className = "" }) {
  return (
    <div
      className={`glass-card premium-border hover-lift hover-glow rounded-3xl p-6 transition-premium ${className}`}
    >
      {children}
    </div>
  );
}

export default GlowCard;
