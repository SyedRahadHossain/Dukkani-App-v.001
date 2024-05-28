const Banner = () => {
  return (
    <div className="">
      {/* <div className="hero sm:h-[300px] sm:w-screen md:h-[600px] md:w-screen bg-[url('/src/assets/Picture/BannerBg.png')]"> */}
      <div className="hero sm:h-[300px] md:h-[600px] sm:max-w-full md:max-w-full lg:max-w-full bg-[url('/src/assets/Picture/BannerBg.png')]">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="">
          <div className="hero-content text-center text-neutral-content ">
            <div className="max-w-md">
              <h1 className="mb-5 text-3xl sm:text-4xl md:text-8xl lg:text-9xl   font-bold">
                Dukkani
              </h1>
              <p className="mb-5  text-lg sm:text-2xl md:text-4xl  ">
                Elevate Your Online Shopping Experience
              </p>
              {/* <button className="btn btn-primary ">Shop Now</button> */}
              <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white">
                Shop Now{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
