import Navbar from "./Navbar";
import Cube from "./Cube";
import { LiaAngleRightSolid } from "react-icons/lia";

export default function Hero() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <section className="items-strech flex h-full grow flex-row whitespace-nowrap lg:flex-col-reverse">
        <div className="flex w-7/12 flex-col items-center justify-center text-left lg:mb-24 lg:mt-10 lg:w-full lg:text-center">
          <div className="-ml-5 -mt-10 w-8/12 lg:w-full desktop:mb-32 desktop:pr-4">
            <div className="-ml-[2.5%] flex scale-95 flex-col space-y-5">
              <h2 class="text-xl font-semibold text-secondary-color 2xl:text-6xl desktop:text-5xl">Hey there! I'm</h2>
              <h1 className="text-8xl font-semibold text-accent-color lg:text-base xl:text-7xl">Shikhar Gupta</h1>
              <h3 className="text-2xl text-secondary-color lg:text-sm xl:text-xl">I like creating apps, websites, and AI models</h3>
            </div>
            <button className="mt-5 rounded-full bg-secondary-color py-2 lg:mt-4">
              <div className="group flex w-full flex-row pl-5 pr-4">
                See my work
                <LiaAngleRightSolid size={15} className="my-auto mt-[0.3rem] w-6 transition-all duration-300 desktop:group-hover:pl-2" />
              </div>
            </button>
          </div>
        </div>
        <div className="mb-24 flex flex-1 lg:mt-14 lg:w-full desktop:mr-16 desktop:mt-20 desktop:w-5/12">
          <Cube />
        </div>
      </section>
    </div>
  );
}
