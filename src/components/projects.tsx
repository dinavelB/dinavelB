import { projects } from "@projects/project-list";

export function Projects() {
  const projs = projects;
  return (
    <section id="projects" className="section-shell py-16 sm:py-20">
      <div className="rounded-[2rem] bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-12">
        <h1 className="mb-8 text-4xl font-extrabold sm:text-5xl">
          Projects<span className="text-purple-800">.</span>
        </h1>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projs.map((project, index) => (
            <article
              key={index}
              className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <img
                src={project.img}
                alt={project.title}
                className="h-52 w-full rounded-xl object-cover shadow-sm"
              />
              <div className="flex flex-1 flex-col gap-3">
                <h2 className="text-2xl font-bold text-slate-900">
                  {project.title}
                </h2>
                <p className="text-base leading-7 text-slate-700">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
