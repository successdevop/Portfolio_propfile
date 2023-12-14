import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const linksContainer = useRef(null);
  const linksRef = useRef(null);

  const linkStyles = {
    height: navOpen
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav className="bg-[#fffaeb]">
      <div className="mx-auto max-w-[120rem] justify-between px-8 pr-16 lg:flex lg:items-center">
        {/* nav logo and toggle bars */}
        <div className="flex items-center justify-between px-2 py-10">
          <div>
            <p className="font-Roboto text-[3.8rem] font-bold tracking-[.28rem] text-[#102a42] drop-shadow-lg">
              Success<span className="text-[#e9b949]">Dev</span>
            </p>
          </div>
          {/* nav buttons for toggle */}
          <div
            onClick={() => setNavOpen((open) => !open)}
            className="lg:hidden"
          >
            {navOpen ? (
              <button className="bg-transparent">
                <IoClose size={"3rem"} fill="#e9b949" />
              </button>
            ) : (
              <button className="bg-transparent">
                <FaBars size={"3rem"} />
              </button>
            )}
          </div>
        </div>

        {/* nav links */}
        <div
          ref={linksContainer}
          style={linkStyles}
          className="overflow-hidden transition-all lg:!h-auto"
        >
          <ul
            className="flex flex-col items-center gap-8 pb-10 lg:flex-row lg:gap-16 lg:pb-0"
            ref={linksRef}
          >
            <li>
              <NavLink
                to={"/"}
                className="block text-[2.5rem] hover:text-[#e9b949] hover:transition-all"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className="block text-[2.5rem] hover:text-[#e9b949] hover:transition-all"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/projects"}
                className="block text-[2.5rem] hover:text-[#e9b949] hover:transition-all"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="block rounded-2xl text-[2.5rem] hover:text-[#e9b949] hover:transition-all lg:bg-[#e9b949] lg:px-6 lg:py-4 lg:text-white lg:hover:text-white lg:hover:transition-none"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
