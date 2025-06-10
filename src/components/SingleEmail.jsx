import { MdCropSquare } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useNavigate } from "react-router";

// components
// import IconCreactor from "./IconCreactor";

// REDUX
import { useDispatch } from "react-redux";
import { setSelectedEmail } from "../redux/composeEmail/composeEmail.reducer";

const SingleEmail = ({ email }) => {
  const { message, id, createdAt } = email;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openMail = () => {
    dispatch(setSelectedEmail(email));
    navigate(`/mail/${id}`);
  };

  return (
    <div
      onClick={openMail}
      className="flex items-start justify-between border-b border-gray-400 px-4 py-2 hover:cursor-pointer hover:shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-500">
          <MdCropSquare className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-500">
          <CiStar className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-500">
          <MdOutlineDoubleArrow className="w-5 h-5" />
        </div>
      </div>
      <div className="flex-1 ml-4 min-w-0 px-4">
        <p className="text-gray-600 truncate">{message}</p>
      </div>
      <div className="flex-none text-gray-400 text-sm">
        <span>{new Date(createdAt.seconds * 1000).toUTCString()}</span>
      </div>
    </div>
  );
};

export default SingleEmail;
