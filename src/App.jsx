import { useEffect } from "react";

// layout
import BaseLayout from "./layout/BaseLayout";

// routes
import Inbox from "./routes/Inbox";
import Mail from "./routes/Mail";

// COMPONENTS
import Login from "./components/Login";

// react router
import { createBrowserRouter, RouterProvider } from "react-router";

// COMPONENTS
import ComposeMail from "./components/ComposeMail";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user/user.reducer";

// Firebase
import {
  createUserInFirebase,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { selectCurrentUser } from "./redux/user/user.selector";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { path: "/", element: <Inbox /> },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((firebaseUser) => {
      if (firebaseUser) {
        dispatch(
          setCurrentUser({
            uid: firebaseUser.uid,
            displayName: firebaseUser.displayName,
            email: firebaseUser.email,
            photoURL: firebaseUser.photoURL,
          })
        );
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    return unsubscribe;
  }, [dispatch]);

  if (!user) return <Login />;

  return (
    <div className="bg-[#323232] h-screen w-screen overflow-hidden">
      <RouterProvider router={router} />
      <div className="absolute w-[600px] bottom-0 right-20 z-10">
        <ComposeMail />
      </div>
    </div>
  );
};

export default App;
