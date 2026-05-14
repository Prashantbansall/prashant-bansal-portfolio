function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`mb-12 flex flex-col ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
          {eyebrow}
        </p>
      )}

      <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
