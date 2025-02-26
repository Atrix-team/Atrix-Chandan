import React, { useEffect, useState, useRef } from 'react';
// import './Services.css';
import Service1 from "../assets/ServicesImage/service-1.png";
import Service2 from '../assets/ServicesImage/service-2.png';
import Service3 from "../assets/ServicesImage/service-3.png";
import Service4 from "../assets/ServicesImage/service-4.png";
import Service5 from "../assets/ServicesImage/service-5.png";
import Service6 from "../assets/ServicesImage/service-6.png";
import Service7 from "../assets/ServicesImage/service-7.png";
import graphic from "../assets/ServicesImage/graphic.svg"
import logo from "../assets/ServicesImage/Asset 2.svg"

const services = [
  {
    title: 'UI-UX Design',
    description: 'As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction.',
    image: graphic
  },
  {
    title: 'Mobile Apps',
    description: 'We develop mobile apps that provide seamless user experiences and meet the demands of modern mobile users.',
    image: Service7
  },
  {
    title: 'Backend Development',
    description: 'Our backend development ensures the best performance and security for your web and mobile applications.',
    image: Service6
  },
  {
    title: 'Frontend Development',
    description: 'We build responsive and dynamic web applications with the latest frontend technologies.',
    image: graphic
  },
  {
    title: 'Artificial Intelligence',
    description: 'Our AI services help automate processes and deliver intelligent insights through advanced machine learning models.',
    image: graphic
  },
  {
    title: 'Data Analysis & Data Science',
    description: 'We provide data-driven solutions to help businesses extract valuable insights and improve decision-making.',
    image: graphic
  },
  {
    title: 'Managed Cloud & DevOps',
    description: 'Our cloud and DevOps solutions provide scalable, reliable, and secure infrastructure for businesses.',
    image: graphic
  }
];

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const windowCenter = windowHeight / 2; 
        cardsRef.current.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
      
          if (cardCenter >= windowCenter - 200 && cardCenter <= windowCenter + 200) {
            setActiveIndex(index);
            card.style.opacity = '1';
            if (imagesRef.current[index]) {
              imagesRef.current[index].classList.add('active-img');
            }
          } else {
            card.style.opacity = '0.2';
            if (imagesRef.current[index]) {
              imagesRef.current[index].classList.remove('active-img');
            }
          }
        });
      };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white py-[150px] pb-[250px]">
      <div className="max-w-[1400px] mx-auto px-[40px]">
        <div className="text-center">
          <h2 className="text-[45px]">Our Services</h2>
        </div>
        <div className="flex mt-[100px]">
          <div className="w-1/2 pr-[150px]">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`opacity-30 transition-all duration-500 ease-in-out relative mt-[300px]`}
              >
                <h3 className="text-[30px] mt-[10px]">
                  <span className="inline-block w-[35px] h-[35px] bg-gradient-to-r from-[#1a8ef7] to-[#14624b] rounded-full transform translate-y-[8px] mr-[4px]"> <img className='mt-1 brightness-[6.5] w-6 h-6 ml-1 ' src={logo} alt="" /> </span> 
                  {service.title}
                </h3> 
                <p className="text-[#ffffffb3] text-[16px] mt-[50px] leading-[2.2rem]">{service.description}</p>
                <div className="mt-[35px] flex flex-wrap">
                  <a href="#" className="text-white bg-gradient-to-r from-[#1a8ef7] to-[#14624b] border-2 border-transparent rounded-[24px] px-[24px] py-[7px] inline-block mt-[10px] mr-[10px] transition-all duration-300 ease hover:bg-gradient-to-r hover:from-[#1a8ef7] hover:to-[#14624b]">
                    Branding
                  </a>
                  <a href="#" className="text-white bg-gradient-to-r from-[#1a8ef7] to-[#14624b] border-2 border-transparent rounded-[24px] px-[24px] py-[7px] inline-block mt-[10px] mr-[10px] transition-all duration-300 ease hover:bg-gradient-to-r hover:from-[#1a8ef7] hover:to-[#14624b]">
                    Logo Design
                  </a>
                  <a href="#" className="text-white bg-gradient-to-r from-[#1a8ef7] to-[#14624b] border-2 border-transparent rounded-[24px] px-[24px] py-[7px] inline-block mt-[10px] mr-[10px] transition-all duration-300 ease hover:bg-gradient-to-r hover:from-[#1a8ef7] hover:to-[#14624b]">
                    Packaging
                  </a>
                  <a href="#" className="text-white bg-gradient-to-r from-[#1a8ef7] to-[#14624b] border-2 border-transparent rounded-[24px] px-[24px] py-[7px] inline-block mt-[10px] mr-[10px] transition-all duration-300 ease hover:bg-gradient-to-r hover:from-[#1a8ef7] hover:to-[#14624b]">
                    UI/UX Design
                  </a>
                  <a href="#" className="text-white bg-gradient-to-r from-[#1a8ef7] to-[#14624b] border-2 border-transparent rounded-[24px] px-[24px] py-[7px] inline-block mt-[10px] mr-[10px] transition-all duration-300 ease hover:bg-gradient-to-r hover:from-[#1a8ef7] hover:to-[#14624b]">
                    Print Media
                  </a>
                  <a href="#" className="text-white bg-gradient-to-r from-[#1a8ef7] to-[#14624b] border-2 border-transparent rounded-[24px] px-[24px] py-[7px] inline-block mt-[10px] mr-[10px] transition-all duration-300 ease hover:bg-gradient-to-r hover:from-[#1a8ef7] hover:to-[#14624b]">
                    Advertisement
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="w-1/2 relative">
            <div className="sticky top-[150px] h-[600px] pl-[70px]">
              {services.map((service, index) => (
                <img
                  key={index}
                  ref={(el) => (imagesRef.current[index] = el)}
                  className={`max-w-[80%] h-auto absolute left-[50px] transition-opacity duration-[0.1s] ease-in opacity-0 scale-[0.7] ${activeIndex === index ? 'opacity-100 scale-100' : ''}`}
                  src={service.image}
                  alt={service.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
