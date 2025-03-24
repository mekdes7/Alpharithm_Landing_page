import React, { useState, useEffect } from "react";

const Hero = () => {
  const [position, setPosition] = useState({ x: 200, y: 300 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: 200 + (e.clientX - window.innerWidth / 2) * 0.05,
        y: 300 + (e.clientY - window.innerHeight / 2) * 0.05,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <section
        className="relative w-screen text-white text-center py-20 px-4 overflow-hidden"
        style={{
          background: "radial-gradient(at 50% 75%,rgb(9, 64, 127), rgb(2,34,70), rgb(2,34,70))",
        }}
      >
       
        <div
          className="absolute w-56 h-56 bg-blue-500 opacity-40 blur-3xl rounded-full transition-transform duration-700"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        ></div>

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}

    
        <div className="relative w-full max-w-2xl mx-auto mt-12">
          <div className="text-sky-500 mb-3.5">Leverage On Automation</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            AI Models for Business Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4">
            Leverage the power of AI to automate, analyze, and optimize your workflows.
            Our specialized models are designed to fit different business needs.
          </p>
          <button className="relative mt-6 px-6 py-3 text-black font-bold rounded-xl overflow-hidden transition-all duration-500 bg-white group ">
        
          <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-sky-600 to-sky-500 w-0 group-hover:w-full transition-all duration-500 ease-out "></span>
          <span className="absolute inset-0 top-1/4 h-1/4 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-500 delay-100 ease-out "></span>
          <span className="absolute inset-0 top-1/2 h-1/4 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-500 w-0 group-hover:w-full transition-all duration-500 delay-200 ease-out "></span>
          <span className="absolute inset-0 top-3/4 h-1/4 bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-400 w-0 group-hover:w-full transition-all duration-500 delay-300 ease-out "></span>
          
        
          <span className="absolute top-0 left-0 w-full h-1 bg-white opacity-0 group-hover:opacity-100 group-hover:translate-x-[-100%] transition-all duration-300 delay-150"></span>
          <span className="absolute bottom-0 right-0 w-full h-1 bg-white opacity-0 group-hover:opacity-100 group-hover:translate-x-[100%] transition-all duration-300 delay-200"></span>

       
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Get Started Now
          </span>
        </button>
        </div>
      </section>
      <div className="container mx-auto bg-white p-4">
        <p className="text-center text-black">Join 4,000+ Companies already growing</p>
        <div className="overflow-hidden py-6">
      <div className="flex space-x-28 animate-scroll">
      
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex space-x-40">
            <img src="Layer.png" alt="Layer" className="h-8 w-auto" />
            <img src="Sisyphus.png" alt="Sisyphus" className="h-8 w-auto" />
            <img src="circooles.png" alt="circooles" className="h-8 w-auto" />
            <img src="catalog.png" alt="catalog" className="h-8 w-auto" />
            <img src="Quetie.png" alt="Quetie" className="h-8 w-auto" />
          </div>
        ))}
      </div>

     
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 25s linear infinite;
          }
        `}
      </style>
    </div>
      </div>
    </>
  );
};

export default Hero;
