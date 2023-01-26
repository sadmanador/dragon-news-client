const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main");
const { default: Categories } = require("../Pages/Categories/Categories");
const { default: Home } = require("../Pages/Home/Home");
const { default: News } = require("../Pages/News/News");

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ({params}) => fetch(`https://dragon-news-server-two-silk.vercel.app/news`)
            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({params}) => fetch(`https://dragon-news-server-two-silk.vercel.app/news/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <Categories></Categories>,
                loader: ({params}) => fetch(`https://dragon-news-server-two-silk.vercel.app/category/${params.id}`)
            }
        ]
    }
])