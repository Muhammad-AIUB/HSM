import Left from "./Left";
import AppNavbar from "./NavLinks/NavLinks";
// import { NavbarDemo } from "./NavLinks/NavLinks";
import Right from "./Right";
import Top from "./Top";

const Navbar = () => {
  return (
    <div className="relative z-[500]">
      <div className="flex fixed w-full">
        <div className="flex-1 w-full relative">
          <Left />
          <Top />
          <AppNavbar />
          <Right />
        </div>
      </div>
      <div className="h-[110px] md:h-[126px]"></div>
    </div>
  );
};

export default Navbar;
