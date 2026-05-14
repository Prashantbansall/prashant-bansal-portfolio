import { Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold tracking-tight text-white">
          Prashant<span className="text-cyan-300">.dev</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#resume"
          className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/10 md:inline-flex"
        >
          Resume
        </a>

        <button className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden">
          <Menu size={20} />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
