import React from "react";
import { Slide } from "react-awesome-reveal";
import { AppointmentButton } from "./buttons/AppointmentButton";
import { Section } from "./buttons/Section";

import { Contacts } from "./buttons/Contacts";

export const About = () => {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-pink-200 lg:h-[750px] overflow-hidden  ">
      <Section text="About us" />
      <div className=" lg:h-[750px]">
        <div className="lg:h-[750px] relative ">
          <div className="lg:w-[80%] pt-4 flex flex-col justify-center gap-4 ml-[-20px] z-20 ">
            <div className="ml-32 lg:-skew-x-12 p-4 shadow-xl shadow-white bg-white ">
              <Slide
                direction="up"
                triggerOnce
                className="text-center font-extrabold text-black xl:text-6xl lg:text-4xl md:text-3xl text-xl  mb-4"
              >
                Your Best Spa, Beauty & Skin Care Center
              </Slide>
              <div className="flex justify-center items-center">
                <div className="flex flex-col lg:text-4xl md:text-2xl text-xl font-bold gap-3 text-pink-900 border-l-2 border-yellow-900 pl-2">
                  <Slide triggerOnce>We are located in Sinkor,</Slide>
                  <Slide triggerOnce> Between 18 & 19 Streets,</Slide>
                  <Slide triggerOnce>Russel Avenue,</Slide>
                  <Slide triggerOnce>Monrovia, Liberia</Slide>
                </div>
              </div>
              <Contacts isSkew={true} />
              <div className="text-center mt-4">
                <AppointmentButton white={true} />
              </div>
            </div>
          </div>
          <img
            src="/image/img1.jpg"
            alt=""
            className="hidden lg:block absolute bottom-32 right-14 w-96 h-96 rounded-full shadow-2xl shadow-yellow-50 "
          />
        </div>
      </div>
    </div>
  );
};
