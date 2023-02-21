import { Link } from "react-scroll";

export const Appbar = () => {
  return (
    <>
      <header className="w-full bg-gradient-to-b from-pink-900 to-pink-500 top-0 sticky z-50">
        <nav className="flex items-center justify-between w-[80vw] mx-auto ">
          <div className=" flex items-center gap-1 overflow-hidden">
            <img
              src="/image/logo1.jpg"
              alt=""
              className="object-cover w-16 py-1 rounded-full"
            />
            <h1 className="text-2xl font-bold text-yellow-500">
              Angel Nails - SPA
            </h1>
          </div>

          <ul className="lg:flex gap-7 hidden ">
            <li>
              <Link
                to="hero"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="text-lg font-bold text-white cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="text-lg font-bold text-white cursor-pointer"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="services"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="text-lg font-bold text-white cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="text-lg font-bold text-white cursor-pointer"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="team"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="text-lg font-bold text-white cursor-pointer"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="text-lg font-bold text-white cursor-pointer"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
