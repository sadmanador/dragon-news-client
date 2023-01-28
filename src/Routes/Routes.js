import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main");
const { default: Categories } = require("../Pages/Categories/Categories");
const { default: Home } = require("../Pages/Home/Home");
const { default: News } = require("../Pages/News/News");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ({ params }) =>
          fetch(`https://dragon-news-server-two-silk.vercel.app/news`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoutes>
            <News></News>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-two-silk.vercel.app/news/${params.id}`
          ),
      },
      {
        path: "/category/:id",
        element: <Categories></Categories>,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-two-silk.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ],
  },
]);
