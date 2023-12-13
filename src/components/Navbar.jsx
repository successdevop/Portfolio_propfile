import { FaBars, FaMoon } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { GiStarFormation } from "react-icons/gi";

import { Link } from "react-router-dom";
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
      <div className="max-w-[120rem] mx-auto">
        {/* nav logo and toggle bars */}
        <div className="flex items-center justify-between px-8 py-10">
          <div>
            <p className="text-[#102a42] text-[3.8rem] font-Roboto tracking-[.28rem] font-bold drop-shadow-lg">
              Success<span className="text-[#e9b949]">Dev</span>
            </p>
          </div>
          {/* nav buttons for toggle */}
          <div onClick={() => setNavOpen((open) => !open)}>
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
          className="overflow-hidden transition-all"
        >
          <ul className="flex flex-col items-center gap-8 pb-10" ref={linksRef}>
            <li>
              <Link
                to={"/"}
                className="text-[2.5rem] block hover:text-[#e9b949] hover:transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="text-[2.5rem] block hover:text-[#e9b949] hover:transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/projects"}
                className="text-[2.5rem] block hover:text-[#e9b949] hover:transition-all"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="text-[2.5rem] block hover:text-[#e9b949] hover:transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* light and dark effect */}
        <div className="hidden">
          <GiStarFormation />
          <FaMoon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
