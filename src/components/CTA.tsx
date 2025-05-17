const CTA = () => {
  return (
    <section className="flex flex-col justify-center w-full max-lg:px-4 lg:w-[60%] mx-auto py-20 text-center space-y-4">
      <h1 className="text-4xl text-black font-bold py-2">
        Start Your Focus Journey Today
      </h1>
      <p className="text-xl text-orange-500 font-semibold">
        Limited Time Offer — Save 50% (Ends April 30th)
      </p>
      <span className="flex items-center space-x-4 mx-auto">
        <p className="text-4xl font-bold">$49</p>
        <p className="text-lg line-through text-gray-500">$99</p>
      </span>
      <button className="rounded-full px-5 py-3 bg-orange-500 text-white hover:bg-orange-500/80 w-fit mx-auto transition-colors duration-200 ease-out cursor-pointer text-lg font-medium">
        Enroll Now - Get Instant Access
      </button>
      <div className="text-sm text-gray-600">
        Offer expires in: <span className="font-bold">2d 12h 03m</span>
      </div>
      <p className="text-sm  text-gray-500">
        30-day money-back guarantee. No questions asked.
      </p>
    </section>
  );
};

export default CTA;
