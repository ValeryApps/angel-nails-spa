import { Slide } from "react-awesome-reveal";
import { GiRotaryPhone } from "react-icons/gi";
import { GrMail } from "react-icons/gr";

export const Contacts = ({ isSkew = false }) => {
  return (
    <Slide className="grid place-items-center py-3 hover:rotate-3 transition duration-500 ease-in-out cursor-pointer">
      <div
        className={`w-fit bg-slate-100 py-3 px-10 ${
          isSkew && "skew-x-12"
        } rounded-xl`}
      >
        <span className="flex items-center gap-3 ">
          <GiRotaryPhone /> (+231): 0770181803/ 0886605093.
        </span>
        <span className="flex items-center gap-3">
          <GrMail /> angelnailsspa@gmail.com
        </span>
      </div>
    </Slide>
  );
};
