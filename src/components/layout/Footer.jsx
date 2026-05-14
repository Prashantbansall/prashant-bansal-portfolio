function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p className="font-semibold text-white">Prashant Bansal</p>
          <p className="text-sm text-slate-400">
            Building modern web applications with clean UI and strong
            engineering fundamentals.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 Prashant Bansal. Built with React, Tailwind CSS, and Framer
          Motion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
