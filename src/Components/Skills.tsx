import "../index.css";
import { skills } from "../Experiences/skills-lists";

export function Skills() {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-5 mt-10">
      <section className="y">
        <h1 className="tittle-responsive font-extrabold">
          Skills<span className="text-purple-800">.</span>
        </h1>
        <section className="grid-responsive">
          {skills.map((skill, index) => (
            <div key={index}>
              <h1 className="text-xl font-semibold sm:mt-10">{skill.title}</h1>
              <ul className="mt-5">
                {skill.skills.map((item, i) => (
                  <li className="text-lg text-gray-800 pt-1" key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}