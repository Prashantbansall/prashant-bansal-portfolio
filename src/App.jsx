function App() {
  return (
    <main className="min-h-screen bg-[#050816] text-slate-50">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
          Premium Animated Portfolio
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          Prashant Bansal Portfolio
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
          A modern full-stack developer portfolio built with React, Vite,
          Tailwind CSS v4, and Framer Motion.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:-translate-y-1 hover:shadow-cyan-500/20">
            View Projects
          </button>

          <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/50">
            Download Resume
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
