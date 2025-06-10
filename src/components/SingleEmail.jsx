import { MdCropSquare } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useNavigate } from "react-router";

// components
// import IconCreactor from "./IconCreactor";

const SingleEmail = () => {
  const navigate = useNavigate();
  const openMail = () => {
    navigate("/mail/123456");
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
        <p className="text-gray-600 truncate">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
          praesentium saepe perferendis asperiores inventore, odit eum iusto
          tenetur, autem optio a aliquam itaque? Ratione eligendi cumque,
          adipisci sit saepe at amet, et temporibus libero quis totam nemo ex,
          nesciunt mollitia?
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm">24:03</div>
    </div>
  );
};

export default SingleEmail;
