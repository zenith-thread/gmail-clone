// components
import InboxIconCreator from "../components/InboxIconCreator";
import Emails from "../components/Emails";

// react icons
import {
  MdCropSquare,
  MdOutlinePeopleAlt,
  MdOutlineForum,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { RiInboxFill } from "react-icons/ri";
import { GoTag } from "react-icons/go";
import { useState } from "react";
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

  const [mailTypeSelected, setMailTypeSelected] = useState(0);

  const handleMailType = (id) => {
    setMailTypeSelected(id);
  };

  return (
    <div className="flex-1 min-w-0 bg-[#D7D7D7] rounded-2xl mr-15">
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

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-2 mr-[10px]">
          <p className="text-sm text-gray-500">1-50 of 1000</p>

          <InboxIconCreator
            InboxIcon={MdKeyboardArrowLeft}
            iconSize="22px"
            classes="p-2 rounded-full"
          />

          <InboxIconCreator
            InboxIcon={MdKeyboardArrowRight}
            iconSize="22px"
            classes="p-2 rounded-full"
          />
        </div>
      </div>

      {/* Emails Section */}
      <div className="h-[86vh] overflow-y-auto">
        {/* MAIL TYPE SECTION */}
        <div className="flex items-center">
          {mailType.map(({ id, text, icon }) => (
            <div
              className={`${
                mailTypeSelected === id
                  ? "border-b-[#0B57D0] border-b-4 text-[#0B57D0]"
                  : "border-b-4 border-b-transparent"
              } p-4 w-70 hover:bg-[#CFCFCF] font-semibold cursor-pointer`}
              key={id}
              onClick={() => handleMailType(id)}
            >
              <div className="flex items-center gap-4">
                {icon}
                {text}
              </div>
            </div>
          ))}
        </div>

        {/* Emails */}
        <Emails />
      </div>
    </div>
  );
};

export default Inbox;
