import "../index.css";
export function Experience() {
  const options: { title: string; description: string }[] = [
    {
      title: "QA Engineer",
      description: " QA Engineer at developing SaaS platform Kita-PH",
    },
    {
      title: "Front End Developer",
      description: "Web Developer working on solo projetcs",
    },
  ];

  return (
    <>
      <section className="mt-40 md:flex justify-center">
        <section className="md:w-300">
          <h1 className="text-6xl font-extrabold">
            Experience<span className="text-purple-800">.</span>
          </h1>
          <section className="mt-15 md:w-400">
            {options.map((option, index) => (
              <div
                key={index}
                className="pt-5 md:flex gap-100 items-center border-l-2 border-black pl-15"
              >
                <h1 className="text-3xl font-semibold">{option.title}</h1>
                <p className="text-2xl">{option.description}</p>
              </div>
            ))}
          </section>
        </section>
      </section>
    </>
  );
}
