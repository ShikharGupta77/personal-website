import Navbar from "./Navbar";
import Cube from "./Cube";
import { LiaAngleRightSolid } from "react-icons/lia";

export default function Hero() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <section className="items-strech flex h-full grow flex-col-reverse whitespace-nowrap lg:flex-row">
        <div className="mb-24 mt-10 flex w-full flex-col items-center justify-center text-center lg:mb-0 lg:mt-0 lg:w-7/12 lg:text-left">
          <div className="w-full lg:mb-32 lg:w-8/12 lg:space-y-7 lg:pr-4">
            <h2 className="text-xl-responsive font-semibold text-secondary-color">Hey there! I'm</h2>
            <h1 className="text-2xl-responsive font-semibold text-accent-color">Shikhar Gupta</h1>
            <h3 className="text-lg-responsive text-secondary-color ">I like creating apps, websites, and AI models</h3>
            <button className="mt-4 rounded-full bg-secondary-color py-2 lg:mt-0">
              <div className="group flex w-full flex-row pl-5 pr-4">
                See my work
                <LiaAngleRightSolid size={15} className="my-auto mt-[0.3rem] w-6 transition-all duration-300 lg:group-hover:pl-2" />
              </div>
            </button>
          </div>
        </div>
        <div className="mb-24 mt-14 flex w-full flex-1 lg:mr-16 lg:mt-20 lg:w-5/12">
          <Cube />
        </div>
      </section>
    </div>
  );
}
