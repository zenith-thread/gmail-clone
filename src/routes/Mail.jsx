import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";

// COMPONENTS
import InboxIconCreator from "../components/InboxIconCreator";
import { useNavigate } from "react-router";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { selectSelectedEmail } from "../redux/composeEmail/composeEmail.selector";
import { deleteEmailAsync } from "../redux/composeEmail/composeEmail.reducer";

const Mail = () => {
  const navigate = useNavigate();

  const previousNavigateHandler = () => {
    navigate("/");
  };

  // REDUX
  const dispatch = useDispatch();

  const email = useSelector(selectSelectedEmail);
  const { subject, message, createdAt, id } = email;

  const deleteEmailHandler = () => {
    dispatch(deleteEmailAsync(id));
    previousNavigateHandler();
  };

  return (
    <div className="flex-1 min-w-0 rounded-2xl bg-[#D7D7D7] mr-15">
      {/* BASE MAIL HEADER */}
      <div className="flex items-center justify-between px-4">
        {/* LEFT ICONS */}
        <div className="flex items-center gap-3 text-gray-700 py-2">
          <InboxIconCreator
            onClick={previousNavigateHandler}
            InboxIcon={IoMdArrowBack}
            iconSize="20px"
            classes="p-2 rounded-full"
          />
          <InboxIconCreator
            InboxIcon={MdOutlineReport}
            iconSize="20px"
            classes="p-2 rounded-full"
          />

          <InboxIconCreator
            onClick={deleteEmailHandler}
            InboxIcon={MdDeleteOutline}
            iconSize="20px"
            classes="p-2 rounded-full"
          />
          <InboxIconCreator
            InboxIcon={MdOutlineMarkEmailUnread}
            iconSize="20px"
            classes="p-2 rounded-full"
          />
          <InboxIconCreator
            InboxIcon={MdOutlineWatchLater}
            iconSize="20px"
            classes="p-2 rounded-full"
          />
          <InboxIconCreator
            InboxIcon={MdOutlineAddTask}
            iconSize="20px"
            classes="p-2 rounded-full"
          />
          <InboxIconCreator
            InboxIcon={MdOutlineDriveFileMove}
            iconSize="20px"
            classes="p-2 rounded-full"
          />
          <InboxIconCreator
            InboxIcon={IoMdMore}
            iconSize="20px"
            classes="p-2 rounded-full"
          />
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-2 mr-[10px]">
          <InboxIconCreator
            InboxIcon={MdKeyboardArrowLeft}
            iconSize="22px"
            classes="p-2 rounded-full text-gray-500"
          />
          <InboxIconCreator
            InboxIcon={MdKeyboardArrowRight}
            iconSize="22px"
            classes="p-2 rounded-full text-gray-500"
          />
        </div>
      </div>

      {/* MAIL BODY */}
      <div className="h-[86vh] overflow-y-scroll p-4 bg-white rounded-b-2xl">
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">{subject}</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">Inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>{new Date(createdAt.seconds * 1000).toUTCString()}</p>
          </div>
        </div>
        <div className="text-gray-500 text-sm ">
          <h1>to</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
