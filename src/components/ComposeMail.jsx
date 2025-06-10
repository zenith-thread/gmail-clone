import { RxCross2 } from "react-icons/rx";
import InboxIconCreator from "./InboxIconCreator";
import ComposeEmailForm from "./ComposeEmailForm";

// REDUX
import { useSelector } from "react-redux";
import { selectIsComposeEmail } from "../redux/composeEmail/composeEmail.selector";
import { useDispatch } from "react-redux";
import { setComposeEmail } from "../redux/composeEmail/composeEmail.reducer";

const ComposeMail = () => {
  const dispatch = useDispatch();
  const isComposeEmailOpen = useSelector(selectIsComposeEmail);

  const closeComposeEmailHandler = () => {
    dispatch(setComposeEmail(false));
  };

  return (
    <div
      className={`${
        isComposeEmailOpen ? "block" : "hidden"
      } bg-white max-w-full shadow-xl shadow-slate-600 rounded-top-md h-[600px]`}
    >
      {/* Navigation Bar */}
      <div className="flex px-3 py-2 bg-[#F2F2F2] justify-between rounded-top-md">
        <h1>New Message</h1>
        <div>
          <InboxIconCreator
            onClick={closeComposeEmailHandler}
            InboxIcon={RxCross2}
            iconSize="18px"
            classes="p-2 rounded-full"
          />
        </div>
      </div>
      <ComposeEmailForm />
    </div>
  );
};

export default ComposeMail;
