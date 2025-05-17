import React from "react";

const Testimonial = () => {
  return (
    <section className="flex flex-col justify-center w-full max-lg:px-4  lg:px-96 mx-auto py-20 bg-gray-100 space-y-4">
      <div className="p-4 shadow-lg w-[70%] mx-auto space-y-8 border border-gray-800/20 rounded-lg ">
        <p className="text-gray-600">
          "This program completely transformed how I work. I went from
          constantly checking email to having focused 3-hour deep work sessions.
          My productivity has literally doubled."
        </p>
        <div className="flex items-center space-x-2">
          <span className="rounded-full w-12 h-12 flex justify-center items-center  bg-orange-500 text-white">
            S
          </span>
          <div>
            <h3 className="font-bold text-lg">Sarah Chen</h3>
            <h4 className="text-gray-500">Product Manager, Tech Co</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
