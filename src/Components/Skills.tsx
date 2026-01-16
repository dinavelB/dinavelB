import "../index.css";
import { skills } from "../Experiences/skills-lists";

export function Skills() {
  return (
    <section className="flex justify-center mt-50">
      <section className="w-300 ">
        <h1 className="text-6xl font-extrabold">
          Skills<span className="text-purple-800">.</span>
        </h1>
        <section className="flex gap-x-40 W-400 mt-10">
          {skills.map((skill, index) => (
            <div key={index}>
              <h1 className="text-3xl font-semibold">{skill.title}</h1>
              <ul className="mt-10">
                {skill.skills.map((item, i) => (
                  <li className=" text-xl text-gray-800 pt-3" key={i}>
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
