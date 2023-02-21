import React from "react";

export const AppointmentButton = ({ white }) => {
  return (
    <div className="text-center mt-4">
      <button
        className={`${
          white ? "border-pink-900 text-pink-900" : "border-white  text-white"
        } border-2  bg-transparent w-fit px-8 py-3  font-bold rounded-full hover:scale-105 transform duration-500`}
      >
        Make Appointment
      </button>
    </div>
  );
};
