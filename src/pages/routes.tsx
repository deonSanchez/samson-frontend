import { RouteObject } from "react-router-dom";
import Home from "./HomePage";
import Error from "./ErrorPage";
import Dashboard from "./DashboardPage";
import Setting from "./SettingPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        element: <Dashboard />,
        index: true,
      },
    ],
  },
  {
    path: "settings",
    element: <Setting />,
  },
];

export { routes };
