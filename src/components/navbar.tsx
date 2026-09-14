export function Navigation() {
  const navItems = [
    { label: "Home", target: "home" },
    { label: "Projects", target: "projects" },
    { label: "About", target: "about" },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between gap-3 py-4">
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="text-xl font-bold text-slate-900 sm:text-2xl"
        >
          dinavelB
        </button>

        <ul className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-slate-700 sm:gap-4 md:gap-6 lg:text-base">
          {navItems.map((item) => (
            <li key={item.target}>
              <button
                type="button"
                onClick={() => scrollTo(item.target)}
                className="rounded-full px-2 py-1.5 hover:text-purple-700 sm:px-3"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-purple-700 hover:text-purple-700 sm:inline-flex"
        >
          Let’s talk
        </a>
      </nav>
    </header>
  );
}
