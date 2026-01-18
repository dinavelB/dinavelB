import "../index.css";
import { skills } from "../Experiences/skills-lists";

export function Skills() {
  return (
    <section className="flex justify-center min-[300px]:max-[639px]:p-10 mt-10 sm:p-20">
      <section className="w-300 ">
        <h1 className="min-[300px]:max-[639px]:text-4xl font-extrabold">
          Skills<span className="text-purple-800">.</span>
        </h1>
        <section className="grid gap-10 mt-10 min-[300px]:max-[639px]:grid-cols-2 sm:grid-cols-2 gap-0">
          {skills.map((skill, index) => (
            <div key={index}>
              <h1 className="text-3xl font-semibold sm:mt-10">{skill.title}</h1>
              <ul className="mt-5">
                {skill.skills.map((item, i) => (
                  <li className=" text-xl text-gray-800 pt-1" key={i}>
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
