// components
import InboxIconCreator from "../components/InboxIconCreator";

// react icons
import {
  MdCropSquare,
  MdOutlinePeopleAlt,
  MdOutlineForum,
} from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { MdInbox } from "react-icons/md";
import { RiInboxFill } from "react-icons/ri";
import { GoTag } from "react-icons/go";
const Inbox = () => {
  const mailType = [
    {
      id: 0,
      icon: <RiInboxFill size="18px" />,
      text: "Primary",
    },
    {
      id: 1,
      icon: <GoTag size="18px" />,
      text: "Promotions",
    },
    {
      id: 2,
      icon: <MdOutlinePeopleAlt size="18px" />,
      text: "Social",
    },
    {
      id: 3,
      icon: <MdOutlineForum size="18px" />,
      text: "Forums",
    },
  ];

  return (
    <div className="flex-1 bg-[#D7D7D7] rounded-xl mr-15">
      {/* BASE INBOX HEADER */}
      <div className="flex items-center justify-between py-2 px-3">
        {/* LEFT ICONS */}
        <div className="flex items-center gap-5 text-gray-700">
          {/* FIRST TWO ICONS */}
          <div className="flex items-center">
            <InboxIconCreator
              InboxIcon={MdCropSquare}
              iconSize="22px"
              classes="py-2 px-1 rounded-xl"
            />
            <InboxIconCreator
              InboxIcon={FaCaretDown}
              iconSize="14px"
              classes="py-2 px-1 rounded-xl"
            />
          </div>

          {/* LAST TWO ICONS */}
          <div className="flex items-center gap-3">
            <InboxIconCreator
              InboxIcon={IoMdRefresh}
              iconSize="18px"
              classes="p-2 rounded-full"
            />
            <InboxIconCreator
              InboxIcon={HiDotsVertical}
              iconSize="16px"
              classes="p-2 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* MAIL TYPE SECTION */}
      <div className="flex items-center">
        {mailType.map(({ id, text, icon }) => (
          <div
            className="p-4 w-70 hover:bg-[#CFCFCF] font-semibold cursor-pointer"
            key={id}
          >
            <div className="flex items-center gap-4">
              {icon}
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
