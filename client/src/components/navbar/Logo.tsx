import { Link } from "react-router-dom";

const Logo = () => {
  const logoUrl =
    "https://res.cloudinary.com/dmv4vtgbw/image/upload/v1760437039/rumahku-kontruksi-high-resolution-logo-transparent_rxswjp.png";

  return (
    <Link to="/" className="flex items-center shrink-0">
      <img
        src={logoUrl}
        alt="RumahKu Konstruksi"
        className="w-32 md:w-36 hover:scale-105 transition-transform"
      />
    </Link>
  );
};

export default Logo;
