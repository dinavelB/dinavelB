import "../index.css";
import profile from "../../profile.jpg";
import { projects } from "../Projects/project-list";

export function Navigation() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full top-0 bg-white/70 backdrop-blur-lg flex justify-around items-center py-5 px-4 font-semibold text-lg z-50">
      <label className="text-2xl font-bold">dinavelB</label>
      <ul className="flex gap-4 md:gap-10">
        <li
          className="p-2 hover:text-blue-700 cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          Home
        </li>
        <li
          className="p-2 hover:text-blue-700 cursor-pointer"
          onClick={() => scrollTo("projects")}
        >
          Projects
        </li>
        <li
          className="p-2 hover:text-blue-700 cursor-pointer"
          onClick={() => scrollTo("about")}
        >
          About
        </li>
      </ul>
      <label className="block max-[640px]:min-[300px]:hidden">
        message chat
      </label>
    </nav>
  );
}

export function MainSection() {
  return (
    <section
      id="home"
      className="w-full flex flex-col-reverse sm:flex-col-reverse items-center justify-center px-4 min-[300px]:max-[639px]:mt-30 sm:mt-30 sm:px-10 overflow-x-hidden gap-10"
    >
      {/* Text Content */}
      <div className="flex-1 flex flex-col gap-6 max-w-lg">
        <label className="font-semibold text-2xl">Hey, I'm Dinavel</label>
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
          <span className="text-purple-800">Full</span>Stack Developer /
          <span className="text-purple-800"> QA</span> Engineer
        </h1>
        <p className="text-gray-700 text-lg">
          I'm a Full Stack Developer/QA Engineer based in the Philippines.
          Contact me and I'll happily help you build websites catered to users.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="transition transform bg-purple-800 text-white px-6 py-2 rounded-lg hover:-translate-y-1 hover:bg-blue-500">
            Get in touch
          </button>
          <button className="transition transform border border-black px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white hover:-translate-y-1">
            Browse Projects
          </button>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={profile}
          alt="profile"
          className="w-64 sm:w-72 md:w-80 rounded-full border-2 border-blue-800 object-cover"
        />
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full flex justify-center px-4 min-[300px]:max-[630px]:p-10 sm:p-10 overflow-x-hidden"
    >
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-10">
          Projects<span className="text-purple-800">.</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full max-w-full h-auto object-contain rounded-lg"
              />
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="text-gray-700 text-lg">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
