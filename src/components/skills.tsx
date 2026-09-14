import "../index.css";
import { skills } from "../experiences/skills-lists";

export function Skills() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          Skills<span className="text-purple-800">.</span>
        </h1>
      </div>

      <div className="grid-responsive">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
          >
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              {skill.title}
            </h2>
            <ul className="mt-5 space-y-2">
              {skill.skills.map((item, i) => (
                <li key={i} className="text-base text-slate-700 sm:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
