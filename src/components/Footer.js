import React from "react";

export const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="h-52 w-full bg-gradient-to-b from-pink-500 to-pink-900 relative">
      <div className="absolute bottom-3 left-6 text-white">
        © {getCurrentYear()} -{" "}
        <span className="purpleColor font13">Angel Nails SPA</span>{" "}
        <span className="font-normal">All Right Reserved</span>
        <p className="block">
          <span className="underline underline-offset-2">
            {" "}
            Development and designed by:
          </span>{" "}
          AVT (Africa Victory-Tech)
        </p>
      </div>
    </div>
  );
};
