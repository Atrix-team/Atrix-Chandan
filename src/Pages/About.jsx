import React from "react";
import AboutImage from "../assets/AboutImage.jpg";
import LogoMarquee from "../Components/marqueelogo/LogoMarquee";
import Button from "../Components/Button";

const About = () => {
  return (
    <div>
      <div className="bg-(--darkblack) py-14  container mx-auto max-w-full px-10 ">
        <LogoMarquee />

        <div className="bg-(--darkblack) p-">
          <h1
            className="font-bold lg:flex justify-center lg:right-60 top-14 relative text-8xl lg:text-9xl text-transparent "
            style={{ WebkitTextStroke: "1px white" }}
          >
            About us
          </h1>
          <div className="lg:flex items-center justify-center px-10">
            <img
              src={AboutImage}
              className="h-full  w-full max-w-[1060px]"
              alt="About Us"
            />
            <div className="text-(--white) lg:-left-16 relative w-full max-w-[565px]  p-2">
              <p className="text-xl font-semibold text-(--gray) mb-2">
                Our Vision
              </p>
              <h5 className="text-5xl font-bold mb-5">
                Unlock Revenue Growth for Your Business
              </h5>
              <h6 className="text-2xl font-semibold mb-10">
                Our goal is to make it as easy as possible for you to walk away
                with the solution that suits your needs perfectly.
              </h6>
              <div className="border border-(--black) mb-5"></div>
              <p className="text-md text-(--gray) mb-4">
                Through our years of experience, we’ve also learned that while
                each channel has its own set of advantages, they all work best
                when strategically paired with other channels. This is the main
                factor that sets us apart from our competition and allows us to
                deliver a specialist business consultancy service.
              </p>
              <Button mybtn={"Learn More"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
