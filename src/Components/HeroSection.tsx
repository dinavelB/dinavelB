import "../index.css";

export function Navigation() {
  return (
    <>
      <nav className="fixed w-full top-0 bg-white flex justify-around pt-5 pb-5 font-semibold text-lg sm:flex justify-around">
        <label htmlFor="" className="text-2xl">
          dinavelB
        </label>
        <ul className="flex gap-4 md:gap-10  ">
          <li className="p-2 hover:text-blue-700">Home</li>
          <li className=" p-2  hover:text-blue-700">Projects</li>
          <li className=" p-2  hover:text-blue-700">About</li>
        </ul>
        <label htmlFor="">message chat</label>
      </nav>
    </>
  );
}

export function MainSection() {
  return (
    <>
      <section className="flex justify-center mt-10 p-20 gap-x-50 items-center m-5">
        <section className="w-200 flex flex-col gap-y-10">
          <label htmlFor="" className="font-semibold text-2xl">
            Hey,I'm Dinavel
          </label>
          <h1 className="text-8xl font-extrabold">
            <span className="text-purple-800">Full</span>Stack Developer/
            <span className="text-purple-800">QA</span>Engineer
          </h1>
          <label htmlFor="" className="text-2xl text-gray-700">
            I'm a Full Stack Developer/QA Engineer based on Philippines. Contact
            me and I'll happily help you to build websites catered to users.
          </label>
          <div className="flex gap-x-10">
            <button className="transition ease-in-out duration-300 transform bg-purple-800 px-4 p-2 text-white rounded-lg hover:-translate-y-2 hover:bg-blue-500">
              Get in touch
            </button>
            <button className="transition ease-in-out duration-300 transform px-4 p-2 rounded-lg border border-black hover:bg-blue-500 hover:text-white hover:-translate-y-2">
              Browse Projects
            </button>
          </div>
        </section>
        <img
          src="../profile.jpg"
          alt=""
          className="w-100 h-full object-contain rounded-full border-blue-800 border-1"
        />
      </section>
    </>
  );
}

export function Projects() {
  return (
    <>
      <section className="w-full mt-20 flex justify-center">
        <section className="p-20 rounded-4xl shadow-2xl bg-white">
          <h1 className="text-6xl font-extrabold">
            Projects<span className="text-purple-800 text-left">.</span>
          </h1>
          <section className="w-400 mt-20 flex gap-x-10">
            <div className="">
              <img
                className="object-contain w-800"
                src="../edLibrary.png"
                alt=""
              />
              <h1 className="mt-10 text-2xl font-extrabold">EdLibrary</h1>
              <p className="text-xl text-gray-700">
                A system where users can tracked what books they currently
                borrowed and books that are available to download
              </p>
            </div>
            <div>
              <img
                className="object-contain w-900"
                src="../edLibrary.png"
                alt=""
              />
              <h1 className="mt-10 text-2xl font-extrabold">EdLibrary</h1>
              <p className="text-xl text-gray-700">
                A system where users can tracked what books they currently
                borrowed and books that are available to download
              </p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
