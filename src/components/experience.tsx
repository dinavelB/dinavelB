import "../index.css";
import { useState } from "react";
import { ExpOne } from "../experiences/AboutExp/Exp1";
import { ExpTwo } from "../experiences/AboutExp/Exp2";
import { ExpThree } from "../experiences/AboutExp/Exp3";

const experienceCards = [
  { title: "QA Engineer", content: <ExpOne /> },
  { title: "Full Stack Developer", content: <ExpTwo /> },
  { title: "Backend Developer", content: <ExpThree /> },
];

export function Experience() {
  const [selected, setSelected] = useState(0);
  const [bounceIndex, setBounceIndex] = useState<number | null>(null);
  return (
    <section id="about" className="section-shell py-16 sm:py-20">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          Experience<span className="text-purple-800">.</span>
        </h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <nav className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {experienceCards.map((option, index) => {
            const isActive = index === selected;
            const isBouncing = index === bounceIndex;
            return (
              <button
                key={index}
                onClick={() => {
                  setSelected(index);
                  setBounceIndex(index);
                  window.setTimeout(() => setBounceIndex(null), 360);
                }}
                className={
                  "text-left rounded-2xl border p-4 text-base font-semibold shadow-sm sm:text-lg transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-200 " +
                  (isActive
                    ? "border-purple-200 bg-purple-50 text-purple-800"
                    : "border-slate-200 bg-white text-slate-700") +
                  (isBouncing ? " animate-bounce-subtle" : "")
                }
              >
                {option.title}
              </button>
            );
          })}
        </nav>

        <div>
          <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
            {experienceCards[selected].content}
          </article>
        </div>
      </div>
    </section>
  );
}
