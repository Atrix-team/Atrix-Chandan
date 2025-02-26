import React, { useEffect, useState } from "react";

const CountSection = () => {
  const count = [
    {
      number: 28,
      text: "designers and developers",
      bgClass: "bg-(--darkblack)",
      colorclass: "text-(--white)",
      width: "w-40",
    },
    {
      number: 328,
      text: "awards for digital innovation",
      bgClass: "bg-(--black)",
      colorclass: "text-(--white)",
      width: "w-48",
    },
    {
      number: 2999,
      text: "happy customers",
      bgClass: "bg-(--gray)",
      colorclass: "text-(--darkblack)",
      width: "w-30",
    },
  ];

  const [counts, setCounts] = useState(
    count.map((item) => ({ ...item, current: 0 }))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((item) => {
          if (item.current < item.number) {
            return {
              ...item,
              current: item.current + Math.ceil(item.number / 50),
            };
          }
          return item;
        })
      );
    }, 50);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div
      className="bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://atrixitsolutions.com/wp-content/uploads/2024/08/demo.jpg)",
        height: "623px",
      }}
    >
      <div className="mx-auto container items-end">
        <div className="flex items-end gap-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
          {counts.map((item, index) => (
            <div
              key={index}
              className={`text-center items-start flex sm:justify-items-start md:justify-items-start lg:justify-items-start xl:justify-items-start 2xl:justify-items-start px-6 py-8 mb-4 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 h-40 ${item.bgClass} ${item.colorclass}`}
            >
              <div className={`items-start text-start ${item.width}`}>
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  {item.current}+{" "}
                </span>

                <h3 className="text-lg sm:text-xl md:text-2xl mt-2 font-bold">
                  {item.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountSection;
