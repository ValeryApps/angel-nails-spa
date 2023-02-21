import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { services } from "../data/services";
import { AppointmentButton } from "./buttons/AppointmentButton";
import { Contacts } from "./buttons/Contacts";
import { Section } from "./buttons/Section";

export const Services = () => {
  return (
    <div className="px-8">
      <Section text="Our Services" />
      <div className="flex flex-wrap">
        <div className=" flex justify-center items-center w-full lg:w-[50%] relative">
          <ul className=" font-bold text-lg md:xl lg:2xl xl:text-4xl px-12 w-full flex flex-col gap-6 text-pink-900 shadow-xl shadow-pink-900 lg:absolute lg:-right-10 z-20 bg-white rounded-2xl py-6">
            <span className=" bg-slate-100 py-3 px-4 text-[18px] text-pink-900 rounded-2xl shadow-md">
              Angel nails-spa is a beauty institution offering several services
              to our clients including:
            </span>
            {services.map(({ image, service }, index) => (
              <li key={index} className=" flex gap-2 items-center">
                <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-full overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    className="w-5 h-5 lg:w-7 lg:h-7 rounded-full hover:scale-110 transition duration-300 ease-in-out cursor-pointer hover:object-cover opacity-60 hover:opacity-100"
                  />
                </div>

                <span className="text-[20px] hover:translate-x-5 transition duration-300 ease-in-out cursor-pointer">
                  {service}
                </span>
                <span className="hidden lg:flex"></span>
              </li>
            ))}
            <div className="text-sm">
              <Contacts />
            </div>
          </ul>
        </div>
        <div className=" w-full lg:w-[50%]">
          <Slide triggerOnce direction="up">
            <div className="overflow-hidden">
              <img
                src="/image/img5.jpg"
                alt=""
                className="object-cover hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
              />
            </div>
          </Slide>
        </div>
      </div>
      <Fade className="text-center mt-4">
        <AppointmentButton white={true} />
      </Fade>
    </div>
  );
};
