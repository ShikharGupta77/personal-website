import Navbar from "./Navbar";
import Cube from "./Cube";

export default function Hero() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <section className="items-strech mb-40 flex h-full grow flex-row whitespace-nowrap lg:flex-col-reverse">
        <div className="flex w-7/12 flex-col items-center justify-center text-left lg:mb-2 lg:mt-10 lg:w-full lg:text-center">
          <div className="w-8/12 lg:w-full desktop:space-y-9 desktop:pr-4">
            <h2 className="text-xl-responsive font-semibold text-secondary-color">Hey there! I'm</h2>
            <h1 className="text-2xl-responsive font-semibold text-accent-color">Shikhar Gupta</h1>
            <h3 className="text-lg-responsive text-secondary-color ">I like creating apps, websites, and AI models</h3>
          </div>
        </div>
        <div className="flex flex-1 lg:mt-14 lg:w-full desktop:mr-16 desktop:mt-20 desktop:w-5/12">
          <Cube />
        </div>
      </section>
    </div>
  );
}
