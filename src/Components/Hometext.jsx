import React, { useEffect } from "react";

const HomeText = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".moveWithMouse");

    const moveElements = (e) => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const moveX = (mouseX - (rect.left + rect.width / 2)) / 10;
        const moveY = (mouseY - (rect.top + rect.height / 2)) / 10;

        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener("mousemove", moveElements);

    return () => {
      window.removeEventListener("mousemove", moveElements);
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-80 transform translate-x-10 -translate-y-26 text-center z-20 moveWithMouse">
        <div className="bggreencolor blackcolor border border-transparent rounded-4xl px-8 py-2 text-xl rotate-5 font-semibold">
          Web Development
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform translate-x-64 -translate-y-34 text-center z-20 moveWithMouse">
        <div className="bgwhitecolor blackcolor border border-transparent rounded-4xl px-8 py-2 text-xl -rotate-7 font-semibold">
          Marketing
        </div>
      </div>

      <div className="absolute top-1/2 left-80 transform translate-x-60 translate-y-28 text-center z-20 moveWithMouse">
        <div className="bgbluecolor blackcolor border border-transparent rounded-4xl px-8 py-2 text-xl rotate-12 font-semibold">
          Brand Identity
        </div>
      </div>
    </div>
  );
};

export default HomeText;
