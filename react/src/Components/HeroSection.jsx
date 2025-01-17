import React from 'react';
import hero from '../../src/assets/illustration-desktop.4a9233fc.jpg';
import hero1 from '../../src/assets/hero-shape.svg';


const HeroSection = () => {
  return (
    // Hero Section
    <section className="relative bg-deepBlue h-[70vh] flex items-center pt-[50px] ">
      <div className="w-10/12 md:w-11/12 h-full flex flex-col lg:flex-row justify-between items-center mx-auto max-w-[1080px]">

        {/* Left Part (Text) */}
        <div className="text-white flex flex-col space-y-8 lg:w-1/2 max-w-[400px]">  {/* Reduced width */}
          <h1 className="font-mullish font-bold text-[40px] leading-[1.2]">
            Power your finance, grow your business
          </h1>
          <div className="w-10 h-1 bg-greenLight"></div> {/* Reduced width of the line */}
          <p className="font-mullish text-[18px] leading-7 text-white opacity-70">
            Accept payments from customers. Automate payouts to vendors & employees.
            Never run out of working capital.
          </p>
          <button
            className="bg-lightBlue font-inherit rounded-md font-bold py-3 px-6 hover:bg-lightBlue300 transition-all duration-200 w-32 h-12"
          >
            Sign Up 
          </button>
        </div>

        {/* Right Part (Illustration) */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 mr-12 flex justify-center">
          <img src={hero} alt="Illustration" className="max-w-[700px] " />
        </div>
      </div>

      {/* Shape Part */}
      <div
          class="absolute w-full md:w-[103%] left-0 right-0 top-[98%] md:-right-2 z-[1000]"
        >
          <img
            src={hero1}
            alt=""
            class="w-full object-fill z-10"
          />
        </div>
    </section>
  );
};

export default HeroSection;
