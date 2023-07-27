import Navbar from "./Navbar";
import Cube from "./Cube";

export default function Hero() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar /> 
            <div className="flex flex-row flex-grow whitespace-nowrap my-20 justify-between">
                <div className="flex flex-col w-fit items-start ml-40 space-y-6 justify-center pb-48">
                    <h2 className="text-5xl text-secondary-color font-semibold">Hey there! I'm</h2>
                    <h1 className="text-7xl text-accent-color font-semibold">Shikhar Gupta</h1>
                    <h3 className="text-xl text-secondary-color">I like creating apps, websites, and AI models</h3>
                </div>
                <Cube />
            </div>
        </div>
    )
}