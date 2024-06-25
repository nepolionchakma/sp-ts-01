import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login/Login";
import Root from "./Root/Root";
import Todo from "./pages/Todo/Todo";
import Alert from "./pages/Alert/Alert";
import Tasks from "./pages/Tasks/Tasks";
import Messages from "./pages/Messages/Messages";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
// import { useAuthContext } from "./store/AuthContext";

function App() {
  // const { userDetails, isAuthenticated } = useAuthContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      // element: isAuthenticated ? <Todo /> : <Login />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "alert",
          element: <Alert />,
        },
        {
          path: "tasks",
          element: <Tasks />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "todo",
      element: <Todo />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
