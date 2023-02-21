import { AppointmentButton } from "./buttons/AppointmentButton";
import { BsFacebook, BsInstagram, BsSnapchat } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { Section } from "./buttons/Section";
import { team_members } from "../data/team";
// const teamMembers = [
//   // { name: "Name Two", photo: "/image/img4.jpg", function: "Function 1" },
//   {
//     name: "Geraldine Johnson",
//     photo: "/image/img5.jpg",
//     function: "CEO, Angel-Nails ",
//   },
//   {
//     name: "Angeline Kollie",
//     photo: "/image/img13.jpg",
//     function: "Managing Director",
//   },
//   {
//     name: "Muna Jackson",
//     photo: "/image/img11.jpg",
//     function: "Lead Hair Dresser",
//   },
//   {
//     name: "Suzan Freeman",
//     photo: "/image/img12.jpg",
//     function: "Lead Skin Attendant",
//   },
// ];
export const Team = () => {
  return (
    <div className="my-20 px-8 bg-pink-100 py-8 ">
      <Section text="Our Team" />
      <div className="flex flex-wrap gap-3 ">
        {team_members.map((member, index) => (
          <div
            key={index}
            className="w-full md:w-[48%] lg:w-[24%] h-72 bg-gradient-to-l from-pink-600 to-pink-100 cursor-pointer mb-16"
          >
            <img
              src={member.pic}
              alt=""
              className={`hover:-translate-y-14 transition duration-500 w-full h-72 z-20 relative object-cover`}
            />
            <div className="-mt-6 z-10 relative text-center">
              <p className="font-bold text-pink-900">{member.name}</p>
            </div>
            <div className="w-[90%] mx-auto -mt-5 bg-white rounded-lg shadow-md h-24 pt-2  px-3 flex flex-col gap-2">
              <div className="flex items-center justify-between pt-9 text-pink-600">
                <BsFacebook />
                <BsInstagram />
                <BsSnapchat />
                <FaTiktok />
              </div>
              <span className="font-bold italic">{member.position}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <AppointmentButton white={true} />
      </div>
    </div>
  );
};
