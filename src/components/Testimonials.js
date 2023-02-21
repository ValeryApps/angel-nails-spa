import { EffectCoverflow } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../data/testimonies";
import { AppointmentButton } from "./buttons/AppointmentButton";
import { Section } from "./buttons/Section";

export const Testimonials = () => {
  return (
    <div className=" bg-slate-100 px-4 py-10">
      <Section text="Testimonials" />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="mySwiper w-full lg:w-[80%] xl:w-[75%] h-52 overflow-hidden"
        effect="coverflow"
      >
        {testimonials.map((ts, i) => (
          <SwiperSlide key={i}>
            <div className="hidden lg:flex items-center gap-4">
              <div className="bg-pink-200 rounded-xl">
                <img
                  src={ts.img}
                  alt=""
                  className="w-96 h-52 object-cover rounded-xl"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex gap-3">
                  <span className="font-bold text-xl">{ts.name}</span>
                  <span className="">{ts.occupation}</span>
                </div>
                <div className=" bg-slate-200 px-3 py-3">{ts.text}</div>
              </div>
            </div>

            <div className="lg:hidden items-center gap-4">
              <div className=" rounded-xl flex gap-2">
                <img
                  src={ts.img}
                  alt=""
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex flex-col gap-3">
                  <span className="font-bold text-xl">{ts.name}</span>
                  <span className="">{ts.occupation}</span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className=" bg-slate-200 px-3 py-3">{ts.text}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <AppointmentButton white={true} />
    </div>
  );
};
