import { NavLink } from "react-router-dom";

type TMobileMenuProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const menuList: Record<string, string>[] = [
  { label: "Beranda", to: "/" },
  { label: "Tentang", to: "/about" },
  { label: "Kontak", to: "/contact" },
];

const MobileMenu = ({ menuOpen, setMenuOpen }: TMobileMenuProps) => {
  return (
    <div
      className={`
        absolute md:static top-12 left-0 w-full md:w-auto
        bg-white md:bg-transparent shadow-md md:shadow-none
        transition-all duration-300
        ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible md:visible md:opacity-100"
        }
      `}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-center md:gap-8 p-4 md:p-0">
        {menuList.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `py-2 md:py-0 transition-colors ${
                isActive
                  ? "text-l-bold text-primary-main"
                  : "text-secondary-main hover:text-primary-hover text-l-regular"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
