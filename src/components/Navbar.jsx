import { useState } from "react";

// Components
import IconCreactor from "./IconCreactor";
import Dropdown from "./Dropdown";

// React Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setSearchInputValue } from "../redux/composeEmail/composeEmail.reducer";
import { selectSearchField } from "../redux/composeEmail/composeEmail.selector";
import { selectCurrentUser } from "../redux/user/user.selector";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  // REDUX
  const dispatch = useDispatch();
  const searchField = useSelector(selectSearchField);
  const { photoURL } = useSelector(selectCurrentUser);

  const searchFieldHandler = (e) => {
    dispatch(setSearchInputValue(e.target.value));
  };
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
            onChange={searchFieldHandler}
            value={searchField}
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

          {/* Avatar */}
          <div
            onClick={toggleDropdown}
            className="flex items-center justify-center cursor-pointer hover:bg-[#545455] h-12 w-12 rounded-full"
          >
            <img
              src={photoURL}
              className="rounded-full w-9 h-9"
              alt="Profile Avatar"
            />
          </div>
          {dropdown && <Dropdown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
