// Components
import SidebarLinks from "./SidebarLinks";

// React Icons
import { LuPencil } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { TbSend2 } from "react-icons/tb";
import { MdOutlineDrafts, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiInboxFill } from "react-icons/ri";

// REDUX
import { useDispatch } from "react-redux";
import { setComposeEmail } from "../redux/composeEmail/composeEmail.reducer";

const Sidebar = () => {
  const sidebarItems = [
    {
      id: 0,
      linkName: "Inbox",
      SidebarIcon: RiInboxFill,
    },
    {
      id: 1,
      linkName: "Starred",
      SidebarIcon: FaRegStar,
    },
    {
      id: 2,
      linkName: "Snoozed",
      SidebarIcon: FaRegClock,
    },
    {
      id: 3,
      linkName: "Sent",
      SidebarIcon: TbSend2,
    },
    {
      id: 4,
      linkName: "Drafts",
      SidebarIcon: MdOutlineDrafts,
    },
    {
      id: 5,
      linkName: "More",
      SidebarIcon: MdOutlineKeyboardArrowDown,
    },
  ];

  const dispatch = useDispatch();

  const composeEmailHandler = () => {
    dispatch(setComposeEmail(true));
  };

  return (
    <div className="w-[15%] ">
      {/* Compose Button */}
      <div className="p-3">
        <button
          onClick={composeEmailHandler}
          className="flex items-center gap-3 py-4 px-6 cursor-pointer bg-white rounded-2xl hover:shadow-lg mb-5"
        >
          <LuPencil size="18px" />
          <span className="font-medium">Compose</span>
        </button>

        {/* Sidebar Links */}
        {sidebarItems.map(({ id, linkName, SidebarIcon }) => (
          <SidebarLinks
            key={id}
            SidebarIcon={SidebarIcon}
            iconSize="16px"
            linkName={linkName}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
