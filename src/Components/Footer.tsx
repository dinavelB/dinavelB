import "../index.css";

export default function Footer() {
  return (
    <footer className="flex justify-center sm:p-10 min-[300px]:max-[639px]:p-5">
      <section className="flex justify-between w-full items-center min-[300px]:max-[639px]:flex-col gap-y-10">
        <div>
          <h1 className="text-2xl text-gray-800 font-semibold">
            Interested working with me?
          </h1>
          <div className="flex mt-10 gap-x-10">
            <button className="transition ease-in-out duration-300 transform bg-purple-800 px-4 p-2 text-white rounded-lg hover:-translate-y-2 hover:bg-blue-500">
              Get in touch
            </button>
            <button className="transition ease-in-out duration-300 transform px-4 p-2 rounded-lg border border-black hover:bg-blue-500 hover:text-white hover:-translate-y-2">
              Browse Projects
            </button>
          </div>
        </div>
        <div>
          <h1>@2026 dinavelB</h1>
        </div>
      </section>
    </footer>
  );
}
