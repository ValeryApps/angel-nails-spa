import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Slide } from "react-awesome-reveal";
import { AppointmentButton } from "./buttons/AppointmentButton";

export const Hero = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="mySwiper w-full h-[650px] overflow-hidden"
        effect="coverflow"
      >
        <SwiperSlide>
          <img
            src="/image/make.jpg"
            alt=""
            className="w-full h-[650px] object-cover"
          />

          <div className="absolute top-0 z-10 w-full h-[650px] bg-[#0000007e]">
            <Slide className="mt-32">
              <div className="flex flex-col gap-5">
                <h1 className="text-center font-extrabold text-white text-2xl">
                  SPA & BEAUTY CENTER
                </h1>
                <h1 className="text-center text-5xl md:text-7xl  font-extrabold text-white">
                  MAKE UP
                </h1>
                <p className="text-center font-extrabold text-white text-2xl">
                  Angel Nails is a cosmetic and personal care center
                </p>
                <div className="text-center mt-4">
                  <AppointmentButton white={false} />
                </div>
              </div>
            </Slide>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/ped.jpg"
            alt=""
            className="w-full h-[650px]  object-cover"
          />
          <div className="absolute top-0 z-10 w-full h-[650px] bg-[#0000007e]">
            <Slide className="mt-32" delay={3000}>
              <div className="flex flex-col gap-5">
                <h1 className="text-center font-extrabold text-white text-2xl">
                  SPA & BEAUTY CENTER
                </h1>
                <h1 className="text-center text-5xl md:text-7xl font-extrabold text-white">
                  PEDICURE
                </h1>
                <p className="text-center font-extrabold text-white text-2xl">
                  Angel Nails is a cosmetic and personal care center
                </p>
                <div className="text-center mt-4">
                  <AppointmentButton white={false} />
                </div>
              </div>
            </Slide>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/img11.jpg"
            alt=""
            className="w-full h-[650px] object-cover"
          />
          <div className="absolute top-0 z-10 w-full h-[650px] bg-[#0000007e]">
            <Slide className="mt-32">
              <div className="flex flex-col gap-5">
                <h1 className="text-center font-extrabold text-white text-2xl">
                  SPA & BEAUTY CENTER
                </h1>
                <h1 className="text-center text-5xl md:text-7xl font-extrabold text-white">
                  WEAVING
                </h1>
                <p className="text-center font-extrabold text-white text-2xl">
                  Angel Nails is a cosmetic and personal care center
                </p>
                <div className="text-center mt-4">
                  <button className="border-2 border-white bg-transparent w-fit px-8 py-3 text-white font-bold rounded-full">
                    Make Appointment
                  </button>
                </div>
              </div>
            </Slide>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/med.jpg"
            alt=""
            className="w-full h-[650px] object-cover"
          />
          <div className="absolute top-0 z-10 w-full h-[650px] bg-[#0000007e]">
            <Slide className="mt-32">
              <div className="flex flex-col gap-5">
                <h1 className="text-center font-extrabold text-white text-2xl">
                  SPA & BEAUTY CENTER
                </h1>
                <h1 className="text-center text-5xl md:text-7xl font-extrabold text-white">
                  NAILS
                </h1>
                <p className="text-center font-extrabold text-white text-2xl">
                  Angel Nails is a cosmetic and personal care center
                </p>
                <div className="text-center mt-4">
                  <button className="border-2 border-white bg-transparent w-fit px-8 py-3 text-white font-bold rounded-full">
                    Make Appointment
                  </button>
                </div>
              </div>
            </Slide>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
