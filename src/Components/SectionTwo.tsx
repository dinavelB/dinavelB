import "../index.css";
import { experiences } from "../Experiences/experience-list";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Experience() {
  const [click, setClick] = useState("/Experience/exp-one");
  const nav = useNavigate();

  const navClicked = (path: any) => {
    nav(path);
    setClick(path);
  };

  useEffect(() => {
    nav("/Experience/exp-one");
  }, []);

  return (
    <>
      <section className="mt-40 md:flex justify-center mb-40">
        <section className="md:w-300">
          <h1 className="text-6xl font-extrabold">
            Experience<span className="text-purple-800">.</span>
          </h1>
          <section className="mt-15 md:w-300 flex gap-30">
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
