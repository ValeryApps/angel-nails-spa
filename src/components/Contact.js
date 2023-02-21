import React from "react";
import { Contacts } from "./buttons/Contacts";
import { Section } from "./buttons/Section";

export const Contact = () => {
  return (
    <div className="mt-4">
      <Section text="Contact Us" />
      <div className="bg-about flex items-center justify-center h-[620px] w-full">
        <div className="bg-[#0000006e] h-[620px] w-full flex justify-center items-center">
          <div className="mx-auto bg-[#ffffff3b] w-[90%] lg:w-[50%] my-4 px-4 shadow-md shadow-slate-400 rounded-md">
            <h1 className="text-center text-pink-800 font-bold">Contact us</h1>
            <form className="py-3 flex flex-col gap-3 items-center justify-center">
              <input
                type="text"
                placeholder="Enter your name"
                // onChange={(}
                className="w-full px-2 py-1 rounded-md shadow-md border-2 border-white outline-none text-white bg-transparent active:border-b-2 active:border-pink-700 "
              />
              <input
                type="text"
                placeholder="Phone Number"
                // onChange={(}
                className="w-full px-2 py-1 rounded-md shadow-md border-2 border-white outline-none text-white bg-transparent active:border-b-2 active:border-pink-700"
              />
              <textarea
                rows={3}
                placeholder="What do you want us to do for your?"
                // onChange={(}
                className="w-full px-2 py-1 rounded-md shadow-md border-2 border-white outline-none text-white bg-transparent active:border-b-2 active:border-pink-700"
              ></textarea>
              <button className="px-12 py-2 border-2 border-white w-fit rounded-full text-white hover:scale-105 transform duration-500">
                Send
              </button>
              <h1>Or contact us on: </h1>
              <Contacts />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
