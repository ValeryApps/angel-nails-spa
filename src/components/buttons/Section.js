import React from "react";

export const Section = ({ text }) => {
  return (
    <div className="  bg-gradient-to-l from-pink-900 to-pink-300  rounded-tl-full rounded-br-full w-fit mx-auto my-1 px-12 py-2 hover:rounded-tl-none hover:rounded-br-none transition duration-500 ease-in-out">
      <h1 className="text-xl text-center text-white lg:text-2xl xl:text-4xl hover:translate-x-2  transition duration-500 ease-in-out">
        {text}
      </h1>
    </div>
  );
};
