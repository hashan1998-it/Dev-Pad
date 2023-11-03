import React from "react";
import { useState } from "react";

function TabBar() {
  const [active, setActive] = useState(0);

  const activate = (index) => {
    setActive(index);
  };

  const holder = [
    {
      text: "HTML",
      className:
        "below-menu-holder rounded-bl-xl rounded-tl-xl w-1/4 flex justify-around",
    },
    {
      text: "CSS",
      className: "below-menu-holder w-1/4 flex duration-700 justify-around",
    },
    {
      text: "JS",
      className: "below-menu-holder w-1/4 flex duration-700 justify-around",
    },
  ];

  return (
    <div className="flex flex-col justify-around sm:hidden">
      <div className="p-2 w-full h-16 border-box bottom-0">
        <div className="bg-blue-400 flex justify-around text-white w-full h-full">
          {holder.map((item, index) => (
            <div
              key={index}
              className={`${active === index ? "border-t-4 bg-blue-200" : ""} ${
                item.className
              }`}
              onClick={() => activate(index)}
            >
              <span className="self-center">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TabBar;
