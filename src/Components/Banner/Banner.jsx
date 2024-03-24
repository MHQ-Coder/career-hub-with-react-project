
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen navbar ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://mhqdeveloper.github.io/mhq-portfolio/images2/pp.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="text-center md:text-start">
                        <h1 className="text-5xl font-bold">One Step Closer To Your <br /> <span className="text-indigo-500">Dream Job</span></h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-gradient-to-r from-indigo-300 via-purple-100 ">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;