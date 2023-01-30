import Profile from "../layouts/Profile";
import Login from "../Pages/Login/Login";
import DeleteAccount from "../Pages/Others/Profile/DeleteAccount/DeleteAccount";
import PasswordReset from "../Pages/Others/Profile/PasswordReset/PasswordReset";
import ProfileInfo from "../Pages/Others/Profile/ProfileInfo/ProfileInfo";
import ProfileUpdate from "../Pages/Others/Profile/ProfileUpdate/ProfileUpdate";
import Terms from "../Pages/Others/Terms/Terms";
import Register from "../Pages/Register/Register";
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
        path: "/profile",
        element: <Profile></Profile>,
        children: [
          {
            path: '/profile',
            element: <ProfileInfo></ProfileInfo>
          },
          {
            path: '/profile/profile-info',
            element: <ProfileInfo></ProfileInfo>
          },
          {
            path: '/profile/profile-update',
            element: <ProfileUpdate></ProfileUpdate>
          },
          {
            path: '/profile/password-reset',
            element: <PasswordReset></PasswordReset>
          },
          {
            path: '/profile/delete-account',
            element: <DeleteAccount></DeleteAccount>
          },
        ]
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
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      },
    ],
  },
]);
