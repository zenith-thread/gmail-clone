import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selector";
import { signOutUserAsync } from "../redux/user/user.reducer";

const Dropdown = () => {
  // REDUX
  const dispatch = useDispatch();
  let { email, displayName, photoURL } = useSelector(selectCurrentUser);
  displayName = displayName.split(" ")[0];

  console.log(photoURL);
  const signOutHandler = () => {
    dispatch(signOutUserAsync());
  };

  return (
    <div className="flex flex-col items-center h-[350px] w-[400px] bg-[#252525] absolute right-5 top-16 rounded-2xl shadow-2xl p-6 text-white">
      <div className="flex flex-col gap-6 items-center">
        <p className="font-medium">{email}</p>
        <img
          src={photoURL}
          className="rounded-full w-[100px] h-[100px]"
          alt="Profile Avatar"
        />
        <p className="text-xl font-medium">Hi, {displayName}!</p>
      </div>
      <div
        onClick={signOutHandler}
        className="flex items-center bg-[#141414] mt-[30px] px-8 py-4 rounded-full w-full font-medium cursor-pointer hover:bg-[#4d4d4d]"
      >
        <button>Sign out</button>
      </div>
    </div>
  );
};

export default Dropdown;
