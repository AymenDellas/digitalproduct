import { Check } from "lucide-react";
import React from "react";

const Benefits = () => {
  const benefits = [
    "Learn proven techniques to achieve 4+ hours of deep work daily",
    "Build a distraction-free environment that maximizes focus",
    "Develop routines that trigger instant flow state",
    "Track your progress with our proprietary focus metrics",
  ];
  return (
    <section className="flex flex-col justify-center w-full max-lg:px-4 lg:w-[60%] mx-auto py-40 text-center space-y-6">
      <div>
        {" "}
        <h1 className="text-4xl text-black font-bold py-2">
          Master Deep Work in Just 30 Days
        </h1>
        <p className=" text-gray-500 w-[70%] mx-auto">
          Our science-backed system helps you eliminate distractions and enter
          flow state on demand. Say goodbye to procrastination and hello to peak
          performance.
        </p>
      </div>
      <div className="w-fit mx-auto space-y-4">
        {benefits.map((benefit, i) => {
          return (
            <div
              key={i}
              className="flex items-center space-x-2 p-4 bg-gray-100 rounded-lg border border-gray-800/10 text-lg"
            >
              <span className="text-green-500">
                <Check />
              </span>

              <p>{benefit}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;
