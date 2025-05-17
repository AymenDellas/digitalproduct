const Hero = () => {
  return (
    <section className="flex flex-col justify-center w-full max-lg:px-4 lg:w-[60%] mx-auto py-20 text-center space-y-4">
      <h1 className="text-6xl max-lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 font-bold py-2 animate-gradient">
        Unlock Deep Focus and 3x <br /> Your Productivity
      </h1>
      <p className="text-xl text-gray-500">
        Join 12,000+ professionals who’ve mastered deep work
      </p>
      <button className="rounded-full px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white  w-fit mx-auto transition-all duration-200 ease-out cursor-pointer text-lg font-medium relative group">
        <span className="relative z-10">Get Instant Access - $49</span>
        <div className="absolute inset-0 bg-orange-500/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </section>
  );
};

export default Hero;
