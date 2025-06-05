// layout
import BaseLayout from "./layout/BaseLayout";

// routes
import Inbox from "./routes/Inbox";
import Mail from "./routes/Mail";

// react router
import { createBrowserRouter, RouterProvider } from "react-router";

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
  return (
    <div className="bg-[#323232] h-screen w-screen overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
