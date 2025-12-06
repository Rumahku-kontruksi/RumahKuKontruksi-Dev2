import { useState } from "react";
import { TbLogin2 } from "react-icons/tb";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm backdrop-blur-md">
        <div className="container flex items-center justify-between px-4 py-3 mx-auto">
          {/* Logo */}
          <Logo />

          {/* Navlinks (mobile + desktop) */}
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Login button desktop */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="items-center hidden gap-2 px-4 py-2 transition rounded-lg shadow-md md:flex bg-primary-main hover:bg-primary-hover text-neutral-10 text-l-bold"
            >
              <TbLogin2 size={20} />
              Sign In
            </button>

            {/* Login button mobile */}
            <button
              className="transition-colors md:hidden text-primary-main hover:text-primary-hover"
              onClick={() => setIsModalOpen(true)}
            >
              <TbLogin2 size={24} />
            </button>

            {/* Burger toggle */}
            <button
              className="transition-colors md:hidden text-secondary-main hover:text-primary-hover"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
