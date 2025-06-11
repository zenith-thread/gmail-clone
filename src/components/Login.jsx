import GoogleButton from "react-google-button";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { signInWithGoogleAsync } from "../redux/user/user.reducer";
import { selectUserError, selectUserStatus } from "../redux/user/user.selector";

const Login = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectUserStatus);
  const error = useSelector(selectUserError);

  const handleGoogleClick = () => {
    dispatch(signInWithGoogleAsync());
  };
  return (
    <div className="bg-[#323232] w-screen h-screen flex justify-center items-center">
      <div className="p-8 flex flex-col gap-3 rounded-md">
        <h1 className="text-center text-xl text-white font-medium mb-5">
          Login
        </h1>
        <GoogleButton
          onClick={handleGoogleClick}
          disabled={status === "loading"}
        />
        {status === "failed" && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
