import React from "react";

export default function ArrowDown() {
  return (
    <a
      href="#about"
      className="sticky bottom-0 left-1/2 transform -translate-x-1/2"
    >
      <div className="relative w-full h-32 my-24">
        <div className="arrows dark:border-white border-black" />
      </div>
    </a>
  );
}
