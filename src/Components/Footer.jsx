import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/ais-logo.png";

const Footer = () => {
  return (
    <div className="bg-(--darkblack) text-(--white)  mt-28 px-10">
      <div className="container mx-auto max-w-[1700px] ">
        <div className=" lg:flex  gap-10 justify-between">
          <div>
            <img src={Logo} className="w-30 " />
            <div className="mt-5">
              <h5 className="text-(--blue)  text-xl font-bold">Address</h5>
              <p className="w-80">
                PLOT C – 203 , PHASE – 8 B, MOHALI, MOHALI, SAS Nagar ,
                26-Punjab, 91-INDIA, 160070
              </p>
            </div>
            <div className="mt-5">
              <h5 className="text-(--blue)  text-xl font-bold">Email</h5>
              <p>info@atrixitsolutions.com</p>
            </div>

            <div className="mt-5">
              <h5 className="text-(--blue) text-xl font-bold">
                Social Just You Connected Us!
              </h5>
              <ul>
                <li className="flex relative  mt-3    space-x-4 z-10">
                  <div className="border border-(--black) bg-(--black) p-2 rounded-full transition-colors text-xl cursor-pointer">
                    <FaFacebookF />
                  </div>
                  <div className="border border-(--black) bg-(--black) p-2 rounded-full transition-colors text-xl cursor-pointer">
                    <FaXTwitter />
                  </div>
                  <div className="border border-(--black) bg-(--black) p-2 rounded-full transition-colors text-xl cursor-pointer">
                    <FaLinkedinIn />
                  </div>
                  <div className="border border-(--black) bg-(--black) p-2 rounded-full transition-colors text-xl cursor-pointer">
                    <FaInstagram />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex flex-col space-y-3 mt-12 lg:mt-0">
            <h4 className="text-3xl  inline-block font-bold  ">Our Services</h4>
            <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex  col-auto   gap-16">
              <ul className=" space-y-3 mt-3">
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  3D Animation
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  CRM Development
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  Web Development
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  {" "}
                  MLM Software
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  Graphic Designing
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  Metaverse Development
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  Banking Software Development
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  Digital Marketing
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  App Development
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  UI/UX Design & Development
                </li>
              </ul>
              <ul className=" space-y-3 mt-3">
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  Salesforce Development
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  AI Development
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  Software Development
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  IoT Development
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  Hire Developers
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  Real Estate App Development
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  SAP Business One
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  AEM Development
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  Unity 3D Game Development
                </li>
                <li className=" transition-colors cursor-pointer hover:text-(--blue)">
                  VFX Studio
                </li>
              </ul>
            </div>
          </div>

          <ul className=" space-y-3 mt-12 lg:mt-0">
            <h4 className="text-3xl  inline-block font-bold">Quick Links</h4>

            <li className=" transition-colors cursor-pointer hover:text-(--blue) mt-3">
              Home
            </li>
            <li className=" transition-colors cursor-pointer hover:text-(--blue)">
              About Us
            </li>
            <li className=" transition-colors cursor-pointer hover:text-(--blue)">
              Our Blog
            </li>
            <li className=" transition-colors cursor-pointer hover:text-(--blue)">
              Our Portfolio
            </li>
            <li className=" transition-colors cursor-pointer hover:text-(--blue)">
              FAQ
            </li>
            <li className=" transition-colors cursor-pointer hover:text-(--blue)">
              Career
            </li>
            <li className=" transition-colors cursor-pointer hover:text-(--blue)">
              Contact Us
            </li>
          </ul>

          <ul className="sm:flex md:flex lg:flex xl:flex 2xl:flex flex-col space-y-3  w-full max-w-[400px] lg:mt-0 mt-12">
            <h4 className="text-3xl  inline-block font-bold ">
              We are dedicated to find the right solution for you.
            </h4>

            <li className=" transition-colors cursor-pointer underline decoration-2 font-bold text-xl flex items-center gap-1 mt-8">
              Get in Touch <RxArrowTopRight className="text-2xl" />
            </li>
          </ul>
        </div>

        <div className="text-center mt-28 pt-10 pb-10  border-t border-(--black)   flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center ">
          <p>© Copyright 2025. Atrix IT Solutions | All Right Reserved.</p>
          <ul className="sm:flex md:flex lg:flex xl:flex 2xl:flex justify-end items-center gap-3">
            <li className="border-r pr-4 ">Support Policy</li>
            <li className="border-r pr-4 ">Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
