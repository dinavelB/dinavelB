import "../index.css";

export function Navigation() {
  return (
    <>
      <div className="flex justify-around pt-5 font-semibold text-lg">
        <label htmlFor="" className="text-2xl">
          dinavelB
        </label>
        <ul className="flex">
          <li className="p-2 px-10  hover:text-blue-700">Home</li>
          <li className=" p-2 px-10  hover:text-blue-700">Projects</li>
          <li className=" p-2 px-10 hover:text-blue-700">About</li>
        </ul>
        <label htmlFor="">message chat</label>
      </div>
    </>
  );
}

export function MainSection() {
  return (
    <>
      <section className="flex justify-center mt-20 p-20 gap-x-50 items-center">
        <section className="w-200 flex flex-col gap-y-10">
          <label htmlFor="" className="font-semibold text-2xl">
            Hey,I'm Dinavel
          </label>
          <h1 className="text-8xl font-extrabold">
            <span className="text-blue-800">Front</span>end Developer
          </h1>
          <label htmlFor="" className="text-2xl">
            I'm a full stack developer/QA Engineer based on Philippines, I'll
            happily help you to build websits catered to your users.
          </label>
          <div className="flex gap-x-10">
            <button className="bg-blue-800 px-4 p-2 text-white rounded-lg">
              Get in touch
            </button>
            <button className="px-4 p-2 rounded-lg border-1 border-black">
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
