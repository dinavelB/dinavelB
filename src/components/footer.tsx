import "../index.css";

export default function Footer() {
  return (
    <footer id="contact" className="section-shell py-10 sm:py-14">
      <section className="flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)] sm:p-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Interested working with me?
          </h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:dinavelbukari@gmail.com"
              className="rounded-lg bg-purple-800 px-4 py-2.5 font-semibold text-white hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-slate-300 px-4 py-2.5 font-semibold text-slate-900 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Browse Projects
            </a>
          </div>
        </div>

        <div className="text-sm font-medium text-slate-600 sm:text-base">
          © 2026 dinavelB
        </div>
      </section>
    </footer>
  );
}
