import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Home from "./components/Home.tsx";
import Item from "./components/Item.tsx";
import Quiz from "./components/quiz/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Item />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
    ],
  },
]);

export default router;
