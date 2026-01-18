import "../index.css";
import { experiences } from "../Experiences/experience-list";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Experience() {
  const [click, setClick] = useState("/exp-one");
  const nav = useNavigate();

  const navClicked = (path: any) => {
    nav(path);
    setClick(path);
  };

  useEffect(() => {
    nav("/exp-one");
  }, []);

  return (
    <>
      <section id="about" className="mt-40 sm:flex justify-center p-10">
        <section className="sm:w-full p-5">
          <h1 className="text-6xl font-extrabold">
            Experience<span className="text-purple-800">.</span>
          </h1>
          <section className="mt-15 flex gap-10">
            <nav className="flex flex-col gap-y-8 ">
              {experiences.map((option, index) => (
                <h1
                  key={index}
                  className={`transition ease-in-out duration-300 pl-4 text-2xl ${
                    click === option.path
                      ? "border-l-2 border-blue-800 text-blue-800"
                      : "hover:text-blue-800"
                  }`}
                  onClick={() => navClicked(option.path)}
                >
                  {option.navigate}
                </h1>
              ))}
            </nav>
            <div className="flex-1 flex flex-col gap-y-6">
              <div className="">
                <Outlet />
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
