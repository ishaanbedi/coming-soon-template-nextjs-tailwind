import Navbar from "./Navbar"
import { HeroData } from "../data/data"
import Footer from "./Footer"

function Hero() {
    return (
        <>
            <div className="wrapper min-h-screen">
                <Navbar />
                <div className="hero my-36">
                    <div className="hero-content text-center">
                        <div className="w-full">
                            <h1 className="lg:text-8xl md:text-7xl text-6xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
                                    {HeroData.heading}
                                </span>
                            </h1>
                            <p className="py-16 lg:mx-48 md:mx-20 mx-2">{HeroData.subText}</p>
                            <div className="container flex justify-center items-center">
                                <div className="relative flex">
                                    <input type="text" className="h-14 bg-neutral text-secondary w-96 pl-4 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Enter your email address..." />
                                    <div className="absolute top-1 right-2">
                                        <button className="btn h-10 w-18 text-white rounded-lg bg-secondary">Notify Me</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <Footer />
            </div>
        </>
    )
}

export default Hero