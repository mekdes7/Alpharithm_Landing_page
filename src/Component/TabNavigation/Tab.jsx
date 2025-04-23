import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null); 

  const sections = [
    {
      id: "Market Prediction",
      title: "Market Prediction",
      description: "Use AI insights for smarter business decisions and stay competitive.",
      image: "MarketPrediction.jpg",
    },
    {
      id: "Finance",
      title: "Finance",
      description: "Our AI models analyze financial data for confident investments.",
      image: "Finance.jpg",
    },
    {
      id: "Analytics",
      title: "Analytics",
      description: "Transform data into insights with AI analytics that enhance decisions.",
      image: "Analytics.jpg",
    },
    {
      id: "Content Generation",
      title: "Content Generation",
      description: "Create quality content easily with AI that knows your brand and audience.",
      image: "Content.jpg",
    },
    {
      id: "Customer Support",
      title: "Customer Support",
      description: "Use AI chatbots for instant, personalized customer support.",
      image: "Customer.jpg",
    },
  ];


  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index); 
    }
  };

  
  const handleSlideClick = (index) => {
    setActiveIndex(index); 
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index); 
    }
  };

  return (
    <div className="flex flex-col items-center bg-white text-black py-10 w-full">
      <div className="text-center w-full max-w-lg p-6">
        <h3 className="text-3xl md:text-3xl font-bold leading-tight">
          AI Models tailored for your Business needs
        </h3>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Leverage the power of AI to automate, analyze, and optimize your workflows.
          Our specialized models are designed to fit different business needs.
        </p>
      </div>

     
      <div className="bg-gray-100 flex flex-wrap justify-center p-2 rounded-lg shadow-md mb-8 gap-2">
  {sections.map((section, index) => (
    <button
      key={section.id}
      onClick={() => handleTabClick(index)}
      className={`px-3 sm:px-4 py-2 text-sm sm:text-base md:text-lg transition-all duration-300 rounded-md transform ${
        activeIndex === index
          ? "bg-blue-600 text-white shadow-lg"
          : "text-gray-700"
      } hover:bg-gray-200`}
    >
      {section.title}
    </button>
  ))}
</div>



    
      <div className="w-full max-w-max">
      <Swiper
  loop={true} 
  spaceBetween={25} 
  slidesPerView={3} 
  centeredSlides={true} 
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} 
  onSwiper={(swiper) => (swiperRef.current = swiper)} 
  breakpoints={{
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 3 },
  }}
>
  {sections.map((section, index) => (
    <SwiperSlide 
      key={section.id} 
      className={`transition-all duration-3000 ease-out ${
        index === activeIndex ? "!w-[50%]" : "!w-[30%]"
      }`}
    > 
      <div
        onClick={() => handleSlideClick(index)}
        className={`cursor-grab flex flex-col md:flex-row items-center p-6 rounded-lg 
          transition-all duration-3000 ease-out transform bg-gray-300
          ${
            index === activeIndex
              ? "scale-110  y-20" 
              : "scale-80  -y-20 overflow-hidden" 
          }`}
      >
        <div className="text-left md:w-1/2 px-4">
          <h5 className="font-bold text-gray-800 mb-2">{section.title}</h5>
          <p className="text-gray-600 mb-4 text-sm font-bold">{section.description}</p>
          <button className="text-white bg-blue-700 p-1.5 rounded-lg text-sm hover:bg-blue-800 transition-all">
            Learn More
          </button>
        </div>
        <div className="md:w-xl">
          <img
            src={section.image}
            alt={section.title}
            className={`w-full h-auto rounded-lg transition-all duration-3000 ease-out ${
              index === activeIndex ? "scale-110 opacity-100" : "scale-90 opacity-100"
            }`}
          />
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </div>
  );
};

export default Tabs;