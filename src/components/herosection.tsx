import "../index.css";
import profile from "../../profile.jpg";

export function MainSection() {
  return (
    <section id="home" className="section-shell pt-28 pb-16 sm:pt-32 lg:pt-36">
      <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <img
            src={profile}
            alt="Dinavel profile"
            className="h-64 w-64 rounded-full object-cover sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]"
          />
        </div>

        {/* Text block — SECOND on mobile, first on md+ */}
        <div className="order-2 flex flex-col items-center gap-6 text-center md:order-1 md:items-start md:text-left">
          <span className="inline-flex rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-800">
            Hey, I&apos;m Dinavel
          </span>
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            <span className="text-purple-800">Backend </span>
            Web Developer /<span className="text-purple-800"> QA</span> Engineer
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
            A backend developer with experience building secure websites,
            following website security protocol for more secured and robust
            platforms users can trust. Experienced with TypeScript, ExpressJs,
            NestJs, PostgreSQL, Git, and Linux.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#contact"
              className="rounded-lg bg-purple-800 px-5 py-3 font-semibold text-white shadow-lg shadow-purple-200 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Browse Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
