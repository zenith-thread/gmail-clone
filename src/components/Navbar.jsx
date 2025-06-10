// Components
import IconCreactor from "./IconCreactor";

// React Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16 ">
      {/* Left side for hamburger icon and logo */}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <IconCreactor IconComponent={RxHamburgerMenu} sizeOfIcon="24px" />
          <img src="/Gmail_icon.svg" className="w-8" />
          <h1 className="text-2xl text-[#EAEAEA] font-medium">Gmail</h1>
        </div>
      </div>
      {/* Search Bar */}
      <div className="md:block hidden rounded-full w-[38%] mr-[30%]">
        <div className="flex items-center bg-[#606060] text-[#EAEAEA] px-4 py-3 rounded-full">
          <IoIosSearch size="24px" className="text-[#EAEAEA]" />

          <input
            type="text"
            className="rounded-full outline-none bg-transparent w-full font-medium px-3"
          />
        </div>
      </div>

      {/* Query Field */}
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <IconCreactor
            IconComponent={AiOutlineQuestionCircle}
            sizeOfIcon="24px"
          />
          <IconCreactor IconComponent={IoSettingsOutline} sizeOfIcon="24px" />
          <IconCreactor IconComponent={PiDotsNineBold} sizeOfIcon="24px" />
          <div className="flex items-center justify-center cursor-pointer hover:bg-[#545455] h-12 w-12 rounded-full">
            <img
              src="https://img.freepik.com/premium-vector/side-face-man-silhouette-set-vector-illustration_1004393-125.jpg?semt=ais_hybrid&w=740"
              className="rounded-full w-9 h-9"
              alt="Profile Avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
