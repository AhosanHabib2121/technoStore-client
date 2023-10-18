import './Banner.css'

const Banner = () => {
    return (
       <div className="hero min-h-screen banner-image font-robotFont">
        <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-[#82b440]">Explore Technology and Electronics </h1>
                <p className="mb-5">Embark on a journey through the world of cutting-edge technology and electronics. Dive into the latest innovations, explore the evolution of gadgets, and stay updated with the rapidly advancing tech landscape. </p>
                <button className=" py-3 text-lg bg-[#82b440] px-5 rounded-lg font-medium  normal-case text-white hover:bg-[#538b0b]">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;